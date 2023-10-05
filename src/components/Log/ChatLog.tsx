import React from "react";
import { Content, ReceivedChat, SentChat } from "./ChatLog.styles";
import { Container, Header, Title } from "./Log.Styles";

const ChatLog = () => {
  const chats = [
    {
      id: 1,
      role: "user",
      content: "등이 아플때 어떻게 해",
    },
    {
      id: 2,
      role: "assistant",
      content: "알아서 하소",
    },
    {
      id: 3,
      role: "assistant",
      content: "알아서 하소",
    },
    {
      id: 4,
      role: "assistant",
      content: "알아서 하소",
    },
    {
      id: 5,
      role: "assistant",
      content: "알아서 하소",
    },
    {
      id: 6,
      role: "assistant",
      content: "알아서 하소",
    },
    {
      id: 7,
      role: "user",
      content: "그래....",
    },
    {
      id: 8,
      role: "assistant",
      content: "알아서 하소",
    },
  ];

  return (
    <Container>
      <Header>
        <Title>발화 기록</Title>
      </Header>
      <Content>
        {chats.map((chat) => {
          if (chat.role === "user") {
            return <ReceivedChat key={chat.id}> {chat.content}</ReceivedChat>;
          }
          return <SentChat key={chat.id}>{chat.content}</SentChat>;
        })}
      </Content>
    </Container>
  );
};

export default ChatLog;
