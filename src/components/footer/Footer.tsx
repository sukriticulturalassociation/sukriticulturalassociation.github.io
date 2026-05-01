import React, { useState } from "react";
import qrCodeFacebook from "../../assets/qr-codes/qrcode_sukriti_facebook.png";
import qrCodeInstagram from "../../assets/qr-codes/qrcode_sukriti_instagram.png";
import qrCodeDonation from "../../assets/qr-codes/qrcode_sukriti_payment_federalbank.png";
import qrCodeYoutube from "../../assets/qr-codes/qrcode_sukriti_youtube.png";

import "./Footer.css";

import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import PhoneContact from "../contact/phone-contact/PhoneContact";
import PopupModal from "../popup/popup-modal/PopupModal";
import WhatsAppContact from "../contact/whatsapp-contact/WhatsAppContact";

const Footer: React.FC = () => {
  const [openPopupYoutubeQrCode, setPopupYoutubeQrCode] = useState(false);
  const [openPopupFacebookQrCode, setPopupFacebookQrCode] = useState(false);
  const [openPopupInstagramQrCode, setPopupInstagramQrCode] = useState(false);

  return (
    <footer className="footer">
      {/* First Row */}
      <div className="footer-top">
        {/* Column 1 - Donation */}
        <div className="footer-col">
          <h3>Support Us</h3>
          <p>Scan to donate</p>
          <div>
            <img
              src={qrCodeDonation}
              alt="Donate to Sukriti Cultural Association"
              className="qr"
            />
          </div>
        </div>

        {/* Column 2 - Social Links */}
        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="social-item">
            <FaYoutube size={24} color="#FF0000" />
            <a
              href="https://www.youtube.com/@SukritiCulturalAssociation"
              target="_blank"
            >
              @SukritiCulturalAssociation
            </a>
            <img
              src={qrCodeYoutube}
              alt="YouTube QR"
              className="qr-small"
              onClick={() => setPopupYoutubeQrCode(true)}
            />
            <PopupModal
              isOpen={openPopupYoutubeQrCode}
              onClose={() => setPopupYoutubeQrCode(false)}
            >
              <img src={qrCodeYoutube} alt="YouTube QR" className="qr" />
            </PopupModal>
          </div>
          <div className="social-item">
            <FaFacebookSquare size={24} color="#3b5998" />
            <a
              href="https://www.facebook.com/groups/1084620604939059"
              target="_blank"
            >
              Sukriti Cultural Association
            </a>
            <img
              src={qrCodeFacebook}
              alt="Facebook QR"
              className="qr-small"
              onClick={() => setPopupFacebookQrCode(true)}
            />
            <PopupModal
              isOpen={openPopupFacebookQrCode}
              onClose={() => setPopupFacebookQrCode(false)}
            >
              <img src={qrCodeFacebook} alt="Facebook QR" className="qr" />
            </PopupModal>
          </div>
          <div className="social-item">
            <FaInstagramSquare size={24} color="#E1306C" />
            <a
              href="https://www.instagram.com/sukriti.cultural.association/"
              target="_blank"
            >
              sukriti.cultural.association
            </a>
            <img
              src={qrCodeInstagram}
              alt="Instagram QR"
              className="qr-small"
              onClick={() => setPopupInstagramQrCode(true)}
            />
            <PopupModal
              isOpen={openPopupInstagramQrCode}
              onClose={() => setPopupInstagramQrCode(false)}
            >
              <img src={qrCodeInstagram} alt="Instagram QR" className="qr" />
            </PopupModal>
          </div>
        </div>

        {/* Column 3 - Important Links */}
        <div className="footer-col">
          <h3>Important Links</h3>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#events">Event Calendar</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Column 4 - Contact Form */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <div className="contact-form">
            <div>
              <p>President: Sumanta</p>
              <PhoneContact phone="+91 96200 97244" />
              <WhatsAppContact phone="919620097244" />
            </div>
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Sukriti Cultural Association. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
