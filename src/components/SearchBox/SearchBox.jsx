import { useDispatch, useSelector } from 'react-redux';
import {
  selectNameFilter,
  setFilterValue,
} from '../../redux/filter/filtersSlice';
import styles from './SearchBox.module.css';

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);
  const handleChange = e => {
    dispatch(setFilterValue(e.target.value));
  };
  return (
    <div className={styles.box}>
      <span className={styles.text}>Find contacts by name</span>
      <input
        className={styles.input}
        type="text"
        value={filterValue}
        onChange={handleChange}
      />
    </div>
  );
};
