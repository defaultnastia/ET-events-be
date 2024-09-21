import { initDBConnection } from "./initDBConnection.js";
import startServer from "./server.js";
import dotenv from "dotenv";

dotenv.config();

const bootstrap = async () => {
  await initDBConnection(process.env.DB_HOST);
  startServer();
};

bootstrap();
