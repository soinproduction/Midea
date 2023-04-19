import {NavLink} from "react-router-dom";
import {path} from "../../helpers/path";
import styles from "./header.module.scss"
import logo from "../../assets/images/logo.svg";
import Container from "../container/Container";
import SearchForm from "../searchForm/SearchForm";
import Nav from "../nav/Nav";
import CatalogBtn from "../buttons/CatalogBtn";


const Header = () => {
    return (
        <header>
            <Container>
                <div className={styles.header}>
                    <div className={styles.coll}>
                        <NavLink to={path.home} className='header-logo'>
                            <img width={164} height={48} src={logo} alt='icon'/>
                        </NavLink>
                        <CatalogBtn content="Каталог"/>
                    </div>
                    <SearchForm/>
                    <Nav/>
                </div>
            </Container>
        </header>

    );
}

export default Header;
