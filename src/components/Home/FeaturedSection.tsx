import { homepageData } from "@/data/siteConfig";
import { Heading2 } from "../global/Headings";

export default function FeaturedSection() {
  return (
    <section className="mx-auto h-full max-w-7xl p-4">
      <Heading2 emoji="✨">Featured Section</Heading2>
      <div className="flex flex-col py-4 md:flex-row-reverse md:px-3">
        <div className="flex-1">
          <img
            src="/featuredImage.jpg"
            alt="featured image"
            className="aspect-[8/5] h-full w-full rounded-md object-cover object-bottom"
            width={800}
            height={500}
          />
        </div>
        <div className="w-full flex-1">
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 px-6 py-12 text-slate-900">
            <p className="text-center font-acme text-2xl">“{homepageData.featuredQuote}”</p>
            <p className="text-primary/90 font-inter text-base font-medium">{homepageData.featuredQuoteAuthor}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
