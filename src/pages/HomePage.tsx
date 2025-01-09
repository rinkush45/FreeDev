import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Team } from '../components/Team';
import { Reviews } from '../components/Reviews';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      {/* <Team /> */}
      <Reviews />
      <Contact />
    </>
  );
}