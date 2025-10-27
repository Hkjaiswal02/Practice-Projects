import RoleDice from "../RoleDice/RoleDice";
import SelectButton from "../SelectButton/SelectButton";
import TotalScore from "../TotalScore/TotalScore";
import styled from "styled-components";
function Gamepage() {
  return (
    <Box>
      <div className="top_section">
        <TotalScore />
        <SelectButton />
      </div>
      <RoleDice />
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
