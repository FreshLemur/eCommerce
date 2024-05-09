import styles from "../assets/css/header.module.css";
import logoIcon from "../assets/svg/logoIcon.svg";
import phoneIcon from "../assets/svg/phoneIcon.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* left section */}
      <section className={styles.leftSection}>
        <section>
          <ul>
            <li>
              <a href="" className={styles.phoneNumberLeftSection}>
                <img src={phoneIcon} alt="" />
                <p>+1234567890</p>
              </a>
            </li>
          </ul>
        </section>

        <section>
          <button className={styles.logInButton}>Log in</button>
          <button className={styles.signUpButton}>Sign up</button>
        </section>
      </section>

      {/* center section */}
      <section className={styles.centerSection}>
        <a href="">
          <img src={logoIcon} alt="" />
        </a>
      </section>

      {/* right section */}
      <section className={styles.rightSection}>
        <section>
          <input
            type="text"
            placeholder="Search..."
            className={styles.search}
          />
        </section>

        <section>
          <label htmlFor="theme">Theme:</label>
          <select name="theme" id="theme">
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </section>
      </section>
    </header>
  );
};
export default Header;
