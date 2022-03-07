export interface Environment {
  apiBaseUrl: string;
}

export type EnvType = 'development' | 'staging' | 'uat' | 'production';

export const env: EnvType = 'development';
const environment = require(`./environment.${env}`).default;
export default environment as Environment;
