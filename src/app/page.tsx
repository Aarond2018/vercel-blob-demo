import FileUploader from "@/components/FileUploader";

export default async function Home() {
  async function handleSubmit(formData: FormData) {
    "use server";

    const image = formData.get("file") as File;
    
    console.log(image)
  }

  return (
    <main className="w-full max-w-[40rem] mx-auto my-12 border p-4 ">
      <h1 className="text-center text-2xl my-4 font-medium">
        Vercel Blob Demo
      </h1>
      <form action={handleSubmit} className="w-full max-w-[10rem] mx-auto">
        <FileUploader />
      </form>
    </main>
  );
} 
