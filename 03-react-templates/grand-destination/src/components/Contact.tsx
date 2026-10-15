import { motion } from "framer-motion";
import { useState } from "react";
import { Reveal, SectionHeading } from "./ui";
import { Crest } from "./Intro";
import { PhoneIcon, MailIcon } from "./Navbar";
import { SITE } from "../data/site";

const inputBase =
  "peer w-full border-b border-gold-200 bg-transparent pb-2.5 pt-6 font-sans text-sm text-ink outline-none transition-colors duration-500 focus:border-gold-500";

function Field({
  label,
  type = "text",
  as = "input",
  options,
  required,
}: {
  label: string;
  type?: string;
  as?: "input" | "textarea" | "select";
  options?: string[];
  required?: boolean;
}) {
  return (
    <label className="group relative block">
      {as === "textarea" && <textarea rows={3} placeholder=" " className={`${inputBase} resize-none`} />}
      {as === "select" && (
        <select defaultValue="" className={`${inputBase} appearance-none`} required={required}>
          <option value="" disabled hidden />
          {options?.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      )}
      {as === "input" && <input type={type} placeholder=" " required={required} className={inputBase} />}
      <span
        className={`pointer-events-none absolute left-0 font-sans uppercase tracking-[0.25em] transition-all duration-300 ${
          as === "select"
            ? "top-0 text-[9px] text-gold-600"
            : "top-6 text-[11px] text-ink/40 peer-focus:top-0 peer-focus:text-[9px] peer-focus:text-gold-600 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[9px]"
        }`}
      >
        {label}
      </span>
      <span className="absolute bottom-0 left-0 h-px w-0 bg-gold-500 transition-all duration-700 group-focus-within:w-full" />
    </label>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden bg-ivory py-20 sm:py-28 md:py-36">
      <div className="pointer-events-none absolute -left-40 bottom-0 hidden h-[28rem] w-[28rem] rounded-full border border-gold-200/70 lg:block" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div>
          <SectionHeading
            eyebrow="Reservations & Enquiries"
            title="We would love to host you"
            subtitle="Call us, write to us, or send the form across — our team replies to every enquiry personally."
            align="left"
          />

          <div className="mt-10 space-y-7">
            <Reveal>
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-300 text-gold-600">
                  <PhoneIcon className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-sans text-[9px] uppercase tracking-[0.35em] text-gold-600">Reservations</p>
                  <div className="mt-1.5 flex flex-col gap-1">
                    {SITE.phones.map((p, i) => (
                      <a
                        key={p}
                        href={`tel:${SITE.phoneRaw[i]}`}
                        className="font-serif text-lg text-ink transition-colors hover:text-gold-600 sm:text-xl"
                      >
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-300 text-gold-600">
                  <MailIcon className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-sans text-[9px] uppercase tracking-[0.35em] text-gold-600">Email</p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="mt-1.5 block break-all font-serif text-lg text-ink transition-colors hover:text-gold-600 sm:text-xl"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-300 text-gold-600">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <div>
                  <p className="font-sans text-[9px] uppercase tracking-[0.35em] text-gold-600">Address</p>
                  <p className="mt-1.5 font-serif text-lg leading-relaxed text-ink sm:text-xl">
                    {SITE.addressLine1}
                    <br />
                    {SITE.addressLine2}
                    <br />
                    {SITE.pin}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${SITE.mapsQuery}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group mt-3 inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.3em] text-gold-700"
                  >
                    Get Directions
                    <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <div className="mt-10 overflow-hidden border border-gold-200">
              <iframe
                title="Aurelia Palace location map"
                src={`https://maps.google.com/maps?q=${SITE.mapsQuery}&output=embed`}
                loading="lazy"
                className="h-56 w-full grayscale-[25%] sm:h-64"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>

        <Reveal direction="left" delay={0.15}>
          <div className="relative border border-gold-200/70 bg-white p-6 sm:p-9 md:p-11">
            <div className="absolute -top-px left-8 right-8 h-px bg-gold-500" />
            <Crest className="absolute -top-6 right-6 h-12 w-12 bg-white text-gold-500 sm:right-8" />

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[24rem] flex-col items-center justify-center text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.15 }}
                  className="flex h-20 w-20 items-center justify-center rounded-full border border-gold-400"
                >
                  <svg viewBox="0 0 24 24" className="h-8 w-8 text-gold-600" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <p className="mt-7 font-serif text-2xl font-light text-ink sm:text-3xl">Thank you — we have it</p>
                <p className="mt-3 font-serif italic text-ink/60">
                  Our reservations team will call you shortly. For anything urgent, dial {SITE.phones[0]}.
                </p>
                <a
                  href={`tel:${SITE.phoneRaw[0]}`}
                  className="mt-7 border border-gold-500 px-7 py-3 font-sans text-[10px] uppercase tracking-[0.3em] text-gold-700 transition-colors hover:bg-gold-500 hover:text-white"
                >
                  Call Now
                </a>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-5"
              >
                <p className="font-serif text-2xl font-light text-ink">Send an Enquiry</p>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" required />
                  <Field label="Mobile Number" type="tel" required />
                  <Field label="Email" type="email" />
                  <Field
                    label="Enquiry Type"
                    as="select"
                    options={["Room Booking", "Wedding / Reception", "Banquet / Conference", "Birthday / Party", "Other"]}
                  />
                  <Field label="Check-in / Event Date" type="date" />
                  <Field label="No. of Guests" type="number" />
                </div>
                <Field label="Tell us what you need" as="textarea" />
                <button
                  type="submit"
                  className="group relative mt-2 w-full overflow-hidden bg-ink py-4 font-sans text-[10px] uppercase tracking-[0.35em] text-white sm:text-[11px] sm:tracking-[0.4em]"
                >
                  <span className="absolute inset-0 origin-left scale-x-0 bg-gold-500 transition-transform duration-500 group-hover:scale-x-100" />
                  <span className="relative">Send Enquiry</span>
                </button>
                <p className="text-center font-sans text-[10px] leading-relaxed tracking-[0.1em] text-ink/35">
                  Or call us directly on{" "}
                  <a href={`tel:${SITE.phoneRaw[0]}`} className="text-gold-700 underline underline-offset-2">
                    {SITE.phones[0]}
                  </a>
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
