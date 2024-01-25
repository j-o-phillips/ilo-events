"use server";

import { signIn } from "next-auth/react";

import { LoginSchema } from "@/schemas";

import * as z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/home",
    });
  } catch (error) {
    if (error) {
      return { error: "Something went wrong" };
    }
    throw error;
  }
};
