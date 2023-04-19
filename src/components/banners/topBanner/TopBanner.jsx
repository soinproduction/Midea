import styles from "./topBanner.module.scss"
import Container from "../../container/Container";
import logo from "../../../assets/images/bannerLogo.png"
import image from "../../../assets/images/topBannerImage.png"

const TopBanner = () => {
    return(
        <section>
            <Container>
                <div className={styles.banner}>
                    <div className={styles.content}>
                        <div className={styles.logo}>
                            <img src={logo} alt="logo"/>
                        </div>
                        <h2 className={styles.title}>
                            Страница официального представителя Midea в Узбекистане
                        </h2>
                        <p className={styles.subtitle}>
                            По всем вопросам обращайтесь к нашим специалистам
                        </p>
                    </div>

                    <div className={styles.image}>
                        <img src={image} alt="image"/>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default TopBanner;