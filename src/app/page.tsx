"use client";

import About from "@/components/About";
import Article from "@/components/Article";
import Commitments from "@/components/Commitments";
import Hero from "@/components/Hero";
import Reviews from "@/components/Review";
import ServiceList from "@/components/ServiceList";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="welcome"><Commitments /></section>
      <section id="services"><Services /></section>
      <section id="serviceList"><ServiceList /></section>
      <section id="blog"><Article /></section>
      <section id="reviews"><Reviews /></section>
    </>
  );
}
