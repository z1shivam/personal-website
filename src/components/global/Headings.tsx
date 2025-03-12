import { cn } from "@/utils/cn";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  emoji?: string;
  className?: string;
}

export const Heading1 = ({ children, className, emoji, ...props }: HeadingProps) => {
  return (
    <h1 className={cn("font-acme text-4xl flex items-end text-slate-900", className)} {...props}>
      <span className="mr-2">{emoji}</span>
      {children}
    </h1>
  );
};

export const Heading2 = ({ children, className, emoji, ...props }: HeadingProps) => {
  return (
    <h2 className={cn("font-acme text-3xl flex items-end text-slate-900", className)} {...props}>
      <span className="mr-2">{emoji}</span>
      {children}
    </h2>
  );
};