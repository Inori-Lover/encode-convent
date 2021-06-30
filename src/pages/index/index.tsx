import { useCallback, useState } from "react";
import { Upload, Card } from "antd";
import type { UploadChangeParam, UploadFile } from "antd/lib/upload/interface";
import { InboxOutlined } from "@ant-design/icons";

import { Charsets } from "./component/charset";

import styles from "./index.scss";

const { Dragger } = Upload;

function Index() {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const changeHandle = useCallback(({ fileList }: UploadChangeParam) => {
    setFileList([...fileList]);
  }, []);

  return (
    <div className={styles.wrap}>
      <Card title="upload" style={{ width: 300 }}>
        <Dragger multiple fileList={fileList} onChange={changeHandle}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from
            uploading company data or other band files
          </p>
        </Dragger>
      </Card>
      <Card title="charset" style={{ width: 300 }}>
        <Charsets files={fileList} />
      </Card>
    </div>
  );
}

export default Index;
