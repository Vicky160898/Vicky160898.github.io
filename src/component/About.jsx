import styles from "../css/about.module.css";
import copy from "../media/copy.png";

export const About = () => {
  return (
    <div id="about" className={styles.container}>
      <h1 className={styles.heading}>About</h1>
      <h2 className={styles.heading2}>I'm Vinayak Hiwse</h2>
      <div className={styles.para}>
        Observant and detail-oriented aspiring full-stack developer with a
        specialization in MERN stack. self-motivated and curious, with a keen
        interest in building user-centric products. Looking forward to honing my
        skills in a challenging work environment.
      </div>
      <div className={styles.mail}>
        Drop a mail @ vinayakhiwse8@gmail.com{" "}
        <span
          onClick={() => {
            navigator.clipboard.writeText("vinayakhiwse8@gmail.com");
          }}
        >
          <img src={copy} alt="" />
        </span>
      </div>
    </div>
  );
};
