import Image from "next/image";
import Link from "next/link";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projectGrid}>
        <div className={styles.projectCard}>
          <Image src="/project1.jpg" width={300} height={200} alt="Project 1" />
          <h3>Project 1</h3>
          <p>A brief description of project 1.</p>
          <Link href="https://github.com/yourproject" target="_blank">
            View Project
          </Link>
        </div>
        <div className={styles.projectCard}>
          <Image src="/project2.jpg" width={300} height={200} alt="Project 2" />
          <h3>Project 2</h3>
          <p>A brief description of project 2.</p>
          <Link href="https://github.com/yourproject" target="_blank">
            View Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
