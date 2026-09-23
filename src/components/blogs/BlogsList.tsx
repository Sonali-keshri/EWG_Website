import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { blogsPage } from "@/lib/content";

function PostCopy({
  post,
}: {
  post: (typeof blogsPage.posts)[number];
}) {
  return (
    <>
      <p className="ewg-eyebrow text-orange">{post.eyebrow}</p>
      <h2 className="mt-4 font-headline text-[1.75rem] leading-[1.2] font-medium tracking-normal ewg-gradient-text lg:text-[2rem]">
        {post.title}
      </h2>
      <p className="mt-5 max-w-[32rem] text-[0.95rem] leading-[1.65] text-white">
        {post.body}
      </p>
      <Button href={post.href} className="mt-8 w-fit lg:mt-10">
        {blogsPage.ctaLabel}
      </Button>
    </>
  );
}

export function BlogsList() {
  return (
    <section
      className="min-h-screen text-white"
      style={{ backgroundImage: "var(--ewg-gradient-industries)" }}
    >
      <div className="ewg-container pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-2xl">
            <p className="ewg-eyebrow text-orange">{blogsPage.eyebrow}</p>
            <h1 className="mt-4 font-headline text-[2.4rem] leading-[1.09] font-[500] tracking-normal sm:text-[3.2rem] lg:text-[4rem] lg:leading-[4.375rem]">
              <span className="ewg-gradient-text">{blogsPage.headerLine1}</span>
              <br />
              <span>{blogsPage.headerLine2}</span>
            </h1>
          </div>
          <p className="max-w-md text-[0.95rem] leading-[1.7] text-white/80 lg:pb-2">
            {blogsPage.body}
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-12 lg:mt-20 lg:gap-8">
          {blogsPage.posts.map((post, index) => {
            const reversed = index % 2 === 1;
            return (
              <article key={`${post.title}-${index}`}>
                <div
                  className="flex flex-col overflow-hidden rounded-[32px]  md:hidden"
                  style={{ backgroundImage: "var(--ewg-gradient-card-dark)" }}
                >
                  <div className="relative aspect-square w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="92vw"
                      quality={90}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col px-7 py-8">
                    <PostCopy post={post} />
                  </div>
                </div>

                <div className="relative hidden grid-cols-1 grid-rows-1 md:grid">
                  <div
                    className="col-start-1 row-start-1 my-auto w-full rounded-[32px] "
                    style={{
                      aspectRatio: "1620 / 648",
                      backgroundImage: "var(--ewg-gradient-card-dark)",
                    }}
                  />
                  <div
                    className={cn(
                      "col-start-1 row-start-1 z-10 flex items-center",
                      reversed && "justify-end",
                    )}
                  >
                    <div className="relative aspect-square w-[43.4%] overflow-hidden rounded-[32px]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="40vw"
                        quality={90}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div
                    className={cn(
                      "col-start-1 row-start-1 z-10 flex w-[52%] flex-col justify-center pt-6 pb-10",
                      reversed ? "mr-auto pl-[6%] pr-[5%]" : "ml-auto pr-[6%] pl-8",
                    )}
                  >
                    <PostCopy post={post} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
