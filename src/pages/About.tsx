import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About - Shivam";
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="min-h-96 w-full">
      <section className="mx-auto max-w-7xl">
        <h1 className="p-4 font-acme text-4xl">👾 About Me</h1>
        <div className="flex md:gap-4 flex-col md:flex-row">
          <div className="flex w-full max-w-lg justify-center md:p-4">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/z1shivam.appspot.com/o/images%2Fabout-page-image.jpeg?alt=media&token=7b77851d-f882-457c-931e-c69c30f6f53d"
              alt="photo of shivam"
              className="aspect-square w-full md:rounded-md object-cover"
            />
          </div>
          <p className="max-w-xl px-5 py-6 font-inter text-lg text-slate-700 leading-relaxed">
            Hi! My name is Shivam, and I am a university student majoring in Computer Science & Engineering. I have a
            passion for web development, traveling, and learning new technologies. With 2 years of coding experience, I
            enjoy tackling challenging problems and building innovative projects based on internet technologies.
          </p>
        </div>
      </section>
    </main>
  );
}
