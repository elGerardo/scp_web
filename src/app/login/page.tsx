"use client";
import Form from "@/components/form/form";
import Input from "@/components/input";
import Button from "@/components/button/button";
import Image from "next/image";
import LogoBlack from "/public/logo_black.png";
import { FormEvent, useRef } from "react";
import { signIn } from "next-auth/react";
import UserService from "@/services/UserService";

export default function Login() {
  const email = useRef();
  const password = useRef();

  const handleOnSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (email.current == null || password.current == null) return;
    const response = await UserService.login({
      email: email.current["value"],
      password: password.current["value"],
    });

    if (response.status !== 200) return;

    await signIn("credentials", {
      email: email.current["value"],
      token: response.access_token,
      callbackUrl: "/dashboard",
    });
  };

  return (
    <div className="container">
      <Form
        className="d-flex flex-column justify-content-center align-items-center"
        onSubmit={(event) => handleOnSubmit(event)}
      >
        <Image src={LogoBlack} height={75} alt="logo_scp" className="mt-5" />
        <p>Welcome to SCP Foundation</p>
        <Input
          className="Iw-50"
          required
          placeholder="Username"
          inputRef={email}
        />
        <Input
          inputRef={password}
          className="Iw-50 my-3"
          required
          type="password"
          placeholder="Password"
        />
        <Button className="rounded-sm px-4 py-3 font-size-3 w-25">Login</Button>
      </Form>
    </div>
  );
}
