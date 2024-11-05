
interface Config {
  appName: string;
  port: number;
  host: string;
}

const config: { [key: string]: Config } = {
  development: {
    appName: 'backend-node-typescript-dev',
    port: 9000,
    host: 'localhost',
  },
  production: {
    appName: 'backend-node-typescript-prod',
    port: 3000,
    host: 'localhost',
  },
  test: {
    appName: 'backend-node-typescript-test',
    port: 7000,
    host: 'localhost',
  },
};

const environment = process.env.NODE_ENV || 'development';
export default config[environment];
