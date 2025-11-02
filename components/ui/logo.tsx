"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center justify-center ${className}`}
      aria-label="Interview Coder"
    >
      <Image
        src={logo}
        alt="Interview Coder Logo"
        width={50}
        height={50}
        className="object-contain rounded-full"
        priority
      />
    </Link>
  );
}
