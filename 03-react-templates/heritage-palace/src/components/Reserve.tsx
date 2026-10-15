import { FormEvent, ReactNode, useState } from "react";
import { Filigree } from "./Ornaments";
import { ROOMS, SITE } from "../data/site";

export default function Reserve() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="reserve" className="relative overflow-hidden bg-[#f7f1e6] py-16 sm:py-28">
      <div className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-[#e8d5a3]/40 blur-3xl sm:h-72 sm:w-72" />
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="font-display text-[10px] tracking-[0.42em] text-[#C4A35A] uppercase sm:tracking-[0.48em]">
            Rooms · Stays · Celebrations
          </p>
          <h2 className="mt-4 font-display text-3xl tracking-[0.1em] uppercase text-[#1c1812] sm:text-5xl">
            Hold your dates
            <span className="mt-1 block font-script tracking-normal normal-case text-[#8e6f2e] text-4xl sm:text-5xl">
              with the house
            </span>
          </h2>
          <Filigree className="mt-5 w-40 sm:mt-6 sm:w-44" />
          <p className="mt-5 max-w-md font-body text-lg leading-relaxed text-[#4a4236] sm:text-xl">
            Tell us the dates and the reason. The reservations desk answers on the same day — or
            ring the palace directly if it is easier.
          </p>

          <div className="mt-8 space-y-4 border-t border-[#e8d5a3] pt-6">
            {SITE.phones.map((p, i) => (
              <a
                key={p}
                href={`tel:${SITE.phoneRaw[i]}`}
                className="flex items-center justify-between gap-4 border-b border-[#f0e6d2] pb-3 font-body text-lg text-[#1c1812] transition-colors hover:text-[#8e6f2e] sm:text-xl"
              >
                <span>{p}</span>
                <span className="font-display text-[9px] tracking-[0.24em] uppercase text-[#C4A35A]">
                  {i === 0 ? "Reservations" : i === 1 ? "Events" : "Front desk"}
                </span>
              </a>
            ))}
            <a
              href={`mailto:${SITE.email}`}
              className="block font-body text-lg text-[#1c1812] transition-colors hover:text-[#8e6f2e] sm:text-xl"
            >
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="gold-border bg-[#fffcf7] p-5 sm:p-9">
          {sent ? (
            <div className="fade-up flex min-h-[340px] flex-col items-center justify-center text-center">
              <p className="font-script text-3xl text-[#8e6f2e] sm:text-4xl">The desk has your note</p>
              <p className="mt-4 max-w-sm font-body text-lg text-[#4a4236] sm:text-xl">
                A reservations executive will confirm by phone or email today. For anything urgent,
                ring {SITE.phones[0]}.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href={`tel:${SITE.phoneRaw[0]}`} className="btn-gold rounded-full px-7 py-3 font-display text-[10px]">
                  Call now
                </a>
                <button onClick={() => setSent(false)} className="btn-ghost rounded-full px-7 py-3 font-display text-[10px]">
                  Send another
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name">
                  <input required name="name" className="field" placeholder="Your name" />
                </Field>
                <Field label="Mobile">
                  <input
                    required
                    type="tel"
                    name="phone"
                    inputMode="tel"
                    pattern="[0-9+ ]{8,15}"
                    className="field"
                    placeholder="+91 ..."
                  />
                </Field>
              </div>
              <Field label="Email">
                <input required type="email" name="email" className="field" placeholder="you@example.com" />
              </Field>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Arrival">
                  <input required type="date" name="arrive" className="field" />
                </Field>
                <Field label="Departure">
                  <input required type="date" name="depart" className="field" />
                </Field>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="What for">
                  <select name="intent" className="field">
                    <option>Room booking</option>
                    <option>Wedding / reception</option>
                    <option>Banquet or conference</option>
                    <option>Day outing with pool</option>
                  </select>
                </Field>
                <Field label="Guests">
                  <input type="number" min={1} max={800} defaultValue={2} name="guests" className="field" />
                </Field>
              </div>
              <Field label="Room preference">
                <select name="suite" className="field">
                  <option>Let the house decide</option>
                  {ROOMS.map((r) => (
                    <option key={r.name}>{r.name}</option>
                  ))}
                </select>
              </Field>
              <Field label="A note to the house">
                <textarea name="note" rows={3} className="field resize-none" placeholder="Occasions, veg/non-veg, early check-in…" />
              </Field>
              <button type="submit" className="btn-gold w-full rounded-full py-4 font-display text-[11px]">
                Send to reservations
              </button>
              <p className="text-center font-body text-sm text-[#8a8070]">
                Check-in from 12:00 PM · Photo ID required at the desk
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .field {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid rgba(196,163,90,0.45);
          padding: 0.6rem 0;
          font-size: 1.0625rem;
          color: #1c1812;
        }
        .field::placeholder { color: #9a9080; }
        @media (min-width: 640px) { .field { font-size: 1.125rem; } }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="font-display text-[10px] tracking-[0.24em] uppercase text-[#C4A35A]">
        {label}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
