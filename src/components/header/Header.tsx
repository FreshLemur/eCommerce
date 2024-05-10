import styles from "../../assets/css/header.module.css";
import logoIcon from "../../assets/svg/logoIcon.svg";
import phoneIcon from "../../assets/svg/phoneIcon.svg";
import DropDownListWrapper from "./DropDownListWrapper";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* start left section */}
      <section className={styles.leftSection}>
        <section>
          <ul>
            <li>
              <a href="" className={styles.phoneNumberLeftSection}>
                <img className={styles.phoneIcon} src={phoneIcon} alt="" />
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

      {/* finish left section */}

      {/* start center section */}
      <section className={styles.centerSection}>
        <a href="">
          <img src={logoIcon} alt="" />
        </a>
      </section>

      {/* finish center section */}

      {/* start right section */}
      <section className={styles.rightSection}>
        <section>
          <input
            type="text"
            placeholder="Search..."
            className={styles.search}
          />
        </section>

        <section>
          <DropDownListWrapper />
        </section>
      </section>

      {/* finish right section */}
    </header>
  );
};
export default Header;
