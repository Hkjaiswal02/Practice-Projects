import { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
function RoleDice() {
  const [currentDice, setCurrentDice] = useState(1);
  const RollDice = () => {
    const random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
    setCurrentDice(random);
  };
  return (
    <DiceContainer>
      <div className="dice">
        <img
          src={`/Image/dice/dice_${currentDice}.png`}
          alt=""
          onClick={RollDice}
        />
      </div>
      <p>Click on Dice to roll</p>
      <div className="button">
        <Button text="Reset Score" isOutline={true} />
        <Button text="Show Rules" />
      </div>
    </DiceContainer>
  );
}

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .button {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
