import Image from "next/image";

export function ArrowField() {
  return (
    <div className="pointer-events-none relative mx-auto w-full max-w-[22rem] lg:ml-auto lg:max-w-[24rem]" aria-hidden="true">
      {/* `unoptimized` is required: the image optimizer flattens animated GIFs
          to a single still frame. `preload` replaces the deprecated `priority`. */}
      <Image
        src="/images/EWG_Arrows.gif"
        alt=""
        width={622}
        height={608}
        unoptimized
        preload
        className="h-auto w-full object-contain mix-blend-screen"
      />
    </div>
  );
}
