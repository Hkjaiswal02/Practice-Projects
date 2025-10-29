import { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
function RoleDice({ currentDice, setScore, RollDice }) {
  const [showRule, setshowRule] = useState(false);
  const [hidetxt, sethidetxt] = useState("Show Rules");

  return (
    <DiceContainer>
      <div className="dice">
        <img
          src={`/Image/dice/dice_${currentDice}.png`}
          alt=""
          onClick={RollDice}
        />
      </div>
      <p className="rollDice">Click on Dice to roll</p>
      <div className="button">
        <Button
          text="Reset Score"
          isOutline={true}
          onClick={() => setScore(0)}
        />
        <Button
          text={hidetxt}
          onClick={() => {
            sethidetxt((prev) =>
              prev === "Show Rules" ? "Hide Rules" : "Show Rules"
            );
            setshowRule((prev) => !prev);
          }}
        />
      </div>
      {showRule && (
        <div className="rules">
          <h3>How to Play Dice Game</h3>
          <div>
            <p>Select any number </p>
            <p>Click on dice image</p>
            <p>
              after click on dice if selected number is equal to dice number you
              will get same point as dice{" "}
            </p>
            <p>if you get wrong guess then 2 point will be dedcuted </p>
          </div>
        </div>
      )}
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

  .rollDice {
    font-size: 24px;
    font-weight: 500;
  }
  .rules {
    background-color: #fbf1f1;
    width: 794px;
    height: 208px;
    margin: 64px 0;
    padding: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .rules div {
    line-height: 30px;
    font-weight: 500;
  }
`;
