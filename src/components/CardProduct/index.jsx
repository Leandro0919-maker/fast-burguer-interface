import PropTypes from 'prop-types';
import { Container, CardImage } from './styles';

export function CardProduct({ product }) {
     if (!product) {
        return null; 
    }
    
    return (
        <Container>
            <CardProduct src={product.url} alt={product.name} />
            <div>
                <p>{product.name}</p>
                <strong>{product.price}</strong>
                
            </div>
        </Container>
    );
}

CardProduct.propTypes = {
    product: PropTypes.object};