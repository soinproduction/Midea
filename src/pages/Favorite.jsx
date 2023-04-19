import Container from "../components/container/Container";
import BottomBanner from "../components/banners/bottomBanner/BottomBanner";
import {useStore} from "../store/store";

const Favorite = () => {
    const {state} = useStore();

    const products = state.favorite.products

    return(
        <main>
            <Container>
                {products.map((product)=> {
                    return(
                        <div key={product.id}>
                            <img src={product.image} alt=""/>
                        </div>
                    );
                })}
            </Container>

            <BottomBanner/>
        </main>
    );
}

export default Favorite;