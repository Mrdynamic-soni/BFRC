import React from "react";

const services = [
  {
    name: "Fridge Repair",
    description: "Expert repair services for all fridge models.",
  },
  {
    name: "AC Installation & Repair",
    description: "Professional AC fitting and maintenance.",
  },
  {
    name: "Washing Machine Repair",
    description: "Reliable washing machine servicing.",
  },
  {
    name: "Geyser Repair",
    description: "Quick and affordable geyser repairs.",
  },
];

const ServicesSection = () => (
  <section className="py-16 px-4 bg-light">
    <h2 className="text-3xl font-bold text-center text-dark mb-10">
      Our Services
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {services.map((service) => (
        <div
          key={service.name}
          className="p-6 bg-white shadow-md rounded-md hover:shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-2 text-primary">
            {service.name}
          </h3>
          <p className="text-dark/70">{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesSection;
