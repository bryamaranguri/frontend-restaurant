import React, { useState } from "react";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import ReservationForm from "../../components/Reserva/ReservationSection";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <ExploreMenu setCategory={setCategory} category={category} />
      <FoodDisplay category={category} />
      <ReservationForm category={category} />
      <AppDownload />
    </>
  );
};

export default Home;
