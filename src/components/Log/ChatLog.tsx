import React from "react";
import { Content } from "./ChatLog.styles";
import { Container, Header, Title } from "./Log.Styles";
import styled from "styled-components";

const ChatLog = () => {
  const chats = [
    {
      id: 3,
      content: "바다가 녹색으로 변했어, 무슨 일이야?",
      timestamp: "2023.10.05 오후 11:45:10",
      incoherent: true,
    },
    {
      id: 4,
      content: "내일 친구와 영화를 보기로 했어.",
      timestamp: "2023.10.05 오후 11:46:15",
      incoherent: false,
    },
    {
      id: 5,
      content: "손가락이 새처럼 날아다닌다!",
      timestamp: "2023.10.05 오후 11:47:05",
      incoherent: true,
    },
    {
      id: 6,
      content: "공원에서 피크닉하면 좋겠다.",
      timestamp: "2023.10.05 오후 11:48:21",
      incoherent: false,
    },
    {
      id: 7,
      content: "시계가 뒤로 걷고 있다. 시간이 뒤로 간다!",
      timestamp: "2023.10.05 오후 11:49:42",
      incoherent: true,
    },
    {
      id: 8,
      content: "커피 한잔 어때?",
      timestamp: "2023.10.05 오후 11:50:30",
      incoherent: false,
    },
    {
      id: 9,
      content: "나비와 대화를 했어, 그녀는 나에게 비밀을 알려줬어.",
      timestamp: "2023.10.05 오후 11:51:18",
      incoherent: true,
    },
    {
      id: 10,
      content: "지금은 점심 시간이야.",
      timestamp: "2023.10.05 오후 11:52:40",
      incoherent: false,
    },
    {
      id: 11,
      content: "문이 혼자서 웃고 있어, 왜 그럴까?",
      timestamp: "2023.10.05 오후 11:53:35",
      incoherent: true,
    },
    {
      id: 12,
      content: "책 읽는 것을 좋아해.",
      timestamp: "2023.10.05 오후 11:54:25",
      incoherent: false,
    },
  ];

  return (
    <Container>
      <Header>
        <Title>발화 기록</Title>
      </Header>
      <Content>
        {chats.map((chat) => {
          return (
            <ChatBox key={chat.id}>
              {chat.incoherent ? (
                <IncoherentChat>{chat.content}</IncoherentChat>
              ) : (
                <NormalChat>{chat.content}</NormalChat>
              )}
              <Timestamp>{chat.timestamp}</Timestamp>
            </ChatBox>
          );
        })}
      </Content>
    </Container>
  );
};

const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;
  padding: 10px;
  background: #fff;
  border-radius: 1.125rem 1.125rem 1.125rem 0;
  width: max-content;
  box-shadow: 0 0 2rem rgba(black, 0.075), 0rem 1rem 1rem -1rem rgba(black, 0.1);
`;

const Timestamp = styled.span`
  font-weight: 200;
  font-size: 12px;
  color: #8d8d8d;
`;

const NormalChat = styled.div`
  font-weight: 400;
  font-size: 14px;
`;

const IncoherentChat = styled(NormalChat)`
  color: #cf5151;
`;

export default ChatLog;
