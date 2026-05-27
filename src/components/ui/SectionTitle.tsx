type SectionTitleProps = {
  label: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  label,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div>
      <p className="text-zinc-400 uppercase tracking-[0.2em] text-sm mb-4">
        {label}
      </p>

      <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-zinc-400 text-lg max-w-3xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}