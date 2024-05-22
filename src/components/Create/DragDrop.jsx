/* eslint-disable react/no-unescaped-entities */
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { IoImageOutline } from "react-icons/io5";

// using drag and drop api

const DragDrop = () => {
  const [files, setFiles] = useState([]);
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    console.log(acceptedFiles);
    const mapAccepted = acceptedFiles.map((file) => ({ file, errors }));
    setFiles((currentFiles) => [
      ...currentFiles,
      ...mapAccepted,
      ...rejectedFiles,
    ]);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });
  return (
    <div
      {...getRootProps()}
      className="border-[0.2em] p-20 border-red-500 rounded-md cursor-pointer  border-dashed flex justify-center items-center flex-col-reverse"
    >
      <input {...getInputProps()} />
      <p className="cursor-pointer text-[1.2em] font-[600] text-gray-400 text-center">
        Click or drag image
      </p>

      <IoImageOutline className=" w-10 h-10" />
    </div>
  );
};

export default DragDrop;
