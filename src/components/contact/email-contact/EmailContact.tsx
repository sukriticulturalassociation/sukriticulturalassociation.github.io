import React from "react";
import { MdEmail } from "react-icons/md";
import ContactItem from "../contact-item/ContactItem";

interface Props {
  email: string;
}

const EmailContact: React.FC<Props> = ({ email }) => {
  return (
    <ContactItem icon={<MdEmail />} contact={email} link={`mailto:${email}`} />
  );
};

export default EmailContact;
