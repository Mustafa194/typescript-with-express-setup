import { Server, createServer } from "http";

import app from "./api";
import config from "./config";

const server: Server = createServer(app);

function main() {
  server.listen(config.apiPort, () => {
    console.log(`Server is listening on port ${config.apiPort}`);
  });
}

main();
