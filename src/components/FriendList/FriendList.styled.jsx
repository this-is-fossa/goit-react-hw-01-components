import styled from '@emotion/styled';

export const List = styled.ul`
  padding-top: 50px;
  padding-bottom: 50px;
  width: 300px;
  margin-right: auto;
  margin-left: auto;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.25);

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${ props => props.status ? "green" : "red" };
`;

export const Avatar = styled.img`
  margin-left: 15px;
  width: 48px;
`;

export const Name = styled.p`
  margin-left: 15px;
  font-weight: bold;
  font-size: 20px;
`;

