import type { FC } from "react";
import { useRef, memo, useState, useCallback, useEffect } from "react";
import { produce } from "immer";
import chardet from "chardet";
import type { UploadFile } from "antd/lib/upload/interface";

interface CharsetProps {
  file: UploadFile;
}
const Charset: FC<CharsetProps> = memo(function Charset({ file }) {
  const [charset, setCharset] = useState<string>("unknown");

  const check = useCallback(async (file: UploadFile) => {
    try {
      const buffer = await file.originFileObj?.arrayBuffer();
      if (buffer) {
        const charset = chardet.detect(new Uint8Array(buffer));
        if (!charset) {
          throw new Error("unknown");
        }

        setCharset(charset);
      }
    } catch (e) {
      setCharset("unknown");
    }
  }, []);

  useEffect(() => {
    check(file);
  }, [check, file]);

  return <div>{charset}</div>;
});

interface CharsetsProps {
  files: UploadFile[];
}
export const Charsets: FC<CharsetsProps> = memo(function Charsets({ files }) {
  return (
    <>
      {files.map((file) => (
        <Charset key={file.uid} file={file} />
      ))}
    </>
  );
});
