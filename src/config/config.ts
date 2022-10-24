import dotenv from "dotenv";

dotenv.config();

//accessing data in the .env file
const ATLAS_URI = process.env.ATLAS_URI!;
const PORT = process.env.PORT;
const BASE_URL = process.env.BASE_URL;

export const config = {
  mongo: {
    url: ATLAS_URI,
  },
  server: {
    port: PORT,
  },
  baseUrl: BASE_URL,
};
