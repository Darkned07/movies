"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Links from "@/components/Links";
import { postUser } from "@/function/postUser";
import { useRef } from "react";
import toast from "react-hot-toast";
import { getUsers } from "@/function/getUsers";

interface RegInter {
  data: [
    {
      id: string;
      name: string;
      email: string;
      password: string;
      role: string;
    }
  ];
}

function RegLayout() {
  const { data }: any = getUsers("http://localhost:8000/users");
  const nm = useRef<HTMLInputElement>();
  const em = useRef<HTMLInputElement>();
  const pw = useRef<HTMLInputElement>();
  const check = (n: any, e: any, p: any) => {
    if (n.length >= 5) {
      data.forEach((s: any) => {
        if (e == s.email) {
          toast.error(
            "email allaqachon ro'yhatdan o'tgan! boshqa emaildan foydalaning"
          );
        } else {
          if (p.trim().length >= 4) {
            fetchData(n, e, p);
          } else {
            toast.error(
              "password kamida 4ta son yoki harfdan iborat bolishi kerak"
            );
          }
        }
      });
    } else {
      toast.error("Name kamida 5ta harfdan iborat bolishi kerak!");
    }
  };
  const fetchData = (nme: string, eme: string, pem: string) => {
    const data = {
      name: nme,
      email: eme,
      password: pem,
      role: "users",
    };
    postUser("http://localhost:8000/users", data).then((ds) => {
      if (ds) {
        const local: any = localStorage.setItem("user", JSON.stringify(ds));
        toast.success("Ro'yxatdan o'tdingiz tabriklaymiz :)");
      }
    });
  };
  const formSubmit = (e: any) => {
    e.preventDefault();
    check(nm.current?.value, em.current?.value, pw.current?.value);
  };
  return (
    <>
      <div className="h-screen grid place-content-center">
        <h2 className="text-center font-bold text-2xl">Sign up</h2>
        <form
          onSubmit={formSubmit}
          className="flex flex-col max-w-lg w-full gap-[20px] p-4"
        >
          <Input
            lbName="Name"
            type="text"
            placeholder="name writing"
            cls="md:w-96 w-full"
            rf={nm}
          />
          <Input
            lbName="email"
            type="email"
            placeholder="email writing"
            cls="md:2-96 w-full"
            rf={em}
          />
          <Input
            lbName="Password"
            type="password"
            placeholder="password writing"
            cls="md:w-96 w-full"
            rf={pw}
          />
          <Button clsBtn="btn-outline md:w-96 w-full" btnName="Sign up" />
          <div className="flex flex-row items-center gap-2">
            <hr className="w-6/12 bg-black" />
            <span>or</span>
            <hr className="w-6/12 bg-black" />
          </div>
          <div className="flex flex-row gap-5 items-center justify-center">
            <span className="font-bold">Sizda account bormi ?</span>
            <Links
              hrefLink="/auth/login"
              linkName="Login"
              cls="link link-secondary link-hover"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default RegLayout;
