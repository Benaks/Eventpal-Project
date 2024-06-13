/* eslint-disable react/no-unescaped-entities */
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { IoImageOutline } from "react-icons/io5";

// using drag and drop api

const DragDrop = () => {
  const [files, setFiles] = useState([]);
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    console.log(acceptedFiles);
    const mapAccepted = acceptedFiles.map((file) => ({ file, errors: [] }));
    const mapRejected = rejectedFiles.map((file) => ({
      file,
      errors: file.errors,
    }));
    setFiles((currentFiles) => [
      ...currentFiles,
      ...mapAccepted,
      ...mapRejected,
    ]);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });
 
  return (
    <div className="">
      <div
        {...getRootProps()}
        className="border-[0.2em] p-20 border-red-500 rounded-md cursor-pointer border-dashed flex justify-center items-center flex-col-reverse"
      >
        <input {...getInputProps()} />
        <p className="cursor-pointer text-[1.2em] font-[600] text-gray-400 text-center">
          Click or drag image
        </p>
        <IoImageOutline className="w-10 h-10" />
      </div>

      <div className="mt-4 ">
        {files.length > 0 && (
          <div className="mt-4  w-full">
            <h3 className="text-lg font-semibold">Selected Files:</h3>
            <ul className="flex justify-around items-center">
              {files.map((fileWrapper, index) => (
                <li key={index} className="mt-4 flex flex-col items-center">
                  <img
                    src={URL.createObjectURL(fileWrapper.file)}
                    alt={fileWrapper.file.name}
                    className="w-32 h-32 object-cover mb-2"
                  />
                  <span>{fileWrapper.file.name}</span>
                  {fileWrapper.errors.length > 0 && (
                    <span className="text-red-500 mt-1">
                      (Error: {fileWrapper.errors.join(", ")})
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DragDrop;
