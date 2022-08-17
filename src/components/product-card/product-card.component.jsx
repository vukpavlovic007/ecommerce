import {ProductCardContainer, Footer} from './product-card.styles'
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import { addItemToCart } from '../../store/cart/cart.action';
import {useSelector} from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector';
import {useDispatch} from 'react-redux'

const ProductCard = ({product}) => {
  const { name, imageUrl, price} = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch()
  const addProductToCard = () => dispatch(addItemToCart(cartItems, product))

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