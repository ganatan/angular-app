import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream';
import { promisify } from 'util';
import fetch from 'node-fetch';

const streamPipeline = promisify(pipeline);

export async function generateVideo({ name, avatarId, voiceId, text }) {
  try {
    const key = process.env.JOGGAI_API_KEY;
    const voiceIdTmp = process.env.JOGGAI_VOICE_ID
    const script = text;

    const body = {
      script,
      aspect_ratio: 1,
      screen_style: 1,
      avatar_id: Number(avatarId),
      avatar_type: 0,
      voice_id: Number(voiceIdTmp),
      caption: false
    };

    const response = await fetch('https://api.jogg.ai/v1/create_video_from_talking_avatar', {
      method: 'POST',
      headers: {
        'x-api-key': key,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    if (data.code !== 0) {
      throw new Error(`JoggAI API error: ${data.msg}`);
    }

    return {
      success: true,
      project_id: data.data.project_id
    };
  } catch (error) {
    console.error('❌ Erreur JoggAI :', error.message);
    throw error;
  }
}

export async function getVideoFromProjectId(projectId, name, llm) {

  const outputDir = path.resolve('storage/videos');

  const key = process.env.JOGGAI_API_KEY;
  const url = `https://api.jogg.ai/v1/project?project_id=${projectId}`;

  const response = await fetch(url, {
    headers: {
      'accept': 'application/json',
      'x-api-key': key
    }
  });

  const data = await response.json();

  if (data.code !== 0) {
    throw new Error(`Erreur JoggAI : ${data.msg}`);
  }

  const project = data.data;

  if (project.status_code !== 4 || !project.video_url) {
    return { ready: false };
  }
  const videoRes = await fetch(project.video_url);
  const imageRes = await fetch(project.cover_url);

  if (!videoRes.ok || !imageRes.ok) {
    throw new Error('Erreur lors du téléchargement des fichiers');
  }

  fs.mkdirSync(outputDir, { recursive: true });
  let videoFileName = `${name}.mp4`;
  let imageFileName = `${name}.png`;

  const videoTarget = path.join(outputDir, videoFileName);
  const imageTarget = path.join(outputDir, imageFileName);

  await streamPipeline(videoRes.body, fs.createWriteStream(videoTarget));
  await streamPipeline(imageRes.body, fs.createWriteStream(imageTarget));

  return {
    ready: true,
    fileName: name
  };
}

export async function uploadMedia(filename, localPath) {
  const apiKey = process.env.JOGGAI_API_KEY;
  console.log('00000000001:' + filename);
  console.log('00000000002:' + localPath);

  const uploadRes = await fetch('https://api.jogg.ai/v1/upload/asset', {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ filename }),
  });

  const uploadJson = await uploadRes.json();

  if (uploadJson.code !== 0) {
    throw new Error(`Erreur upload asset: ${uploadJson.msg}`);
  }

  const { sign_url, asset_id } = uploadJson.data;
  console.log('00000000003:' + sign_url);
  console.log('00000000004:' + asset_id);
  console.log('00000000005:' + JSON.stringify(uploadJson));
  const fileStream = fs.createReadStream(localPath);

  const putRes = await fetch(sign_url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/octet-stream',
    },
    body: fileStream,
  });

  console.log('00000000004:' + JSON.stringify(putRes.status));
  console.log('00000000004:' + JSON.stringify(putRes.ok));
  console.log('00000000004:' + JSON.stringify(putRes.statusText));

  let public_url = 1111;
  return public_url;

}