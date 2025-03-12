import { homepageData } from "@/data/siteConfig";

export default function HeroSection() {
  return (
    <section className="w-full h-[450px] bg-hero bg-cover bg-center">
      <div className="h-full w-full flex flex-col justify-center items-center text-white gap-4">
        <p className="text-4xl">{homepageData.heroEmoji}</p>
        <h1 className="text-5xl font-acme">{homepageData.heroTitle}</h1>
        <p className="text-2xl font-acme text-slate-300">{homepageData.heroSubtitle}</p>
      </div>
    </section>
  );
}