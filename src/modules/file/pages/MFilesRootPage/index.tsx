import { useState } from 'react';

import { filesApi } from '@/apis/files.api';
import { noti } from '@/funcs/noti';

const MFilesRootPage = () => {
  //#region Data
  const [src, setSrc] = useState<string>('');
  //#endregion

  //#region Event
  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      try {
        const res = await filesApi.upload(file);

        if (res?.data?.data?.path) {
          setSrc(res.data.data.path);
        }
      } catch (error: any) {
        noti.error(error?.message);
      }
    }
  };
  //#endregion

  //#region Render
  return (
    <div>
      <label htmlFor="upload-file">Upload File</label>
      <input
        type="file"
        onChange={onChange}
        name="upload-file"
        id="upload-file"
      />

      <div style={{ marginTop: '20px' }}>
        <img src={src} alt="test" />
      </div>
    </div>
  );
  //#endregion
};

export default MFilesRootPage;
