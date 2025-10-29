import styled from "styled-components";
function TotalScore({ score }) {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
}

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 135px;
  h1 {
    text-align: center;
    font-size: clamp(60px, 15vw, 100px);
    line-height: 1;
  }
  p {
    font-size: clamp(16px, 4vw, 24px);
    font-weight: 500;
    text-align: center;
  }
`;
