import React from "react";
import styled from "styled-components";
import HeroPage from "../Picture/page.webp";

const HeroWrapper = styled.div`
  background-size: cover;
  background-position: center;
  margin: 0px 20px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`;

const HeroContent = styled.div`
  text-align: left;
`;

const HeroTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: black;
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  color: #004d4d;
`;

const HeroButton = styled.button`
  display: inline-block;
  padding: 12px 20px;
  background-color: #009999;
  color: #ffffff;
  text-decoration: none;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
`;

const HeroImage = styled.img`
`;

const HeroBanner: React.FC = () => {
  return (
    <HeroWrapper>
      <HeroContent>
        <HeroTitle>Property Management Simplified</HeroTitle>
        <HeroSubtitle>Resident-centric tools to delight your tenants while driving management efficient</HeroSubtitle>
        <HeroButton>Contact Sales</HeroButton>
      </HeroContent>
      <HeroImage src={HeroPage}></HeroImage>
    </HeroWrapper>
  );
};


export default HeroBanner;
