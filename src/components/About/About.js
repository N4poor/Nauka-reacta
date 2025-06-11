import styles from './About.module.scss'

const About = () => {
    return(
        <div className={styles.body}>
          <h1 className={styles.title}>About</h1>
          <p className={styles.subtitle}>A simple to-do app, with lists, columns and card</p>
        </div>
    );
};

export default About