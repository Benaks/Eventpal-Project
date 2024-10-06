import { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { IoImageOutline } from "react-icons/io5";

const DragDrop = ({ handleChange }) => {
  const [file, setFile] = useState(null);

  const onDrop = useCallback(
    (acceptedFiles, rejectedFiles) => {
      // If there's an accepted file, update the state
      if (acceptedFiles.length > 0) {
        const selectedFile = acceptedFiles[0]; // Get the first accepted file
        setFile(selectedFile);
        handleChange(selectedFile); // Pass the accepted file to the parent component
      }

      // Optionally, handle rejected files if needed
      const mapRejected = rejectedFiles.map((file) => ({
        file,
        errors: file.errors.map((err) => err.message), // Map error messages
      }));

      // Log rejected files for debugging purposes
      if (mapRejected.length > 0) {
        console.log("Rejected files:", mapRejected);
      }
    },
    [handleChange]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/gif": [".gif"],
    },
    maxSize: 5242880, // 5MB file size limit
  });

  // Clean up object URL to avoid memory leaks
  useEffect(() => {
    if (file) {
      return () => {
        URL.revokeObjectURL(file.preview);
      };
    }
  }, [file]);

  return (
    <div>
      <div
        {...getRootProps()}
        className="flex justify-center items-center flex-col border-[0.2em] p-5 md:p-6 lg:p-8 border-red-500 rounded-md cursor-pointer border-dashed"
      >
        <input
          {...getInputProps()}
          type="file"
          accept="image/jpeg, image/png, image/gif"
        />
        <p className="cursor-pointer text-xs font-[600] text-gray-400 text-center">
          Click or drag image
        </p>
        <IoImageOutline className="w-10 h-10" />

        {file && (
          <div className="mt-4">
            <img
              src={URL.createObjectURL(file)}
              alt={file.name}
              className="w-full h-32 object-cover rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DragDrop;
