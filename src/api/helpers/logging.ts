import { createWriteStream, WriteStream, existsSync, writeFileSync } from "fs";
import { join as joinPath } from "path";

const createLogFilePath: (fileName: string) => string = (fileName: string) =>
  joinPath(__dirname, "..", "logs", `${fileName}.log`);

export const createLogFileWriteStream: (fileName: string) => WriteStream = (
  fileName: string
) => {
  const logFilePath = createLogFilePath(fileName);

  !existsSync(logFilePath) &&
    writeFileSync(logFilePath, "", { encoding: "utf8" });

  return createWriteStream(logFilePath);
};
