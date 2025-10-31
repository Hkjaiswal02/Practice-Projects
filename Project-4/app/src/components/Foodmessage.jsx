import styled from "styled-components";
function Foodmessage() {
  return (
    <Foodmsg>
      <h1>Discover Your next favorite meal</h1>
      <p>quick,fresh, and delicious</p>
    </Foodmsg>
  );
}

export default Foodmessage;

const Foodmsg = styled.div`
  margin-top: 30px;
  padding-left: 16px;
  h1 {
    font-size: 45px;
  }
  p {
    line-height: 0px;
    font-size: 14px;
    color: #828282;
  }
`;
