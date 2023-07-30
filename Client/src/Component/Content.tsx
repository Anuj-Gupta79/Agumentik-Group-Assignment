import React from "react";
import styled from "styled-components";

const SectionWrapper = styled.section`
  padding: 60px 0;
  background-color: #ffebeb;
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
  background-color: #fff;
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

const CardImage = styled.img`
  width: 100%;
  height: 200px; /* Set the desired height for the image */
  object-fit: cover;
  cursor: pointer;
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
            <CardImage src="https://cdn.britannica.com/22/922-050-6D3067E8/Guild-houses-Lys-River-Belgium-Ghent.jpg" />
            <CardTitle>Belgium</CardTitle>
            <CardDescription>
              Belgium, a country in Western Europe, is known for medieval towns,
              Renaissance architecture and as headquarters of the European Union
              and NATO.
            </CardDescription>
          </Card>
          <Card>
            <CardImage src="https://i.natgeofe.com/k/e800ca90-2b5b-4dad-b4d7-b67a48c96c91/spain-madrid_16x9.jpg?w=1200" />
            <CardTitle>Spain</CardTitle>
            <CardDescription>
              Spain, a country on Europe’s Iberian Peninsula, includes 17
              autonomous regions with diverse geography and cultures. Capital
              city Madrid is home to the Royal Palace and Prado museum, housing
              works by European masters.
            </CardDescription>
          </Card>
          <Card>
            <CardImage src="https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg" />
            <CardTitle>Dehli</CardTitle>
            <CardDescription>
              Delhi, India’s capital territory, is a massive metropolitan area
              in the country’s north. In Old Delhi, a neighborhood dating to the
              1600s, stands the imposing Mughal-era Red Fort
            </CardDescription>
          </Card>
          <Card>
            <CardImage src="https://i.natgeofe.com/n/6c02ad5a-977b-4f12-b9c0-02ffb0736e07/metropolitan-cathedral-zocalo-mexico-city_16x9.JPG" />
            <CardTitle>Mexico</CardTitle>
            <CardDescription>
              Mexico, officially the United Mexican States, is a country in the
              southern portion of North America. It is bordered to the north by
              the United States; to the south and west by the Pacific Ocean; to
              the southeast by Guatemala, Belize, and the Caribbean Sea;
            </CardDescription>
          </Card>
        </CardWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Content;
