import ContactForm from "@/components/Home/ContactForm";
import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact - Shivam"
  }, []);
  return (
    <main>
      <h1 className="max-w-7xl mx-auto text-4xl font-acme py-4 px-4">Contact</h1>
      <section className="mx-auto max-w-7xl p-4">
        <p>feel free to email me at <span className="text-orange-600">shivamk.contact@gmail.com</span></p>
        <p className="text-slate-700 py-4">or</p>
        <p>fill out this contact form:</p>
        <div className="max-w-lg py-4">

        <ContactForm
        inputClass="bg-slate-50 border-2 border-slate-200 rounded-md p-2 w-full"
        linkClass="hidden"
        buttonClass="bg-orange-600 text-white"
        />
        </div>
      </section>
    </main>
  );
}
