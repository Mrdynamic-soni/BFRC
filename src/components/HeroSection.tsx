import React from "react";

const HeroSection = () => (
  <section className="bg-primary text-white text-center py-16 px-4">
    <h1 className="text-4xl font-bold mb-4">
      Welcome to Brothers Freezing Repairing Center
    </h1>
    <p className="mb-6 text-lg">
      Your trusted partner for appliance repair and installation services.
    </p>
    <div className="flex justify-center gap-4">
      <a
        href="tel:+919670132691"
        className="bg-secondary text-white px-6 py-2 rounded shadow-md hover:bg-secondary/80"
      >
        Call Us
      </a>
      <a
        href="https://wa.me/+919670132691"
        className="bg-accent text-white px-6 py-2 rounded shadow-md hover:bg-accent/80"
      >
        WhatsApp
      </a>
    </div>
  </section>
);

export default HeroSection;
