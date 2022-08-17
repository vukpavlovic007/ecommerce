import {CheckoutItemContainer, ImageContainer, RemoveButton} from "./checkout-item.styles";
import { clearItemFromCart, addItemToCart, removeItemFromCart } from "../../store/cart/cart.action";
import { useSelector } from 'react-redux'
import { selectCartItems } from "../../store/cart/cart.selector";
import { useDispatch } from 'react-redux'

const CheckoutItem = ({ cartItem }) => {
  const {name, imageUrl, price, quantity} = cartItem;
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()

  const clearItemHandler = () => {
    dispatch(clearItemFromCart(cartItems, cartItem))
  }

  const removeItemHandler = () => {
    dispatch(removeItemFromCart(cartItems, cartItem));
  }

  const addItemHandler = () => {
    dispatch(addItemToCart(cartItems, cartItem))
  }

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <span className="name">{name}</span>
      <span className="quantity">
      <div className="arrow" onClick={removeItemHandler}>
        &#10094;
      </div>
      <span className="value">{quantity}</span>
      <div className="arrow" onClick={addItemHandler}>
        &#10095;
      </div>
      </span>
      <span className="price">{price}</span>
      <RemoveButton onClick={clearItemHandler} as="div">&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
