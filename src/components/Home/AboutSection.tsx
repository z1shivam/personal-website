import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function AboutSection() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-3 py-16">
      <div className="w-32">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/z1shivam.appspot.com/o/images%2Fshivamprofile.webp?alt=media&token=2dfe9d5e-3141-4e57-8ca4-a064e693603b"
          loading="lazy"
          alt="Profile Photo"
          className="rounded-full object-cover"
        />
      </div>
      <div className="text-center font-inter text-2xl font-medium">Shivam Kumar</div>
      <div className="max-w-md px-4 text-center text-base">
        I am a Full-Stack Engineer specializing in data-intensive applications, with TypeScript as my primary
        programming tool.
      </div>
      <Link to={"/portfolio"}>
        <Button variant={"default"} size={"default"} className="mt-4 rounded-full bg-slate-900 px-5">
          Know More
        </Button>
      </Link>
    </section>
  );
}
