import { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { IoImageOutline } from "react-icons/io5";

const DragDrop = ({ handleChange }) => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles, rejectedFiles) => {
      const mapAccepted = acceptedFiles.map((file) => ({
        file,
        errors: [],
      }));

      const mapRejected = rejectedFiles.map((file) => ({
        file,
        errors: file.errors.map((err) => err.message), // Map error messages
      }));

      // Update files for preview (both accepted and rejected)
      setFiles([...mapAccepted, ...mapRejected]);

      // Trigger handleChange with the first accepted file to pass to the parent
      if (acceptedFiles.length > 0) {
        handleChange(acceptedFiles[0]); // Pass the first accepted file to parent component
      }
    },
    [handleChange]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/gif": [".gif"]
    },
    maxSize: 5242880, // 5MB file size limit
  });

  // Clean up object URLs to avoid memory leaks
  useEffect(() => {
    return () => {
      files.forEach((fileWrapper) =>
        URL.revokeObjectURL(fileWrapper.file.preview)
      );
    };
  }, [files]);

  return (
    <div>
      <div
        {...getRootProps()}
        className="flex justify-center items-center flex-col-reverse border-[0.2em] p-5 md:p-6 lg:p-8 border-red-500 rounded-md cursor-pointer border-dashed"
      >
        <input
          {...getInputProps()}
          type="file"
          accept="image/jpeg, image/png, image/gif"
        />
        {/* Updated accept */}
        <p className="cursor-pointer text-xs font-[600] text-gray-400 text-center">
          Click or drag image
        </p>
        <IoImageOutline className="w-10 h-10" />
      </div>

      <div className="mt-4">
        {files.length > 0 && (
          <div className="my-2 w-full overflow-auto">
            <ul className="flex space-x-4">
              {files.map((fileWrapper, index) => (
                <li key={index} className="flex-shrink-0">
                  <div className="flex flex-col items-center">
                    <img
                      src={URL.createObjectURL(fileWrapper.file)}
                      alt={fileWrapper.file.name}
                      className="w-32 h-32 object-cover mb-2 rounded-lg"
                    />
                    {fileWrapper.errors.length > 0 && (
                      <span className="text-red-500 mt-1">
                        (Error: {fileWrapper.errors.join(", ")})
                      </span>
                    )}
                  </div>
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
