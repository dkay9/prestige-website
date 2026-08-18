"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import AnimatedSection from "@/components/ui/animated-section";
import Button from "@/components/ui/button";

const PropertyMap = dynamic(() => import("@/components/ui/property-map"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full rounded-3xl bg-white/60 flex items-center justify-center">
      <span className="text-sm text-ink-muted">Loading map…</span>
    </div>
  ),
});

const OFFICE = [
  {
    id: "office-lagos",
    title: "Lagos Office",
    slug: "lagos-office",
    location: "Victoria Island, Lagos",
    price: "₦0",
    beds: 0,
    baths: 0,
    sqft: "0",
    type: "Commercial" as const,
    image: "",
    featured: false,
    coordinates: { lat: 6.4281, lng: 3.4219 },
  },
];

const SUBJECTS = [
  "Buying a property",
  "Selling a property",
  "Arranging a viewing",
  "General enquiry",
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const EMPTY: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: SUBJECTS[0],
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const update = (field: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) next.name = "Please enter your name";
    if (!form.email.trim()) {
      next.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address";
    }
    if (!form.message.trim()) next.message = "Please tell us how we can help";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    // Wire to your endpoint / Sanity / email service here.
    setSent(true);
    setForm(EMPTY);
  };

  const inputBase =
    "w-full px-4 py-3 rounded-xl border text-sm text-ink placeholder:text-ink-faint focus:outline-none transition-colors";

  const inputClass = (field: keyof FormState) =>
    `${inputBase} ${
      errors[field]
        ? "border-blush focus:border-blush"
        : "border-border-soft focus:border-lavender"
    }`;

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="max-w-2xl mb-14">
          <div className="line-accent mb-6" />
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-ink tracking-tight mb-5">
            Get in touch
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed">
            Tell us what you are looking for and we will come back to you within
            one business day.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <AnimatedSection className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-float">
              {sent ? (
                <div className="text-center py-12">
                  <div className="size-14 rounded-full bg-lavender/10 flex items-center justify-center mx-auto mb-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A78BDB" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h2 className="font-display text-3xl font-normal text-ink mb-3">
                    Message received
                  </h2>
                  <p className="text-ink-muted mb-8 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out. A member of our team will be in
                    touch within one business day.
                  </p>
                  <Button variant="outline" onClick={() => setSent(false)}>
                    Send another message
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs uppercase tracking-widest text-ink-faint font-medium mb-2"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder="Your full name"
                        className={inputClass("name")}
                      />
                      {errors.name && (
                        <p className="text-xs text-blush mt-2">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs uppercase tracking-widest text-ink-faint font-medium mb-2"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="you@example.com"
                        className={inputClass("email")}
                      />
                      {errors.email && (
                        <p className="text-xs text-blush mt-2">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs uppercase tracking-widest text-ink-faint font-medium mb-2"
                      >
                        Phone <span className="normal-case">(optional)</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="+234 800 000 0000"
                        className={inputClass("phone")}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-xs uppercase tracking-widest text-ink-faint font-medium mb-2"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        value={form.subject}
                        onChange={(e) => update("subject", e.target.value)}
                        className={`${inputBase} border-border-soft focus:border-lavender bg-white`}
                      >
                        {SUBJECTS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs uppercase tracking-widest text-ink-faint font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Tell us a little about what you are looking for…"
                      className={`${inputClass("message")} resize-none`}
                    />
                    {errors.message && (
                      <p className="text-xs text-blush mt-2">{errors.message}</p>
                    )}
                  </div>

                  <Button onClick={handleSubmit} className="w-full sm:w-auto sm:self-start">
                    Send message
                  </Button>
                </div>
              )}
            </div>
          </AnimatedSection>

          {/* Details */}
          <AnimatedSection delay={0.15} className="lg:col-span-2">
            <div className="flex flex-col gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-float">
                <h2 className="font-display text-2xl font-semibold text-ink mb-6">
                  Our office
                </h2>

                <div className="flex flex-col gap-5 text-sm">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink-faint font-medium mb-1">
                      Address
                    </div>
                    <p className="text-ink leading-relaxed">
                      12 Adeola Odeku Street
                      <br />
                      Victoria Island, Lagos
                      <br />
                      Nigeria
                    </p>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink-faint font-medium mb-1">
                      Phone
                    </div>
                    <a
                      href="tel:+2348000000000"
                      className="text-ink hover:text-lavender transition-colors"
                    >
                      +234 800 000 0000
                    </a>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink-faint font-medium mb-1">
                      Email
                    </div>
                    <a
                      href="mailto:hello@prestige.ng"
                      className="text-ink hover:text-lavender transition-colors"
                    >
                      hello@prestige.ng
                    </a>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink-faint font-medium mb-1">
                      Hours
                    </div>
                    <p className="text-ink leading-relaxed">
                      Monday – Friday, 9am – 6pm
                      <br />
                      Saturday, 10am – 2pm
                    </p>
                  </div>
                </div>

                <a
                  href="https://wa.me/2348000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full bg-lavender text-white text-sm font-medium hover:bg-lavender-hover transition-colors duration-300"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.174.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.898 9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.8 11.8 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.9 11.9 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.8 11.8 0 0 0-3.48-8.413" />
                  </svg>
                  Message us on WhatsApp
                </a>
              </div>

              <div className="h-80 rounded-3xl overflow-hidden shadow-float">
                <PropertyMap properties={OFFICE} />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}