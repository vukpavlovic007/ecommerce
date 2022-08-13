import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import {CartIconContainer,
  ShoppingIconStyled,
  ItemCount} from './cart-icon.styles.jsx'
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
  const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIconStyled as={ShoppingIcon}/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;