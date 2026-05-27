type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  target?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  target,
}: ButtonProps) {
  const baseClasses =
    "inline-block px-6 py-3 rounded-2xl font-semibold transition duration-300";

  const variantClasses =
    variant === "primary"
      ? "bg-white text-black hover:bg-zinc-200"
      : "border border-zinc-700 text-white hover:bg-zinc-900";

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`${baseClasses} ${variantClasses}`}
    >
      {children}
    </a>
  );
}