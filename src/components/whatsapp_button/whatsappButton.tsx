import { FaWhatsapp } from "react-icons/fa";
import Styles from "./Styles.module.scss";

const WhatsappButton = () => {
  const phoneNumber = "+20 101 954 9956";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={Styles["whats-float"]}
    >
      <span dir="ltr">
        <b>WhatsApp</b>
        <p>{phoneNumber}</p>
      </span>
      <FaWhatsapp className={Styles.icon} size={30} />
    </a>
  );
};

export default WhatsappButton;
