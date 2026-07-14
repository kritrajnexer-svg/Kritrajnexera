import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  company: z.string().optional(),
  budget: z.string().optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters"),
});

export const demoSchema = z.object({
  name: z.string().min(2, "Name is required"),
  businessName: z.string().min(2, "Business name is required"),
  email: z.string().email("Enter a valid email address"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number with at least 10 digits"),
  businessType: z.string().min(1, "Select a business type"),
  message: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  role: z.string().optional(),
  teamSize: z.string().optional(),
});
