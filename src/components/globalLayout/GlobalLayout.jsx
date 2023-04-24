import styles from "./globalLayout.module.scss"
import Container from "../container/Container";
const GlobalLayout = ({children, title}) => {
    return (
        <section>
            <Container>
                 <div className={styles.box}>
                     <h2 className={styles.title}>
                         {title}
                     </h2>
                     {children}
                 </div>
            </Container>
        </section>
    );
};

export default GlobalLayout;