import { FaSpinner } from "react-icons/fa6";

export default function LoadingComponent({ message }: { message?: string }) {
  return (
    <div className="w-full py-24 text-center text-lg font-semibold">
      <p className="flex flex-col items-center justify-center gap-3">
        <FaSpinner className="size-6 animate-spin duration-1000" />
        {message ? message : "Loading..."}
      </p>
    </div>
  );
}