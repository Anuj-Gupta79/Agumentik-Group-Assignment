import React from "react";
import styled from "styled-components";

const SectionWrapper = styled.section`
  padding: 60px 0;
  background-color: #f8f8f8;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0px auto;
  padding: 0 20px;
`;

const SectionHeading = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SectionContent = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Card = styled.div`
  flex: 1;
  max-width: 300px;
  background-color: #black;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
`;

const CardTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #555;
`;

const Content = () => {
  return (
    <SectionWrapper>
      <Container>
        <SectionHeading>Win At Property Management System</SectionHeading>
        <SectionContent>
          Streamline day-to-day tasks, increase operational efficiency and
          achieve your business goals.
        </SectionContent>
        <CardWrapper>
          <Card>
            <CardTitle>Belgium</CardTitle>
            <CardDescription>
              Belgium, a country in Western Europe, is known for medieval towns,
              Renaissance architecture and as headquarters of the European Union
              and NATO.
            </CardDescription>
          </Card>
          <Card>
            <CardTitle>Location 2</CardTitle>
            <CardDescription>
              This is the description of card 2.
            </CardDescription>
          </Card>
        </CardWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Content;
