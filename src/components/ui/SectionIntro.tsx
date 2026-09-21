import { cn } from "@/lib/cn";

type SectionIntroProps = {
  eyebrow: string;
  header: string;
  children?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionIntro({
  eyebrow,
  header,
  children,
  align = "left",
  className,
}: SectionIntroProps) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", className)}>
      <p className="ewg-eyebrow">{eyebrow}</p>
      <h2 className="mt-4 max-w-3xl font-headline text-3xl font-semibold leading-[1.15] tracking-tight text-inherit md:text-[2.75rem]">
        {header}
      </h2>
      {children ? (
        <div className="mt-5 max-w-2xl text-base leading-8 opacity-70 md:text-lg">
          {children}
        </div>
      ) : null}
    </div>
  );
}
