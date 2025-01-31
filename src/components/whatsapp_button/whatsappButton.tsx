import { FaWhatsapp } from "react-icons/fa";
import Styles from "./Styles.module.scss";

const WhatsappButton = () => {
  const phoneNumber = "+20 100 379 3140";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={Styles["whats-float"]}
    >
      <FaWhatsapp className="whatsIcon" fill="#ffffff" size={30} />
      <span dir="ltr">
        <b>WhatsApp</b>
        <p>{phoneNumber}</p>
      </span>
    </a>
  );
};

export default WhatsappButton;
