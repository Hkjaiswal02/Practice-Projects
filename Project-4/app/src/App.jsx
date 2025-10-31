import styled from "styled-components";
const App = () => {
  return (
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/Image/logo1.png" alt="logo" />
        </div>
        <div className="search">
          <input type="text" placeholder="Search food..." />
        </div>
      </TopContainer>
      <FilterContainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterContainer>
      <FoodCardContainer>
        <FoodCard>hello</FoodCard>
      </FoodCardContainer>
    </Container>
  );
};

export default App;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;
const TopContainer = styled.section`
  background-color: #000000;
  max-height: 96px;
  display: flex;
  padding: 40px 16px 16px 16px;
  justify-content: space-between;
  align-items: center;
  .logo img {
    max-height: 38px;
    max-width: 185px;
  }
  .search input {
    background-color: #252525;
    border: none;
    height: 40px;
    width: 300px;
    padding: 15px 25px;
    font-size: 16px;
    border-radius: 18px;
  }
`;

const FilterContainer = styled.section`
  display: flex;
  padding: 20px 0 20px 16px;
  gap: 15px;
`;
const Button = styled.button`
  background-color: #252525;
  color: white;
  border: 1px solid transparent;
  height: 40px;
  padding: 6px 14px;
  border-radius: 8px;
  &:hover {
    border: 1px solid #ea1d1d;
    color: #ea1d1d;
  }
`;

const FoodCardContainer = styled.section`
  padding: 16px;
  height: calc(100vh - 180px);
`;
const FoodCard = styled.div``;
