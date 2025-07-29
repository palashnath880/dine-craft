"use server";

import { contactFormSchema } from "@/schemas/contact.schema";
import z from "zod";

export const sendContactEmail = async (_, form: any) => {
  try {
    // params validation
    const formData = Object.fromEntries(form);
    const { data, error } = await contactFormSchema.safeParseAsync(formData);

    if (error)
      return {
        success: false,
        errors: z.treeifyError(error),
      };

    console.log(`form`, data);
  } catch (err: any) {
    throw new Error(err.message);
  }
};
