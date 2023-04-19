import {ReactComponent as SearchIcon} from "../../assets/images/icons/search.svg";
import styles from "./searchForm.module.scss"

const searchFormData = {
    action: '#',
    inputName: 'search',
    inputPlaceholder: 'Поиск',
    inputType: 'text',
}

const {action,inputName,inputPlaceholder,inputType} = searchFormData;

const SearchForm = () => {
    return(
        <form action={action} className={styles.form}>
            <label htmlFor={inputName} className={styles.label}>
                <input type={inputType} className={styles.input} name={inputName} placeholder={inputPlaceholder}/>
            </label>

            <button className={styles.button}>
                <SearchIcon/>
            </button>

        </form>
    );
}

export default SearchForm