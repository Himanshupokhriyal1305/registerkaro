import React from "react";
import { Allimages } from "../Asstes/Allimages";

const FAQSection = () => {
  const faqs = [
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?",
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <p className="text-uppercase text-warning fw-bold mb-1">FAQ</p>
        <h2 className="fw-bold mb-4">Frequent Ask Questions</h2>
        <div className="list-group">
          {faqs.map((question, index) => (
            <button
              key={index}
              className="list-group-item p-3 fw-bold list-group-item-action d-flex justify-content-between align-items-center mb-2"
              style={{
                borderRadius: "10px",
                border: "1px solid #ddd",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              {question}
              <i class="fa-solid fa-angle-right"></i>
            </button>
          ))}
        </div>
        <button
          className="btn testimonial-section text-white mt-4 px-4 py-2"
          style={{ borderRadius: "6px" }}
        >
          Show more  <img
                            src={Allimages.Accelerate5 }
                            alt="Logo"
                            className="  Accelerate5 "
                          />
        </button>
      </div>
    </section>
  );
};

export default FAQSection;
