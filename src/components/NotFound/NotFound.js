import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss'

const NotFound = () => {
    return(
        <h1 className={styles.title}>404 not found
            <Link to="*"></Link>
        </h1>
    );
};

export default NotFound