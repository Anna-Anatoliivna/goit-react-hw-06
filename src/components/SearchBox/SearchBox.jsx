import styles from './SearchBox.module.css'

export const SearchBox = ({value, handleFilter}) => {
  return (
      <div className={styles.box}>
          <span className={styles.text}>Find contactys by name</span>
          <input className={styles.input} type="text" value={value} onChange={handleFilter}
                  />
    </div>
  )
}
 