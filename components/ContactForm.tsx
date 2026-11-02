"use client";

import { useState } from "react";
import { EMAIL } from "@/lib/site";

const input = "w-full border bg-background px-4 py-3 text-base outline-none transition-all focus:border-brand focus:ring-1 focus:ring-brand";
const label = "mb-2 block text-xs font-semibold tracking-wider uppercase";

// The site has no backend, so the form hands off to the visitor's mail app.
export function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Name: ${f.get("name")}\nCompany: ${f.get("company")}\nEmail: ${f.get("email")}\nPhone: ${f.get("phone")}\n\n${f.get("message")}`;
    const subject = `Enquiry from ${f.get("name")}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div><label htmlFor="name" className={label}>Full Name</label><input id="name" name="name" required autoComplete="name" className={input} /></div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div><label htmlFor="company" className={label}>Company</label><input id="company" name="company" autoComplete="organization" className={input} /></div>
        <div><label htmlFor="phone" className={label}>Phone</label><input id="phone" name="phone" type="tel" autoComplete="tel" className={input} /></div>
      </div>
      <div><label htmlFor="email" className={label}>Email Address</label><input id="email" name="email" type="email" required autoComplete="email" className={input} /></div>
      <div><label htmlFor="message" className={label}>Message</label><textarea id="message" name="message" rows={4} required className={`${input} resize-none`} /></div>
      <button type="submit" className="group relative inline-flex w-full items-center justify-center overflow-hidden bg-brand py-3.5 text-sm font-semibold text-brand-foreground">
        <span className="absolute inset-0 origin-left scale-x-0 bg-bronze transition-transform duration-500 ease-out group-hover:scale-x-100" /><span className="relative">Send Enquiry</span>
      </button>
      <p className="text-sm text-muted-foreground" aria-live="polite">
        {sent ? `Your email app should now be open. If it isn't, write to ${EMAIL}.` : "Opens your email app with this message ready to send."}
      </p>
    </form>
  );
}
