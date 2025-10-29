import styled from "styled-components";

function SelectButton({ error, seterror, selectedNumber, setSelectedNumber }) {
  const selectNo = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <NumberSelectorContainer>
        {error && <p className="errormsg">You have not selected any number</p>}
        <div className="flex">
          {selectNo.map((val, i) => (
            <Button
              $isSelected={val === selectedNumber}
              key={i}
              onClick={() => {
                seterror(false), setSelectedNumber(val);
              }}
            >
              {val}
            </Button>
          ))}
        </div>
        <p>Select Number</p>
      </NumberSelectorContainer>
    </>
  );
}

export default SelectButton;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }

  p {
    font-size: clamp(16px, 4vw, 24px);
    font-weight: 600;
    text-align: center;
  }

  .errormsg {
    color: red;
    font-size: clamp(14px, 3vw, 20px);
    font-weight: 400;
    text-align: center;
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Button = styled.button`
  height: 64px;
  width: 64px;
  background-color: ${({ $isSelected }) => ($isSelected ? "black" : "white")};
  color: ${({ $isSelected }) => (!$isSelected ? "black" : "white")};
  border: 1px solid black;
  font-weight: 800;
  font-size: 20px;
  border-radius: 8px;

  @media (max-width: 480px) {
    height: 50px;
    width: 50px;
    font-size: 16px;
  }
`;
