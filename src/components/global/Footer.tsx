import { GiIndiaGate } from "react-icons/gi";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-white font-inter px-4 py-8 text-base">
      <div className="w-full text-center flex flex-col gap-6 justify-center items-center">
        <p><GiIndiaGate className="size-8"/></p>
        <p className="text-sm text-slate-400">designed and developed by me.</p>
        <p className="text-sm text-slate-400">© 2024</p>
      </div>
    </footer>
  )
}
