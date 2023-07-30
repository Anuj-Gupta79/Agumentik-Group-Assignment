import React from "react";
import styled from "styled-components";
import SideBar from "../Component/SideBar";

const DashboardWrapper = styled.div`
  display: flex;
`;

const Contents = styled.div`
  flex: 2;
`;

const AdminDashboard = () => {
  return (
    <DashboardWrapper>
      <SideBar/>
      <Contents>
        <h2>Welcome to Admin!</h2>
      </Contents>
    </DashboardWrapper>
  );
};

export default AdminDashboard;
