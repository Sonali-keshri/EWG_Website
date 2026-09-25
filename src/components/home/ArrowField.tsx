import Image from "next/image";

export function ArrowField() {
  return (
    <div
      className="pointer-events-none relative mx-auto w-full max-w-[24rem] lg:ml-auto lg:max-w-[28rem]"
      aria-hidden="true"
    >
      <Image
        src="/EWG_Arrows.png"
        alt=""
        width={622}
        height={608}
        className="relative h-auto w-full object-contain mix-blend-screen"
      />
      <Image
        src="/images/EWG_Arrows.gif"
        alt=""
        width={622}
        height={608}
        unoptimized
        className="absolute inset-0 h-full w-full object-contain mix-blend-screen"
      />
    </div>
  );
}
