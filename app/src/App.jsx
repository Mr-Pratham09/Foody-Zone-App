import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {

  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [searchBtn, setSearchBtn] = useState("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const foodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        // console.log(json);
        setData(json);
        setFilteredData(json);
        setLoading(false);

      } catch (error) {
        setError("Unable to fetch data");
      }

    }
    foodData();
  }, []);
  console.log(data);

  const searchFood = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);

    if (searchValue == "") {
      setFilteredData(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase()));

    setFilteredData(filter);
  }

  const filterFood = (type) => {
    if (type == "all") {
      setFilteredData(data);
      setSearchBtn("all");
      return;
    }
    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase()));
    setFilteredData(filter);
    setSearchBtn(type);

  }

  const filterBtns = [
    {
      name: "All",
      type: "all"
    },
    {
      name: "Breakfast",
      type: "breakfast"
    },
    {
      name: "Lunch",
      type: "lunch"
    },
    {
      name: "Dinner",
      type: "dinner"
    },
  ];


  if (error) return <div>{error}</div>
  if (loading) return <div>Loading...</div>


  return (
    <MainContainrer>
      <TopContainer>
        <NavItems>
          <img src="../public/Foody Zone.svg" alt="logo" />
          <input onChange={searchFood} type="text" placeholder="Search Food...." />
        </NavItems>
      </TopContainer>
      <FilterContainer>
        {filterBtns.map((value) => (
          <Button isSelected={searchBtn == value.type} key={value.name} onClick={() => filterFood(value.type)}>
            {value.name}
          </Button>
        ))}


        {/* <Button onClick={() => filterFood("all")}>All</Button>
        <Button onClick={() => filterFood("breakfast")}>Breakfast</Button>
        <Button onClick={() => filterFood("lunch")}>Lunch</Button>
        <Button onClick={() => filterFood("dinner")}>Dinner</Button> */}
      </FilterContainer>
      <SearchResult data={filteredData} />
    </MainContainrer>
  );
};

const MainContainrer = styled.main`
    min-height: 580px;
    /* border: 2px solid red; */
    `

const TopContainer = styled.nav`
    /* border: 2px solid red; */
    min-height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
  
`

const NavItems = styled.div`
      /* border: 2px solid red; */
      width: 80%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      input {
        background: transparent;
        border: none;
        border: 1px solid red;
        border-radius: 5px;
        padding: 8px;
        color: white;
        width: 20%;
        outline: none;

        &::placeholder{
          color: white;
        }
      }

      @media (0 < width < 875px) {
        flex-direction: column;
        gap: 20px;
        padding: 20px 0;
      }
      
`

const FilterContainer = styled.div`
    /* border: 2px solid red; */
    display: flex;
    justify-content: center;
    gap: 20px;
    padding-bottom: 20px;
`

export const Button = styled.button`
    border: none;
    background: ${({ isSelected }) => (isSelected ? "#f22f2f" : "#FF4343")};
    outline: 1px solid ${({ isSelected }) => (isSelected ? "white" : "#FF4343")};
    padding: 8px 15px;
    color: white;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
`

export default App;