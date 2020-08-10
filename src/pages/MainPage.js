import React from "react";
// import Modal from "../components/Modal/Modal";
// import RatingStar from "../components/RatingStar/RatingStar";
import HeaderContainer from "../containers/HeaderContainer";
import CardListContainer from "../containers/CardListContainer";

const MainPage = () => {
  return (
    <>
      <HeaderContainer hasBackButton={false} hasShareButton={false} hasMapButton={true} hasLocalText={true} hasLocationButton={true} />
      <CardListContainer />
      {/* <RatingStar starCount={5} rating={1} starSize={30} isStarHalf={true} />
      <RatingStar starCount={1} isStarEditable={false} starSize={15} attendantCount={30} />
      <RatingStar starCount={1} isStarEditable={false} starSize={15} />
      <Modal /> */}
    </>
  );
};

export default MainPage;
