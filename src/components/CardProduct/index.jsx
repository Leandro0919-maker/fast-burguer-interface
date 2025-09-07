import PropTypes from 'prop-types';
import { Container, CardImage } from './styles';
import { CartButton } from '../CartButton';
import { useCart } from '../../hooks/CartContext';

export function CardProduct({ product }) {

    const { putProductInCart } = useCart();
     
    if (!product) {
        return null; 
    }
      
    return (
        <Container>
            <CardImage src={product.url} alt={product.name} />
            <div>
                <p>{product.name}</p>
                <strong>{product.currencyValue}</strong>
                
            </div>
            <CartButton onClick= {() => putProductInCart(product)} ></CartButton>
        </Container>
    );
}

CardProduct.propTypes = {
    product: PropTypes.object};