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
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 600;
  }
  .errormsg {
    color: red;
    font-size: 24px;
    font-weight: 400;
  }
`;

const Button = styled.button`
  height: 72px;
  width: 72px;
  background-color: ${({ $isSelected }) => ($isSelected ? "black" : "white")};
  color: ${({ $isSelected }) => (!$isSelected ? "black" : "white")};
  border: 1px solid black;
  font-weight: 800;
  font-size: 24px;
`;
