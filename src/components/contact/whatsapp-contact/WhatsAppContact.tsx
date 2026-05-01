import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import ContactItem from "../contact-item/ContactItem";

interface Props {
  phone: string;
  text?: string;
}

const WhatsAppContact: React.FC<Props> = ({ phone, text }) => {
  return (
    <ContactItem
      icon={<FaWhatsapp />}
      contact={phone}
      link={`https://api.whatsapp.com/send?phone=${phone}${text ? `&text=${encodeURIComponent(text)}` : ""}`}
    />
  );
};

export default WhatsAppContact;
