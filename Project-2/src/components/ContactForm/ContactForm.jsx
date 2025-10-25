import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { MdOutlineMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
function ContactForm() {
  return (
    <section className={`${styles.container}`}>
      <div className={styles.contact_form}>
        <Button
          text="VIA SUPPORT CHAT"
          icon={<MdOutlineMessage fontSize={"24px"} />}
        />
        <Button text="VIA CALL" icon={<MdCall fontSize={"24px"} />} />
      </div>
      <div className={styles.contact_Image}>
        <img src="../../Image/main.png" alt="mainimage" />
      </div>
    </section>
  );
}

export default ContactForm;
