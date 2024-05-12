"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Header } from "./header";
import { BackButton } from "./back-button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type ModalProps = {
  title: string;
};

enum STEPS {
  ACCOUNTTYPE = 0,
  EMAIL = 1,
  PASSWORD = 2,
}

const RegisterModal = ({ title }: ModalProps) => {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "jake@phillips.com",
      password: "dfdfdfdfdd",
      name: "",
    },
  });

  const [step, setStep] = useState(STEPS.EMAIL);

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    console.log(values);
  };

  let body = (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="John Doe" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={false}>
            CREATE AN ACCOUNT
          </Button>
        </form>
      </Form>
    </div>
  );

  return (
    <Card>
      <CardHeader>
        <Header label="Create Account" />
      </CardHeader>
      <CardContent>{body}</CardContent>

      <CardFooter>
        <BackButton label="Already have an account?" href="/auth/login" />
      </CardFooter>
    </Card>
  );
};

export default RegisterModal;
