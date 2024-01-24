"use client";

import Image from "next/image";
import { ChangeEvent, useState } from "react";

function FileUploader() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.currentTarget.files && setFile(e.currentTarget.files[0]);
  };

  return (
    <>
      <div className="h-[5rem] w-full border relative">
        <label
          htmlFor="file"
          className="absolute w-full h-full cursor-pointer z-[2]"
        ></label>
        <input
          type="file"
          id="file"
          name="file"
          className="hidden"
          onChange={handleFileChange}
        />
        {file && (
          <Image
            src={URL.createObjectURL(file)}
            alt="subject-image"
            fill={true}
            className="absolute w-full h-full z-[1] object-cover"
          />
        )}
      </div>
      <button className="p-2 border w-full my-4 text-white font-medium bg-emerald-950 text-sm">
        Upload
      </button>
    </>
  );
}

export default FileUploader;
