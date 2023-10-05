import styled from "styled-components";

import { Container, Header, Title } from "./Log.Styles";
import { Content } from "./ChatLog.styles";

const Todo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 12px 16px;
  border-radius: 16px;
`;

const Subject = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const DueDate = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #767676;
`;

const TodoIcon = styled.span`
  font-size: 20px;
`;

const StatisticLog = () => {
  return (
    <Container>
      <Header>
        <Title>통계 정보</Title>
      </Header>
      <Content>
        <Todo>
          <div>
            <Subject>약먹기</Subject>
            <DueDate>2023.10.05 19시 30분</DueDate>
          </div>
          <TodoIcon>✅</TodoIcon>
        </Todo>
        <Todo>
          <div>
            <Subject>약먹기</Subject>
            <DueDate>2023.10.05 19시 30분</DueDate>
          </div>
          <TodoIcon>❎</TodoIcon>
        </Todo>
        <Todo>
          <div>
            <Subject>약먹기</Subject>
            <DueDate>2023.10.05 19시 30분</DueDate>
          </div>
          <TodoIcon>✅</TodoIcon>
        </Todo>
        <Todo>
          <div>
            <Subject>약먹기</Subject>
            <DueDate>2023.10.05 19시 30분</DueDate>
          </div>
          <TodoIcon>✅</TodoIcon>
        </Todo>
      </Content>
    </Container>
  );
};

export default StatisticLog;
