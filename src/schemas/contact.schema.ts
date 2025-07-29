import z from "zod";

// zod contact form schema
export const contactFormSchema = z.object({
  email: z.email({ message: "Invalid email address" }).trim(),
  name: z
    .string()
    .min(3, { message: "Name should be greater than 3 characters" })
    .max(20, { message: "Name should be less than 20 characters" }),
  message: z
    .string()
    .min(3, { message: "Message should be greater than 3 characters" })
    .max(1000, { message: "Message should be less than 1000 characters" }),
});

export type ContactForm = z.infer<typeof contactFormSchema>;
