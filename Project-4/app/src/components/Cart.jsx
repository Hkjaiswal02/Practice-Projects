import styled from "styled-components";

const Cart = ({ cart, setCart }) => {
  const removeItem = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <CartContainer>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <EmptyCart>Your cart is empty.</EmptyCart>
      ) : (
        <>
          {cart.map((item, index) => (
            <CartItem key={index}>
              <img src={`.${item.image}`} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>₹{item.price.toFixed(2)}</p>
              </div>
              <button onClick={() => removeItem(index)}>Remove</button>
            </CartItem>
          ))}
          <Total>
            <h3>Grand Total: ₹{total.toFixed(2)}</h3>
            <OrderButton>Place Order</OrderButton>
          </Total>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;

const CartContainer = styled.div`
  position: fixed;
  right: 20px;
  top: 100px;
  width: 350px;
  background-color: #121212;
  color: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  z-index: 1000;
  max-height: 80vh;
  overflow-y: auto;
`;
const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1e1e1e;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    object-fit: cover;
  }

  h4 {
    margin: 0;
  }

  button {
    background-color: #ea1d1d;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 6px;
    cursor: pointer;
  }

  button:hover {
    background-color: #ff3b3b;
  }
`;
const EmptyCart = styled.p`
  text-align: center;
  color: #ccc;
`;
const Total = styled.div`
  margin-top: 15px;
  text-align: center;
  h3 {
    margin-bottom: 10px;
  }
`;
const OrderButton = styled.button`
  background-color: #ea1d1d;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #ff3b3b;
  }
`;
