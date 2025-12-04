"use client";

import Commitments from "@/components/Commitments";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <section id="home"><Hero /></section>
      <section id="welcome"><Commitments /></section>
    </>
  );
}
