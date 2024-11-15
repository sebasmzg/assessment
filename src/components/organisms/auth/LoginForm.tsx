"use client";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ILoginRequest } from "@/app/core/application/dto/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ErrorResponse,
  FieldError,
} from "@/app/core/application/dto/common/error-response.dto";
import { Form } from "@/components/atoms/Form";
import { FormTitle } from "@/components/atoms/Form-title";
import { FormField } from "@/components/molecules/FormField";
import { ButtonSubmit } from "@/components/atoms/Button-submit";
import Link from "next/link";
import { FormFieldPassword } from "@/components/molecules/FormFieldPassword";

const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export const LoginForm = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ILoginRequest>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = async (data: ILoginRequest) => {
    console.log("submit");
    try {
      console.log("data", data);
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (result?.error) {
        console.log("Login error:", result.error);
        handleError(result.error);
        return;
      }
      router.push("/home");
    } catch (error) {
      console.log("Error in login", error);
      handleError(error);
    }
  };

  const handleError = (error: unknown) => {
    const errorData = error as ErrorResponse;
    if (errorData && errorData.errors) {
      if (Array.isArray(errorData.errors) && "field" in errorData.errors[0]) {
        errorData.errors.forEach((fieldError) => {
          const { field, error } = fieldError as FieldError;
          setError(field as keyof ILoginRequest, { message: error });
        });
      } else {
        if ("message" in errorData.errors[0]) {
          setError("email", { message: errorData.errors[0].message });
        }
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit(handleLogin)}>
      <FormTitle
        title="Transport Solutions S.A"
        subtitle="Inicia sesión en tu cuenta y gestiona tu flota de vehículos"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3em"
            height="3em"
            viewBox="0 0 32 32"
          >
            <path
              fill="#7692ff"
              d="M6.502 6.132A4 4 0 0 1 10.406 3h11.187a4 4 0 0 1 3.905 3.132L26.135 9H27a1 1 0 1 1 0 2h-.42l.33 1.485A4 4 0 0 1 29 16v10a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3v-1H10v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V16a4 4 0 0 1 2.09-3.515L5.42 11H5a1 1 0 1 1 0-2h.864zm17.044.434A2 2 0 0 0 21.593 5H10.407a2 2 0 0 0-1.953 1.566L7.247 12h17.506zM24 25v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1zM5 25v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1zm2-11a2 2 0 0 0-2 2v7h22v-7a2 2 0 0 0-2-2zm6.5 5a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2zM11 17.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M22.5 19a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"
            />
          </svg>
        }
      />
      <FormField<ILoginRequest>
        control={control}
        name="email"
        label="Correo electrónico"
        type="email"
        error={errors.email}
        placeholder="tu@ejemplo.com"
      />
      <FormFieldPassword<ILoginRequest>
        control={control}
        name="password"
        label="Password"
        error={errors.password}
        placeholder="********"
      />
      <ButtonSubmit title="Login" icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M8 10V7c0-2.21 1.79-4 4-4s4 1.79 4 4v3m-4 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 0v3m-5.4-8h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6"/></svg>}/>
      <div className="space-y-1 text-center text-sm">
        <p className=" text-slate-900">
          ¿Problemas para iniciar sesión? Contacta al administrador del sistema
        </p>
      
      </div>
    </Form>
  );
};
