 import profile from "../media/profile.png";
 import linklind from "../media/linklind.png";
 import github from "../media/github.png";
import styles from "../css/home.module.css";
export const Home = () => {
  return (
    <div id="home" className={styles.container}>
      <div style={{ flex: "1" }} className={styles.firstChild}>
        <div>
          Hi{" "}
          <img
            style={{ marginLeft: "6px" }}
            src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
            alt=""
          />
          ,
        </div>
        <div>
          {/* I'am <span style={{ color: "#4070f4" }}>Vinayak</span> */}
          I'am <span style={{ color: "white" }}>Vinayak</span>
        </div>
        <div>MERN Developer</div>
        <div>
          <button
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1x-dQIuz7vDjRSn-m-IilFbgKmQCzPT-z/view",
                "_blank"
              );
            }}
            className={styles.resumeBtn}
          >
            Resume
          </button>
        </div>
        <div className={styles.iconDiv}>
          <a
            target="_blank"
            rel="noreferrer"
            style={{ display: "block" }}
            href="https://www.linkedin.com/in/vinayak-hiwase-467646219/"
          >
            <img src={linklind} alt="" />
          </a>
          <a
            style={{ display: "block" }}
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Vicky160898/"
          >
            <img src={github} alt="" />
          </a>
        </div>
      </div>
      <div className={styles.secondChild}>
        <img src={profile} alt="profile_img" />
      </div>
    </div>
  );
};
