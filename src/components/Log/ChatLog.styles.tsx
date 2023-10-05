import styled from "styled-components";

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 10px;
  overflow-y: scroll;
  box-sizing: border-box;
`;

export const SentChat = styled.div`
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  background: #fff;
  border-radius: 1.125rem 1.125rem 1.125rem 0;
  min-height: 2.25rem;
  width: fit-content;
  max-width: 66%;

  box-shadow: 0 0 2rem rgba(black, 0.075), 0rem 1rem 1rem -1rem rgba(black, 0.1);
`;

export const ReceivedChat = styled(SentChat)`
  margin: 0 0 0 auto;
  border-radius: 1.125rem 1.125rem 0 1.125rem;
  background: #333;
  color: white;
`;
