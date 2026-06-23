type ProjectImageProps = {
  src: string;
  className?: string;
};

export function ProjectImage({ src, className = "" }: ProjectImageProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      aria-hidden
      width={40}
      height={40}
      className={`h-10 w-10 shrink-0 border border-rule bg-foreground/[0.03] object-contain p-1.5 ${className}`}
    />
  );
}
