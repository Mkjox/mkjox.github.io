import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import styles from "./page.module.css";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.spacer}></div>
      
      <section className={styles.hero}>
        {/* <h1>Welcome to My Portfolio</h1>
        <p>Discover my work and experience!</p> */}
        <Hero/>
      </section>

      <About />
      <Projects />
      <Experience />

      {/* <div style={{ height: "100px" }}></div> */}
    </div>
  );
}
