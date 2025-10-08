import { Container, Banner, Title, Content } from "./styles";
import Logo from "../../assets/logo2.svg";
import { CartItems } from "../../components/CartItems";


export function Cart() {
    return (
        <Container>
            <Banner>
                <img src={Logo} alt="logo hamburgueria" />
            </Banner>
            <Title>Checkout-Pedido</Title>
            <Content>
                <CartItems />
            </Content>
        </Container>
    )
}
