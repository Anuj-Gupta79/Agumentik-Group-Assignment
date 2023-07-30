import React from 'react'

import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const SideView = styled.div`
  border-radius: 2px black;
  background-color: #1d4e52;
  padding: 15px;
  height: 95.9vh;
`;


const SideBarHeading = styled.h5`
  color: #fff;
  font-size: 20px;
  font-weight: 900;
  margin: 6px;
  padding: 10px;
`;

const SideBarItem = styled.h6`
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  margin: 6px;
  padding: 10px;
  cursor: pointer;
`;

const SideBar = () => {
    const navigate = useNavigate();
  return (
    <SideView>
        <SideBarHeading>Admin Dashboard</SideBarHeading>
        <SideBarItem onClick={()=>{navigate('/editHeroPage')}}>Hero Page Details</SideBarItem>
        <SideBarItem onClick={()=>{navigate('/editDetails')}}>User Details</SideBarItem>
        <SideBarItem onClick={()=>{navigate('/editContent')}}>Content Details</SideBarItem>
    </SideView>
  )
}

export default SideBar