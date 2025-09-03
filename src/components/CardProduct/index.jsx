import PropTypes from 'prop-types';
import { Container, CardImage } from './styles';
import { CardButton } from '../CardButton';
import { formatPrice } from '../../utils/formatPrice';

export function CardProduct({ product }) {
     
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
            <CardButton></CardButton>
        </Container>
    );
}

CardProduct.propTypes = {
    product: PropTypes.object};