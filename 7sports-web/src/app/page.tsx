"use client";
import styles from "./page.module.css";
import { motion } from "motion/react";
import "./globals.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProgramCard from "../components/ProgramCard";
import { SoccerIcon, MultisportIcon, HockeyIcon } from "../components/ProgramIcons"; // You can use Lucide or your own SVGs

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section id="programmes" style={{
        background: "var(--bg-off)",
        padding: "4rem 0 3rem 0"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "2.5rem",
          flexWrap: "wrap",
          maxWidth: 1100,
          margin: "0 auto"
        }}>
          <ProgramCard
            icon={<SoccerIcon />}
            title="Soccer"
            description="Découverte et plaisir du ballon rond, dès 2 ans."
          />
          <ProgramCard
            icon={<MultisportIcon />}
            title="Multisport"
            description="Coordination, jeux variés et esprit d’équipe."
          />
          <ProgramCard
            icon={<HockeyIcon />}
            title="Dek Hockey"
            description="Agilité, tir et passes, sans contact."
          />
        </div>
      </section>
      {/* Add Pourquoi, Regions, Testimonials, CTA, Footer sections here */}
    </>
  );
}
