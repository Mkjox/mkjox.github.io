import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <h2>Experience</h2>
      <div className={styles.experienceItem}>
        <h3>Company </h3>
        <p>Role: </p>
        <p>Duration: </p>
        <p>Description: </p>
      </div>

    </section>
  );
};

export default Experience;
