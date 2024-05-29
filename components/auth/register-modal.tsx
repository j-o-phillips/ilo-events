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
  NAME = 3,
  PAYMENT = 4,
}

const RegisterModal = ({ title }: ModalProps) => {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "fggfgfgg",
      name: "ffgfgfd",
    },
  });

  const [step, setStep] = useState(STEPS.EMAIL);

  const onNext = () => {
    setStep((prev) => prev + 1);
    console.log(step);
  };

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    console.log(values);
  };

  let body;

  if (step === STEPS.EMAIL) {
    body = (
      <div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{step}</FormLabel>
              <FormControl>
                <Input {...field} placeholder="John@Doe.com" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button onClick={onNext} className="w-full" disabled={false}>
          CREATE AN ACCOUNT
        </Button>
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <Header label="Create Account" />
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>{body}</form>
        </Form>
      </CardContent>

      <CardFooter>
        <BackButton label="Already have an account?" href="/auth/login" />
      </CardFooter>
    </Card>
  );
};

export default RegisterModal;
