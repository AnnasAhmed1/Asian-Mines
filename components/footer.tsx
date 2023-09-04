"use client";

import React from "react";
import { H1, H2 } from "./helper";

function Footer() {
  return (
    <footer className="main-section/ footer">
      <h1>ASIAN MINES AND MINERALS</h1>
      <div className="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7240.76156296308!2d67.01597640000001!3d24.850841199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1693802790865!5m2!1sen!2s"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <p>&copy; 2023, Asian Mines and Minerals - All Rights Reserved </p>
    </footer>
  );
}

export default Footer;
