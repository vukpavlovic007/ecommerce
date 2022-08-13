import {CheckoutItemContainer, ImageContainer, RemoveButton} from "./checkout-item.styles";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const {name, imageUrl, price, quantity} = cartItem;
  const {clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext)

  const clearItemHandler = () => {
    return clearItemFromCart(cartItem)
  }

  const removeItemHandler = () => {
    return removeItemFromCart(cartItem);
  }

  const addItemHandler = () => {
    return addItemToCart(cartItem)
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
