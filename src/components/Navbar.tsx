// import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <a href="#about" className={styles.navLink}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" className={styles.navLink}>
            Projects
          </a>
        </li>
        <li>
          <a href="#experience" className={styles.navLink}>
            Experience
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
