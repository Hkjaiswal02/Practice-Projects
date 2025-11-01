import styled from "styled-components";
import { BASE_URL } from "../App";
function SearchResult({ data, setCart }) {
  const Handleclick = (food) => {
    setCart((prev) => [...prev, food]);
    console.log(food);
  };
  return (
    <FoodCards>
      {data?.map((food) => (
        <FoodCard key={food.name}>
          <div className="food_image">
            <img src={BASE_URL + food.image} alt="" />
          </div>
          <div className="food_info">
            <div className="info">
              <h3>{food.name}</h3>
              <p>{food.text}</p>
            </div>
            <Button
              onClick={(e) => {
                Handleclick(food);
              }}
            >
              ${food.price.toFixed(2)}
            </Button>
          </div>
        </FoodCard>
      ))}
    </FoodCards>
  );
}

export default SearchResult;

const FoodCards = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 22px;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;
const FoodCard = styled.div`
  width: 380px;
  height: 190px;

  border: 0.66px solid;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;

  display: flex;
  padding: 15px;

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      margin-top: 4px;
      margin-bottom: 8px;
      font-size: 12px;
    }
    button {
      font-size: 12px;
    }
  }
`;
const Button = styled.button`
  background-color: #ff3b30;
  color: white;
  border: 1px solid transparent;
  height: 40px;
  padding: 5px 10px;
  font-size: 16px;
  border-radius: 8px;
`;
