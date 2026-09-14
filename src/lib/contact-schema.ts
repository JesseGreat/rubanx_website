import { z } from "zod";

import { budgetRanges, projectTypes } from "@/content/contact";

/**
 * One schema, used by the form in the browser and by the route handler on the
 * server. Client validation is a convenience; the server validates again and
 * treats anything arriving over the wire as untrusted.
 */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please give us your name.")
    .max(100, "That name is too long."),
  company: z
    .string()
    .trim()
    .max(120, "That company name is too long.")
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .trim()
    .min(1, "We need an email address to reply to.")
    .email("That email address does not look right.")
    .max(160, "That email address is too long."),
  phone: z
    .string()
    .trim()
    .max(40, "That phone number is too long.")
    .optional()
    .or(z.literal("")),
  projectType: z.enum(projectTypes, {
    errorMap: () => ({ message: "Please choose what you need built." }),
  }),
  budget: z.enum(budgetRanges, {
    errorMap: () => ({ message: "Please choose a budget range." }),
  }),
  message: z
    .string()
    .trim()
    .min(20, "Please give us a little more detail, at least 20 characters.")
    .max(4000, "That message is too long. Please keep it under 4000 characters."),
  /**
   * Honeypot. Hidden from people, attractive to bots.
   *
   * This deliberately accepts any string rather than requiring an empty one.
   * If the schema rejected a filled honeypot, the response would be a 400
   * naming the field, which tells a bot exactly what tripped it. Instead the
   * value passes validation and the route handler discards the submission
   * while returning an ordinary success response.
   */
  website: z.string().max(200).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactFieldErrors = Partial<
  Record<keyof ContactInput, string>
>;

export const emptyContact: Record<keyof ContactInput, string> = {
  name: "",
  company: "",
  email: "",
  phone: "",
  projectType: "" as ContactInput["projectType"],
  budget: "" as ContactInput["budget"],
  message: "",
  website: "",
};
