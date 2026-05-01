import React from "react";
import { FaPhone } from "react-icons/fa";

import ContactItem from "../contact-item/ContactItem";

interface Props {
  phone: string;
}

const PhoneContact: React.FC<Props> = ({ phone }) => {
  return (
    <ContactItem icon={<FaPhone />} contact={phone} link={`tel:${phone}`} />
  );
};

export default PhoneContact;
