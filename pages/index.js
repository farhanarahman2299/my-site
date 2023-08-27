import Head from "next/head";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <motion.img
          className="motion-box postman"
          src="./postman.png"
          drag
          dragConstraints={{
            top: -80,
            left: -80,
            right: 80,
            bottom: 80,
          }}
          animate={{
            y: [0, 100, 150, 200, 250, 300, 350, 550, 650, 0],
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 3,
            times: [0, 0.2, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
        <motion.img
          className="motion-box lucid"
          src="./lucid-chart.png"
          drag
          dragConstraints={{
            top: -80,
            left: -80,
            right: 80,
            bottom: 80,
          }}
          animate={{
            y: [0, 90, 130, 200, 350, 400, 350, 450, 650, 0],
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 5,
            times: [0, 0.2, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
        <motion.img
          className="motion-box balsamiq"
          src="./balsamiq.png"
          drag
          dragConstraints={{
            top: -80,
            left: -80,
            right: 80,
            bottom: 80,
          }}
          animate={{
            y: [0, 70, 90, 200, 500, 550, 600, 450, 250, 0],
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 5,
            times: [0, 0.2, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
        <motion.img
          className="motion-box jira"
          src="./jira.png"
          drag
          dragConstraints={{
            top: -80,
            left: -80,
            right: 80,
            bottom: 80,
          }}
          animate={{
            y: [0, 50, 90, 150, 170, 350, 370, 550, 250, 0],
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 7,
            times: [0, 0.2, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
        <motion.img
          className="motion-box github"
          src="./github.png"
          drag
          dragConstraints={{
            top: -80,
            left: -80,
            right: 80,
            bottom: 80,
          }}
          animate={{
            y: [0, 100, 170, 205, 320, 470, 630, 550, 250, 0],
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 7,
            times: [0, 0.2, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
        <motion.img
          className="motion-box visio"
          src="./visio.png"
          drag
          dragConstraints={{
            top: -80,
            left: -80,
            right: 80,
            bottom: 80,
          }}
          animate={{
            y: [0, 100, 170, 205, 320, 470, 630, 550, 250, 0],
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 4,
            times: [0, 0.2, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
        <motion.img
          className="motion-box swagger"
          src="./swagger.png"
          drag
          dragConstraints={{
            top: -80,
            left: -80,
            right: 80,
            bottom: 80,
          }}
          animate={{
            y: [0, 270, 310, 405, 450, 670, 320, 210, 100, 0],
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            times: [0, 0.2, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
        <motion.img
          className="motion-box confluence"
          src="./confluence.png"
          drag
          dragConstraints={{
            top: -80,
            left: -80,
            right: 80,
            bottom: 80,
          }}
          animate={{
            y: [0, 310, 350, 405, 570, 600, 200, 210, 100, 0],
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 1,
            times: [0, 0.2, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
        <img className="box" src="./suhi.png"></img>
        <h1 className={styles.title}>Farhana Rahman</h1>
        <a
          className={styles.subtitle}
          href="mailto:farhana.rahman2299@gmail.com"
        >
          Email: farhana.rahman2299@gmail.com
        </a>
        <br></br>
        <a className={styles.subtitle} href="tel:+8801300151544">
          Phone: +8801300151544
        </a><br></br><br></br>
        <motion.a className={styles.resume} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href="https://drive.google.com/file/d/1B58v_gP9CYZicvUY6qn2DES6_4u5TlVS/view?usp=sharing" target="_blank">My Resume</motion.a>
        {/* <a href="https://drive.google.com/file/d/1B58v_gP9CYZicvUY6qn2DES6_4u5TlVS/view?usp=sharing" target="_blank" rel="noopener noreferrer">My Resume</a> */}
      </main>

      <footer></footer>
    </div>
  );
}
