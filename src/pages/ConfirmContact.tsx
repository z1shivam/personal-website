import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const proverbs = [
  "The best time to plant a tree was 20 years ago. The second-best time is now.",
  "Some battles aren't worth fighting, some battles aren't worth winning, some battles you can't afford to lose. Prioritise your battles so you can win the war.",
  "The good thing about having a bad memory is that a joke can be funny more than once.",
  "The only way to do great work is to love what you do. – Steve Jobs",
  "You earn your trophy at your practice. You just pick it on championship.",
  "What we think, we become. – Buddha",
];

export default function ConfirmContactPage() {
  const [randomProverb, setRandomProverb] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Thank You 😊 - Shivam";
    const randomIndex = Math.floor(Math.random() * proverbs.length);
    setRandomProverb(proverbs[randomIndex]);
  }, []);

  return (
    <section className="mx-auto flex min-h-[800px] w-full max-w-lg flex-col items-center justify-start gap-6 py-16">
      <h2 className="font-acme text-4xl text-orange-600">Thank You 😊</h2>
      <h2 className="text-center font-acme text-3xl text-slate-900">
        Your form is submitted and I will contact you back, soon.
      </h2>
      <p className="w-full text-center">{`----`}</p>
      <p className="px-4 py-12 text-center text-lg text-slate-600">"{randomProverb}"</p>
      <Button onClick={() => navigate("/")}>Go Back Home</Button>
    </section>
  );
}
