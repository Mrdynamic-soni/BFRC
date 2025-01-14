import React from "react";

const ContactSection = () => (
  <section className="py-16 px-4 bg-light">
    <h2 className="text-3xl font-bold text-center text-dark mb-10">
      Contact Us
    </h2>
    <p className="text-center mb-6 text-dark">
      Visit us or get in touch through the details below:
    </p>
    <div className="text-center space-y-4">
      <p className="text-dark">
        <strong>Phone:</strong>{" "}
        <a
          href="tel:+919670132691"
          className="text-primary font-bold hover:underline"
        >
          +91 96701 32691
        </a>
      </p>
      <p className="text-dark">
        <strong>WhatsApp:</strong>{" "}
        <a
          href="https://wa.me/919670132691"
          className="text-secondary font-bold hover:underline"
        >
          Chat with us
        </a>
      </p>
      <p className="text-dark">
        <strong>Location:</strong> 8/42, Naubasta Rd, opposite to L.I.C. OFFICE,
        FATEHPUR, Khaga, Uttar Pradesh 212655
      </p>
      <a
        href="https://maps.google.com/?q=Brothers+freezing+repairing+center+FATEHPUR&ll=25.7755387,81.1007637"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-primary text-white px-6 py-3 rounded shadow-md hover:bg-primary/80 transition"
      >
        Open in Google Maps
      </a>
    </div>
  </section>
);

export default ContactSection;
