import { useState } from "react";
import RoleDice from "../RoleDice/RoleDice";
import SelectButton from "../SelectButton/SelectButton";
import TotalScore from "../TotalScore/TotalScore";
import styled from "styled-components";
function Gamepage() {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, seterror] = useState(false);
  const RollDice = () => {
    if (!selectedNumber) {
      seterror(true);
      return;
    }
    const random = Math.floor(Math.random() * 6) + 1;
    setCurrentDice(random);
    winchecker(random);
    setSelectedNumber(undefined);
  };
  function winchecker(random) {
    if (random == selectedNumber) {
      setScore((prev) => prev + random);
    } else {
      setScore((prev) => prev - 2);
    }
  }
  return (
    <Box>
      <div className="top_section">
        <TotalScore score={score} />
        <SelectButton
          seterror={seterror}
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice
        RollDice={RollDice}
        setScore={setScore}
        currentDice={currentDice}
      />
    </Box>
  );
}

export default Gamepage;

const Box = styled.main`
  padding-top: 72px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
`;
