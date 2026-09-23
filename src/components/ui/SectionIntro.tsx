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
      <h2 className="ewg-heading mt-4 max-w-3xl text-inherit">
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
