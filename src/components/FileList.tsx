"use client";

import { ListBlobResultBlob } from "@vercel/blob";
import Image from "next/image";

type Props = {
  blobs: ListBlobResultBlob[];
  handleDelete: (url: string) => void;
};

export default function FileList({ blobs, handleDelete }: Props) {
  return (
    <section className="grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] gap-6 my-4">
      {blobs.length === 0 ? (
        <p>No uploaded images yet!</p>
      ) : (
        blobs.map((image, index) => (
          <div key={index} className="h-[100px]">
            <Image
              src={image.url}
              alt={image.pathname}
              width={150}
              height={150}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => handleDelete(image.url)}
              className="text-xs mx-auto block text-red-600 my-1"
            >
              del
            </button>
          </div>
        ))
      )}
    </section>
  );
}
