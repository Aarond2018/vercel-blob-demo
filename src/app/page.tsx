import { revalidatePath } from "next/cache";
import { put, list, del, PutBlobResult, ListBlobResult } from "@vercel/blob";

import FileList from "@/components/FileList";
import FileUploader from "@/components/FileUploader";

export default async function Home() {
  const { blobs } = (await list()) as ListBlobResult;

  async function handleSubmit(formData: FormData) {
    "use server";

    const image = formData.get("file") as File;
    try {
      const blob = (await put(image.name, image, {
        access: "public",
      })) as PutBlobResult;
      revalidatePath("/");
      return blob;
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(url: string) {
    "use server";

    try {
      await del(url);
      revalidatePath("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="w-full max-w-[40rem] mx-auto my-12 border p-4 ">
      <h1 className="text-center text-2xl my-4 font-medium">
        Vercel Blob Demo
      </h1>
      <form action={handleSubmit} className="w-full max-w-[10rem] mx-auto">
        <FileUploader />
      </form>
      <FileList blobs={blobs} handleDelete={handleDelete} />
    </main>
  );
}
