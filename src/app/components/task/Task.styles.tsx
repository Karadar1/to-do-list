import styled from "styled-components";

export const ColoredContainer = styled.div<{ color: string }>`
  border: 2px solid ${(props) => props.color};
  padding: 10px;
  margin-bottom: 10px;
`;
