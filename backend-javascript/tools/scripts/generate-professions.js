import pool from '../../src/core/database/clients/postgres/native.client.js';

const total = Number(process.argv[2]);

if (!total || total <= 0 || total > 1_000_000_000) {
  console.error('Usage: node tools/scripts/insert-professions.js <number>');
  process.exit(1);
}

const startTime = new Date();
console.log(`Start: ${startTime.toISOString()}`);

const run = async () => {
  try {
    console.log('Truncating table "profession"...');
    await pool.query('TRUNCATE TABLE profession RESTART IDENTITY CASCADE');

    for (let index = 1; index <= total; index++) {
      const name = `profession${String(index).padStart(10, '0')}`;
      const query = 'INSERT INTO profession (name) VALUES ($1)';
      await pool.query(query, [name]);

      const now = new Date().toISOString();
      console.log(`Inserted ${index}: ${name} at ${now}`);
    }
  } catch (err) {
    console.error('❌ Error:', err);
  } finally {
    const endTime = new Date();
    const durationSeconds = (endTime - startTime) / 1000;
    const durationMinutes = (durationSeconds / 60).toFixed(3);

    await pool.end();
    console.log('---');
    console.log(`Start: ${startTime.toISOString()}`);
    console.log(`End:   ${endTime.toISOString()}`);
    console.log(`Total time: ${durationSeconds} seconds`);
    console.log(`Total time: ${durationMinutes} minutes`);
  }
};

run();
