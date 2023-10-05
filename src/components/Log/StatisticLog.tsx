import styled from "styled-components";

import { Container, Header, Title } from "./Log.Styles";
import MyResponsiveBar from "./Chart";

const Content = styled.div`
  padding: 0 16px 16px 16px;
  width: 100%;
  height: 280px;
  /* display: flex; */
  /* flex-direction: column; */
  /* box-sizing: border-box; */
`;

const StatisticLog = () => {
  return (
    <Container>
      <Header>
        <Title>통계 정보</Title>
      </Header>
      <Content>
        <MyResponsiveBar />
      </Content>
    </Container>
  );
};

export default StatisticLog;
