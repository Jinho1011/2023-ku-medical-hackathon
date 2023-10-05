import React from "react";
import { Container, Header, Title } from "./Log.Styles";
import styled from "styled-components";

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 12px;
  overflow-y: scroll;
  box-sizing: border-box;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.span`
  color: #898989;
  font-size: 14px;
`;

const Values = styled.div`
  display: flex;
  gap: 10px;
`;

const Value = styled.span`
  color: #3e3e3e;
  font-size: 18px;
`;

const InfoLog = () => {
  return (
    <Container>
      <Header>
        <Title>사용자 정보</Title>
      </Header>
      <Content>
        <Info>
          <Label>이름</Label>
          <Values>
            <Value>전진호</Value>
          </Values>
        </Info>
        <Info>
          <Label>나이</Label>
          <Values>
            <Value>23</Value>
          </Values>
        </Info>
        <Info>
          <Label>질병</Label>
          <Values>
            <Value>게으름</Value>
            <Value>귀찮음</Value>
          </Values>
        </Info>
        <Info>
          <Label>질병</Label>
          <Values>
            <Value>게으름</Value>
            <Value>귀찮음</Value>
          </Values>
        </Info>
      </Content>
    </Container>
  );
};

export default InfoLog;
