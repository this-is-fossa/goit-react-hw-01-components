import styled from '@emotion/styled';

export const Board = styled.section`
  margin-right: auto;
  margin-left: auto;
  width: 400px;
  border-radius: 5px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h2`
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: calc(100% / 5);
  padding-top: 10px;
  padding-bottom: 10px;
  color: #ffffff;
  background-color: ${props => props.bgc};
`;

export const Label = styled.span`
  margin-bottom: 10px;
`;

export const Percentage = styled.span`
  font-size: 20px;
`;
