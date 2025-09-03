import { Banner, Container, Content } from "./styles";
import {CategoriesCarousel} from "../../components/CategoryCarousel/index.jsx";
import { OffersCarousel } from "../../components/OffersCarousel/index.jsx";


export function Home(){
    
    return (
        <main>
        <Banner>
            <h1>Seja Bem-vindo(a)!</h1>
        </Banner>
        <Container>
            <Content>
                <CategoriesCarousel />
                <OffersCarousel/>
            </Content>
        </Container>
        </main>
    );
}