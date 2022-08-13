import {ProductCardContainer, Footer} from './product-card.styles'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

const ProductCard = ({product}) => {
  const { name, imageUrl, price} = product;
  const {addItemToCart} = useContext(CartContext);
  const addProductToCard = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCard}>Add to cart</Button>
    </ProductCardContainer>
  )
}

export default ProductCard;