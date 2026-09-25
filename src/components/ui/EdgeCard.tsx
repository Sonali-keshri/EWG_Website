import Image from "next/image";
import { cn } from "@/lib/cn";

type EdgeCardProps = {
  title: string;
  body: string;
  iconSrc?: string;
  iconAlt?: string;
  icon?: React.ReactNode;
  className?: string;
};

export function EdgeCard({ title, body, iconSrc, iconAlt = "", icon, className }: EdgeCardProps) {
  return (
    <article
      className={cn(
        "ewg-edge-card flex h-full min-h-[14rem] flex-col gap-3 rounded-[1.875rem] p-4 lg:min-h-0 lg:aspect-square lg:justify-between lg:gap-0 lg:p-8",
        className,
      )}
    >
      {icon ??
        (iconSrc ? (
          <Image
            src={iconSrc}
            alt={iconAlt}
            width={80}
            height={80}
            className="h-12 w-12 object-contain lg:h-[4.5rem] lg:w-[4.5rem]"
          />
        ) : null)}
      <div className="lg:mt-auto">
        <h3 className="ewg-heading-card text-orange lg:min-h-[2.7rem]">{title}</h3>
        <p className="mt-1 font-sans text-[0.8rem] leading-5 text-navy/80 lg:mt-2 lg:min-h-[4.5rem] lg:text-[0.9rem]">
          {body}
        </p>
      </div>
    </article>
  );
}
