import dotenv from "dotenv";

dotenv.config();

export interface Config {
  apiPort: number;
  apiEnv: string;
  apiSecret: string;
}

const config: Config = {
  apiPort: Number(process.env.API_PORT),
  apiEnv: String(process.env.API_ENV),
  apiSecret: String(process.env.API_SECRET),
};

export default config;
