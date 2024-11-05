
interface Config {
  appName: string;
  port: number;
}

const config: { [key: string]: Config } = {
  development: {
    appName: 'backend-node-typescript-dev',
    port: 9000,
  },
  production: {
    appName: 'backend-node-typescript-prod',
    port: 3000,
  },
  test: {
    appName: 'backend-node-typescript-test',
    port: 7000,
  },
};

const environment = process.env.NODE_ENV || 'development';
export default config[environment];
