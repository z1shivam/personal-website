import { IoWarning } from "react-icons/io5";

export default function ErrorComponent({ message }: { message: string }) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 py-24 text-center text-lg font-semibold">
      <IoWarning className="size-6 text-red-500" />
      <p className="text-red-500">{`An error occured - ${message}`}</p>
    </div>
  );
}
