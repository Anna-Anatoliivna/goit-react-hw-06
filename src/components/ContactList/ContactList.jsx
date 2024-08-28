import {Contact} from '../Contact/Contact'
import styles from './ContactList.module.css'

export const ContactList = ({ contacts, onDelContact }) => {

       
    return (
        <div className={styles.box}>
            <ul className={styles.list}>
                {contacts.map(({ id, name, number }) => (
                    <li className={styles.item} key={id}>
                        <Contact
                            // handleClick={handleClick}
                            id={id}
                            name={name}
                            number={number}
                            onDelContact={onDelContact}
                        />
                    </li>)
                )}
            </ul>
        </div>
    );
};
