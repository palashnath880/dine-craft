import z from "zod";

export const bookingFormSchema = z.object({
  name: z
    .string({ message: "Name is required" })
    .min(3, "Name should be greater than 3 characters")
    .max(20, "Name should be less than 20 characters"),
  email: z.email("Invalid email address").trim(),
  phone: z.string("Phone is required").trim(),
  eventType: z.string("Event type is required"),
  eventDate: z.string("Event date is required"),
  eventTime: z.string("Event time is required"),
  noOfGuest: z.number("Please enter no of guests").positive(),
  // .or(z.transform((val) => (typeof val !== "number" ? Number(val) : val))),
  // .transform((val) => (typeof val !== "number" ? Number(val) : val)),
  location: z.string({ message: "Location is required" }),
});

export type BookingForm = z.infer<typeof bookingFormSchema>;
