import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { MdOutlineMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
function ContactForm() {
  return (
    <section className={`${styles.container}`}>
      <div className={styles.contact_form}>
        <div className={styles.top_button}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdOutlineMessage fontSize={"24px"} />}
          />
          <Button text="VIA CALL" icon={<MdCall fontSize={"24px"} />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdOutlineMessage fontSize={"24px"} />}
        />

        <form action="">
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" />
          </div>
          <div className={styles.submit_btn}>
            <Button text="SUBMIT" />
          </div>
        </form>
      </div>
      <div className={styles.contact_Image}>
        <img src="../../Image/main.png" alt="mainimage" />
      </div>
    </section>
  );
}

export default ContactForm;
