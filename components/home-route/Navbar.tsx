"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/images/netflix-logo.png";
import { Button } from "../ui/button";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className=" flex h-[80px] px-16">
      <div className="flex items-center">
        <Link href="/">
          <Image src={logo} alt="Netflix Logo" width={150} priority />
        </Link>
      </div>
      <div className="ml-auto flex items-center justify-center gap-x-4">
        <Button
          asChild
          variant="ghost"
          className="rounded-lg px-[25px] py-[10px] text-base font-bold uppercase text-white hover:bg-[#40445999] hover:text-white"
        >
          <Link href="/login">Sign In</Link>
        </Button>
        <Button
          asChild
          // variant="ghost"
          className="rounded-lg border-[#c11119] bg-[#e50914] px-[25px] py-[10px] text-base font-bold uppercase text-white  outline outline-0 outline-[#c11119] hover:bg-[#c11119] hover:text-white hover:outline-2"
        >
          <Link href="/login">Log In</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
