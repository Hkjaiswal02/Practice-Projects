import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResult";
export const BASE_URL = "http://localhost:9000";
import "./App.css";
import Foodmessage from "./components/Foodmessage";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { FaShoppingCart } from "react-icons/fa";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterdData, setFilteredData] = useState(null);
  const [selectedBtn, setSelecteBtn] = useState("all");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setLoading(false);
        setData(json);
        setFilteredData(json);
        console.log(data);
      } catch (error) {
        setError("Something Went Wrong....");
        setLoading(false);
      }
    };
    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const searchvalue = e.target.value;
    console.log(searchvalue);
    if (searchvalue == "") {
      setFilteredData(null);
    }
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchvalue.toLowerCase())
    );
    setFilteredData(filter);
  };

  const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setSelecteBtn("all");
      return;
    }
    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSelecteBtn(type);
  };
  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];
  if (error) {
    return <div> {error}</div>;
  }
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/Image/logo1.png" alt="logo" />
          </div>

          <RightSide>
            <div className="search">
              <input
                type="text"
                placeholder="Search food..."
                onChange={searchFood}
              />
            </div>
            <FaShoppingCart />
            {cart.length > 0 && <span>{cart.length}</span>}
          </RightSide>
        </TopContainer>
        <FilterContainer>
          {filterBtns.map((value) => (
            <Button
              key={value.name}
              active={selectedBtn === value.type}
              onClick={() => filterFood(value.type)}
            >
              {value.name}
            </Button>
          ))}
        </FilterContainer>
        <Foodmessage />
        <SearchResult data={filterdData} setCart={setCart} />
      </Container>
      <Footer />
    </>
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
    color: wheat;
    border: none;
    height: 40px;
    width: 300px;
    padding: 15px 25px;
    font-size: 16px;
    border-radius: 18px;
  }
  @media (max-width: 768px) {
    .search input {
      width: 250px;
    }
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
  border: 1px solid ${(props) => (props.active ? "#ea1d1d" : "transparent")};
  height: 40px;
  padding: 6px 14px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    border: 1px solid #ea1d1d;
    color: #ea1d1d;
  }
`;

const RightSide = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 25px;
  color: white;
  cursor: pointer;

  span {
    position: absolute;
    top: -8px;
    right: -10px;
    background-color: #ea1d1d;
    color: white;
    font-size: 11px;
    padding: 1px 6px;
    border-radius: 50%;
  }
`;
