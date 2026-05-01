import React from "react";
import "./Contact.css";

interface Props {
  icon: React.ReactNode; // 🔥 accept JSX instead of image path
  contact: string;
  link: string;
}

const ContactItem: React.FC<Props> = ({ icon, contact, link }) => {
  return (
    <a href={link} className="contact-item" target="_blank" rel="noreferrer">
      <span className="contact-icon">{icon}</span>
      <span>{contact}</span>
    </a>
  );
};

export default ContactItem;
