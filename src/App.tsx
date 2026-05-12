/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Steps from './components/Steps';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Steps />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
