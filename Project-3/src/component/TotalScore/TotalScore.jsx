import styled from "styled-components";
function TotalScore() {
  return (
    <ScoreContainer>
      <h1>0</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
}

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 135px;
  h1 {
    text-align: center;
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
