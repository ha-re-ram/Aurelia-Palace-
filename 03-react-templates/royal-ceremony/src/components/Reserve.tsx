import { FormEvent, ReactNode, useState } from "react";
import { Filigree } from "./Ornaments";

export default function Reserve() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="reserve" className="relative overflow-hidden bg-[#f7f1e6] py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#e8d5a3]/40 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 sm:px-8 lg:grid-cols-2">
        <div>
          <p className="font-display text-[10px] tracking-[0.48em] text-[#C4A35A] uppercase">
            By invitation of the house
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-[0.12em] uppercase text-[#1c1812] sm:text-5xl">
            Your chamber
            <span className="block font-script tracking-normal normal-case text-[#8e6f2e] mt-2 text-4xl sm:text-5xl">
              awaits
            </span>
          </h2>
          <Filigree className="mt-6 w-44" />
          <p className="mt-6 max-w-md font-body text-xl leading-relaxed text-[#4a4236]">
            Aurelia Palace receives a handful of guests at a time. Share your dates. The house will
            answer.
          </p>
          <div className="mt-10 space-y-3 font-body text-lg text-[#1c1812]">
            <p>Concierge · +33 1 84 00 18 12</p>
            <p>stay@aureliapalace.com</p>
            <p>The Crown Estate · Loire Valley</p>
          </div>
        </div>

        <div className="gold-border bg-[#fffcf7] p-8 sm:p-10">
          {sent ? (
            <div className="flex min-h-[360px] flex-col items-center justify-center text-center fade-up">
              <p className="font-script text-4xl text-[#8e6f2e]">The house has heard you</p>
              <p className="mt-4 max-w-sm font-body text-xl text-[#4a4236]">
                A letter of confirmation will arrive by evening. Until then, imagine the gates.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <Field label="Full name">
                <input required name="name" className="field" placeholder="Your name" />
              </Field>
              <Field label="Correspondence">
                <input required type="email" name="email" className="field" placeholder="you@atelier.com" />
              </Field>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Arrival">
                  <input required type="date" name="arrive" className="field" />
                </Field>
                <Field label="Departure">
                  <input required type="date" name="depart" className="field" />
                </Field>
              </div>
              <Field label="Chamber">
                <select name="suite" className="field">
                  <option>The Aurelia Suite</option>
                  <option>The Celestine Chamber</option>
                  <option>The Sovereign Quarters</option>
                  <option>Let the house decide</option>
                </select>
              </Field>
              <Field label="A note to the palace">
                <textarea name="note" rows={3} className="field resize-none" placeholder="Occasions, quiet requests…" />
              </Field>
              <button type="submit" className="btn-gold w-full rounded-full py-4 font-display text-[11px]">
                Request the stay
              </button>
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
          padding: 0.55rem 0;
          font-size: 1.125rem;
          color: #1c1812;
        }
        .field::placeholder { color: #8a8070; }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="font-display text-[10px] tracking-[0.28em] uppercase text-[#C4A35A]">
        {label}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
