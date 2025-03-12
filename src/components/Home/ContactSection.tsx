import { FaArrowRight } from "react-icons/fa6";
import { Heading2 } from "../global/Headings";
import { Button } from "../ui/button";
import ContactForm from "./ContactForm";
import { Link } from "react-router-dom";
import { homepageData } from "@/data/siteConfig";

export default function ContactSection() {
  return (
    <section className="w-full scroll-m-16 bg-orange-600" id="contact">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 space-y-4 px-4 py-6 md:grid-cols-2">
        <div className="w-full space-y-4">
          <Heading2 emoji="🔗" className="text-white">
            Let's Connect
          </Heading2>
          <div >
            <ContactForm
              labelClass="text-white"
              inputClass="py-2.5 disabled:text-slate-500 disabled:bg-slate-100"
              linkClass="text-white"
              buttonClass="bg-slate-900 text-white hover:bg-slate-800 disabled:bg-slate-700 disabled:text-white"
            />
          </div>
        </div>
        <div>
          <DaysShowOff />
        </div>
      </div>
    </section>
  );
}

function DaysShowOff() {
  const START_DATE = new Date("2024-07-26");
  const currentDate = new Date();
  const diffInTime = currentDate.getTime() - START_DATE.getTime();
  const diffInDays = diffInTime / (1000 * 3600 * 24);
  const days = Math.floor(diffInDays);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 py-16 text-white">
      <p className="font-acme text-2xl">I've spent</p>
      <p className="font-acme text-8xl font-bold">{days} Days</p>
      <p className="font-acme text-2xl">without using social media 🥳</p>
      <Link to={homepageData.readMyExperienceUrl}>
        <Button variant={"outline"} className="bg-transparent">
          read my experience
          <FaArrowRight className="ml-2 size-4" />
        </Button>
      </Link>
      
    </div>
  );
}
