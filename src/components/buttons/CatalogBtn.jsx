import styles from "./buttons.module.scss"
const CatalogBtn = (props) => {
    return(
        <button className={styles.catalog_btn}>
            <span></span>
            {props.content}
        </button>
    )
};

export default CatalogBtn;