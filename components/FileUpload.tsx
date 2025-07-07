// components/FileUpload.tsx
import React, { useState } from 'react';

interface FileUploadProps {
  onFileUpload: (file: File) => void;
}

const FileUpload = ({ onFileUpload }: FileUploadProps) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      onFileUpload(selectedFile);
    } else {
      setFile(null);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {file && <p>Selected file: {file.name}</p>}
    </div>
  );
};

export default FileUpload;