import React from "react";

const ClientsSection = () => (
  <section className="py-16 px-4">
    <h2 className="text-3xl font-bold text-center text-dark mb-10">
      What Our Clients Say
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <blockquote className="bg-light p-6 rounded shadow-md">
        &quot;Excellent service! Fixed my fridge in no time.&quot; - John D.
      </blockquote>
      <blockquote className="bg-light p-6 rounded shadow-md">
        &quot;Affordable and reliable AC installation.&quot; - Mary K.
      </blockquote>
    </div>
  </section>
);

export default ClientsSection;
