import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function NotFound() {
  const errorMsgs = [
    "Uh-oh! You're as lost as a sock in the laundry. This page is MIA. 🧦🚫",
    "Ruh-roh! Even Scooby-Doo can't sniff out this page. 🐾🔍",
    "Awkward! This page is in another castle, like Mario's princess. 🏰🚶‍♂️",
    "The page you want? Aliens took it for a joyride. 👽🚀",
    "Whoopsie! Our server's hamster is on a coffee break. ☕️🐹💤",
    "Oh snap! The page you're looking for is on a coffee run. ☕️🏃‍♂️",
    "Oops, we broke the internet. Our bad. 💔🌐",
    "Ninja alert! This page has gone full stealth mode. 🥷🔍",
    "Abracadabra! The page you seek has disappeared. Poof! ✨🕳️",
    "Sorry, this page is out of service. Call back later. 🛠️🚧",
    "Houston, we have a problem. This page is missing in space. 🚀🔧",
    "Peekaboo! This page is playing hide and seek. 🫣👀",
    "Lost in the shuffle! This page took a wrong turn. 🔄🔍",
    "Unavailable! Leave a message after the beep. 📞📟",
    "Oops! This page was eaten by a grue. Spooky! 😱👾"
];

useEffect(() => {
  document.title = "404 Not Found";
} , []);

  return (
    <main className="w-full max-w-7xl mx-auto flex min-h-svh justify-center items-center flex-col gap-4 pb-24">
      <h1 className="text-5xl font-acme text-orange-600">404</h1>
      <p className="text-center text-lg font-medium px-14 text-orange-600">{errorMsgs[Math.floor(Math.random()*15)]}</p>
      <Link to={"/"}>
      <Button className="rounded-full bg-slate-900"><FaArrowLeft className="size-4 mr-2"/>Go Home</Button>
      </Link>
    </main>
  );
}