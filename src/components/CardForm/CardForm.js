import styles from './CardForm.module.scss'
import { useState } from 'react'
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'
import { useDispatch } from 'react-redux'

const CardForm = props => {
    const {columnId} = props;
    
    const dispatch = useDispatch();
    
    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'ADD_CARD', payLoad: {title, columnId} });
        //props.action({ title: title }, props.columnId);
        setTitle('')
    };

    return(
        <form className={styles.CardForm} onSubmit={handleSubmit}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>
    );
};

export default CardForm