import { Container, Navigation, Content, Options, Profile, Logout, HeaderLink, LinkContainer } from "./styles";
import { ShoppingCart, User, UserCircle } from '@phosphor-icons/react'


export function Header() {
    return (
    <Container>
      <Content>
        <Navigation>
            <div>
              <HeaderLink>
                Home
              </HeaderLink>
              <hr></hr>
              <HeaderLink>
                Cardápio
              </HeaderLink>
            </div>
        </Navigation>  
        <Options>
              <Profile>
                <UserCircle size={32} color="#333" weight="fill" />
                 <div>
                    <p>Olá, <span>Cliente</span> </p>
                    <Logout>Sair</Logout>
                 </div>
              </Profile>
               <LinkContainer>  
        <ShoppingCart size={32} color="#333" weight="fill" />
        <HeaderLink>Carrinho</HeaderLink>
        </LinkContainer>

        </Options>  
       
      </Content>
    </Container>
    );
}

