import { ShardingStream, UnixFS } from "@web3-storage/upload-client";
import { CARFile } from "@web3-storage/upload-client/types";
import { filesFromPaths } from "files-from-path";

export const test = async () => {
  const files = await filesFromPaths([process.cwd()]);

  console.log(
    UnixFS.createDirectoryEncoderStream(files)
      .pipeThrough(new ShardingStream())
      .pipeTo(
        new WritableStream({
          write: async (file: CARFile) => {
            console.log("roots", file.roots[0], "size", file.size);
          },
        }),
      ),
  );
};
