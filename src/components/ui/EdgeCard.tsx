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
        "ewg-edge-card flex aspect-square flex-col justify-between rounded-[1.875rem] p-7 lg:p-8",
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
            className="h-[4.5rem] w-[4.5rem] object-contain"
          />
        ) : null)}
      <div>
        <h3 className="ewg-heading-card text-orange">{title}</h3>
        <p className="mt-2 font-sans text-[0.9rem] leading-6 text-navy/80">{body}</p>
      </div>
    </article>
  );
}
