import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters"),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),

  phone: z.string().optional(),

  role: z.enum(["CUSTOMER", "TECHNICIAN"], {
    error: "Role is required",
  }),

  address: z
    .string()
    .min(1, "Address is required"),

  profileImage: z
    .string()
    .url("Please enter a valid image URL")
    .optional()
    .or(z.literal("")),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;