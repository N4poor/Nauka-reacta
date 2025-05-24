import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';

const ColumnForm = props => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_COLUMN' ,payLoad: {title, icon} });
        setTitle('');
        setIcon('');
    };

	return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
        <label className={styles.inputLabel}>
            Title: <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            Icon:  <input type="text" value={icon}  onChange={e => setIcon (e.target.value)}/> 
        </label>
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;