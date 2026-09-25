"use client";

import type { FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { contactPage } from "@/lib/content";

export function ContactPage() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section
      className="min-h-screen text-white"
      style={{ backgroundImage: "var(--ewg-gradient-navy-wash)" }}
    >
      <div className="ewg-container pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-[42rem]">
            <p className="ewg-eyebrow text-orange">{contactPage.eyebrow}</p>
            <h1 className="mt-4 font-headline text-[2.4rem] leading-[1.09] font-medium tracking-normal sm:text-[3.2rem] lg:text-[3.5rem] lg:leading-[1.12] lg:block hidden">
              <span className="ewg-heading-light">
                {contactPage.headerLine1Start}
                <br className="lg:hidden" />
                <span className="hidden lg:inline"> </span>
                {contactPage.headerLine1Join}
              </span>
              <br />
              <span>{contactPage.headerLine2}</span>
            </h1>
          </div>
          <p className="max-w-[28rem] text-[0.95rem] leading-[1.7] text-white/80 lg:pb-2">
            {contactPage.body}
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-8 lg:mt-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
          <form className="flex min-h-0 flex-col" onSubmit={onSubmit}>
            <div className="flex flex-col gap-3">
              {contactPage.fields.map((field) => (
                <label key={field.name} htmlFor={field.name}>
                  <span className="sr-only">{field.label}</span>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    autoComplete={field.autoComplete}
                    placeholder={field.label}
                    className="ewg-field "
                  />
                </label>
              ))}
              <label htmlFor={contactPage.message.name}>
                <span className="sr-only">{contactPage.message.label}</span>
                <textarea
                  id={contactPage.message.name}
                  name={contactPage.message.name}
                  rows={3}
                  placeholder={contactPage.message.label}
                  className="ewg-field min-h-[5.5rem] resize-none rounded-[1.75rem] py-4"
                />
              </label>
            </div>
            <div className="mt-8 flex justify-end lg:mt-10">
              <Button type="submit">{contactPage.submit}</Button>
            </div>
          </form>

          <div className="h-full min-h-[18rem] overflow-hidden rounded-[2rem]">
            <iframe
              title={contactPage.mapTitle}
              src={contactPage.mapSrc}
              className="h-full min-h-[18rem] w-full border-0 lg:min-h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
