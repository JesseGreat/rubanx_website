"use client";

import { useId, useRef, useState } from "react";

import { Button } from "./button";
import {
  budgetRanges,
  contactPage,
  formLabels,
  projectTypes,
} from "@/content/contact";
import {
  contactSchema,
  emptyContact,
  type ContactFieldErrors,
} from "@/lib/contact-schema";
import { site } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";

const fieldBase =
  "mt-2 block w-full border border-rule-strong bg-white px-4 py-3 text-body text-ink transition-colors focus:border-charcoal";

export function ContactForm() {
  const id = useId();
  const [values, setValues] = useState(emptyContact);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const statusRef = useRef<HTMLDivElement>(null);

  const set = (field: keyof typeof emptyContact) => (value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const announce = () => {
    /* Move focus to the result so it is announced and not missed. */
    window.requestAnimationFrame(() => statusRef.current?.focus());
  };

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const parsed = contactSchema.safeParse(values);

    if (!parsed.success) {
      const nextErrors: ContactFieldErrors = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof ContactFieldErrors;
        if (field && !nextErrors[field]) nextErrors[field] = issue.message;
      }
      setErrors(nextErrors);
      setStatus("idle");

      const first = document.getElementById(
        `${id}-${Object.keys(nextErrors)[0]}`,
      );
      first?.focus();
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) throw new Error(`Request failed: ${response.status}`);

      setStatus("sent");
      setValues(emptyContact);
      announce();
    } catch {
      setStatus("error");
      announce();
    }
  }

  if (status === "sent") {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="border-l-[3px] border-orange bg-tint p-8"
      >
        <h3 className="text-h3 font-semibold">
          {contactPage.form.successHeading}
        </h3>
        <p className="measure mt-3 text-ink">{contactPage.form.successBody}</p>
        <button
          type="button"
          className="mt-6 text-meta font-semibold text-charcoal underline underline-offset-4"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
      <Field
        id={`${id}-name`}
        label={formLabels.name}
        error={errors.name}
        className="sm:col-span-1"
      >
        <input
          id={`${id}-name`}
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(event) => set("name")(event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${id}-name-error` : undefined}
          className={fieldBase}
        />
      </Field>

      <Field
        id={`${id}-company`}
        label={formLabels.company}
        optional
        error={errors.company}
      >
        <input
          id={`${id}-company`}
          name="company"
          type="text"
          autoComplete="organization"
          value={values.company}
          onChange={(event) => set("company")(event.target.value)}
          className={fieldBase}
        />
      </Field>

      <Field id={`${id}-email`} label={formLabels.email} error={errors.email}>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => set("email")(event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? `${id}-email-error` : undefined}
          className={fieldBase}
        />
      </Field>

      <Field
        id={`${id}-phone`}
        label={formLabels.phone}
        optional
        error={errors.phone}
      >
        <input
          id={`${id}-phone`}
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={(event) => set("phone")(event.target.value)}
          className={fieldBase}
        />
      </Field>

      <Field
        id={`${id}-projectType`}
        label={formLabels.projectType}
        error={errors.projectType}
      >
        <select
          id={`${id}-projectType`}
          name="projectType"
          value={values.projectType}
          onChange={(event) => set("projectType")(event.target.value)}
          aria-invalid={Boolean(errors.projectType)}
          aria-describedby={
            errors.projectType ? `${id}-projectType-error` : undefined
          }
          className={fieldBase}
        >
          <option value="">{formLabels.choose}</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </Field>

      <Field
        id={`${id}-budget`}
        label={formLabels.budget}
        error={errors.budget}
      >
        <select
          id={`${id}-budget`}
          name="budget"
          value={values.budget}
          onChange={(event) => set("budget")(event.target.value)}
          aria-invalid={Boolean(errors.budget)}
          aria-describedby={errors.budget ? `${id}-budget-error` : undefined}
          className={fieldBase}
        >
          <option value="">{formLabels.choose}</option>
          {budgetRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </Field>

      <Field
        id={`${id}-message`}
        label={formLabels.message}
        error={errors.message}
        className="sm:col-span-2"
      >
        <textarea
          id={`${id}-message`}
          name="message"
          rows={6}
          value={values.message}
          onChange={(event) => set("message")(event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${id}-message-error` : undefined}
          className={`${fieldBase} resize-y`}
        />
      </Field>

      {/* Honeypot. Hidden from people, left in the tab order for nobody. */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor={`${id}-website`}>Website</label>
        <input
          id={`${id}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => set("website")(event.target.value)}
        />
      </div>

      <div className="sm:col-span-2">
        {status === "error" ? (
          <div
            ref={statusRef}
            tabIndex={-1}
            role="alert"
            className="mb-6 border-l-[3px] border-orange bg-tint p-6"
          >
            <h3 className="font-semibold text-charcoal">
              {contactPage.form.errorHeading}
            </h3>
            <p className="measure mt-2 text-meta text-ink">
              {contactPage.form.errorBody}{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-semibold underline underline-offset-4"
              >
                {site.email}
              </a>
            </p>
          </div>
        ) : null}

        <Button type="submit" disabled={status === "sending"}>
          {status === "sending"
            ? contactPage.form.sendingLabel
            : contactPage.form.submitLabel}
        </Button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  optional = false,
  className = "",
  children,
}: {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-meta font-semibold text-charcoal">
        {label}
        {optional ? (
          <span className="ml-2 font-normal text-muted">
            ({formLabels.optional})
          </span>
        ) : null}
      </label>
      {children}
      {/*
        Error text is charcoal, not orange. Orange on white does not clear AA
        at this size, and colour is never the only signal here: the field is
        marked aria-invalid and the message is tied to it by aria-describedby.
      */}
      {error ? (
        <p
          id={`${id}-error`}
          className="mt-2 flex gap-3 border-l-[3px] border-orange pl-3 text-meta font-semibold text-charcoal"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
