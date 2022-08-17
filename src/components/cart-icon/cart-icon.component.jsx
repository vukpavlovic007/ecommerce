import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import {CartIconContainer,
  ShoppingIconStyled,
  ItemCount} from './cart-icon.styles.jsx'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart.selector';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { setIsCartOpen } from '../../store/cart/cart.action';

const CartIcon = () => {
  const cartCount = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen))
  }

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIconStyled as={ShoppingIcon}/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;