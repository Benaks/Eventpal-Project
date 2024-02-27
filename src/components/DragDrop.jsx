/* eslint-disable react/no-unescaped-entities */
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import {ioImageOutline} from 'react-icons/io5'

const DragDrop = () => {
  const [files, setFiles] = useState([]);
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    console.log(acceptedFiles);
       const mapAccepted = acceptedFiles.map( file => ( { file, errors } ) )
       setFiles((currentFiles) => [...currentFiles, ...mapAccepted, ...rejectedFiles])
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });
  return (
    <div {...getRootProps()} className="border-[0.2em] p-20 border-red-500 rounded-md border-dashed flex justify-center items-center flex-col-reverse">
      <input {...getInputProps()} />
            <p className="cursor-pointer text-[1.2em] font-[600] text-gray-400">Click or drag image</p>
      { JSON.stringify( files ) }
      <img src={ioImageOutline} alt="files.id" />
    </div>
  );
};

export default DragDrop;
