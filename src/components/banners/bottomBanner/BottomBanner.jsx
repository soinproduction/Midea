import styles from "./bottomBanner.module.scss"
import Container from "../../container/Container";
import image from "../../../assets/images/bottomBannerImage.png"

const BottomBanner = () => {
    return(
        <section>
            <Container>
                <div className={styles.banner}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>
                            Страница официального представителя <br/> Midea в Узбекистане
                        </h2>
                        <p className={styles.subtitle}>
                            Страница официального представителя Midea в Узбекистане
                            По всем вопросам обращайтесь к нашим специалистам
                        </p>

                        <a className={styles.link} href="tel:+998712000548">+998 71 200 0548</a>
                    </div>

                    <div className={styles.image}>
                        <img src={image} alt="image"/>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default BottomBanner;