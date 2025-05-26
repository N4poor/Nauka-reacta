import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import styles from './SearchForm.module.scss';
import { updateSearchString } from '../../Redux/store';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearchString(inputValue))
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder="Search..."
        value={inputValue}
        onChange={handleChange}
      />
      <Button type="submit">
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;