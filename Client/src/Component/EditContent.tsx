import React from "react";
import SideBar from "./SideBar";
import styled from "styled-components";

const DashboardWrapper = styled.div`
  display: flex;
`;

const Contents = styled.div`
  flex: 2;
`;

const EditContent = () => {
  return (
    <DashboardWrapper>
      <SideBar />
      <Contents>
        <h2>Content Details!</h2>
      </Contents>
    </DashboardWrapper>
  );
};

export default EditContent;
