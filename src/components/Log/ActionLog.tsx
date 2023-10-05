import React from "react";
import { Container, Header, Title } from "./Log.Styles";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px 16px 16px;
  height: 100%;
`;

const SideContainer = styled.div`
  display: flex;
  height: 100%;
  gap: 12px;
`;

const Side = styled.div`
  width: 50%;
  box-sizing: border-box;
  background-color: #fff;
  height: 244px;
  border-radius: 16px;
  padding: 10px;
  overflow-y: scroll;
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const SideTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 8px;
  color: #6f6f6f;
`;

const PromptBox = styled.div`
  margin-bottom: 10px;
`;

const Prompt = styled.p`
  word-wrap: break-word;
  font-weight: 400;
  font-size: 14px;
`;

const Timestamp = styled.div`
  font-weight: 200;
  font-size: 12px;
  color: #8d8d8d;
  padding-bottom: 6px;
`;

const ActionLog = () => {
  return (
    <Container>
      <Header>
        <Title>행동 기록</Title>
      </Header>
      <Content>
        <TitleContainer>
          <SideTitle>이상행동</SideTitle>
          <SideTitle>정상행동</SideTitle>
        </TitleContainer>
        <SideContainer>
          <Side>
            <PromptBox>
              <Timestamp>오후 11:45:10</Timestamp>
              <Prompt>
                asd as d asa sasdas asasd asas asdasas asda sasas da sasa sd asa
                sasda sasa sda sasa sd asasas dasas asdasas sdasa sasdasasa
                sdasasas dasas
              </Prompt>
            </PromptBox>
            <PromptBox>
              <Timestamp>오후 11:45:10</Timestamp>
              <Prompt>
                asd as d asa sasdas asasd asas asdasas asda sasas da sasa sd asa
                sasda sasa sda sasa sd asasas dasas asdasas sdasa sasdasasa
                sdasasas dasas
              </Prompt>
            </PromptBox>
            <PromptBox>
              <Timestamp>오후 11:45:10</Timestamp>
              <Prompt>
                asd as d asa sasdas asasd asas asdasas asda sasas da sasa sd asa
                sasda sasa sda sasa sd asasas dasas asdasas sdasa sasdasasa
                sdasasas dasas
              </Prompt>
            </PromptBox>
          </Side>
          <Side>
            <PromptBox>
              <Timestamp>오후 11:45:10</Timestamp>
              <Prompt>커피 마심</Prompt>
            </PromptBox>
          </Side>
        </SideContainer>
      </Content>
    </Container>
  );
};

export default ActionLog;
