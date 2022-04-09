import styled from '@emotion/styled';

export const Card = styled.div`
  position: relative;
  margin: 50px auto;
  border-radius: 5px;
  width: 300px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.25);
`;

export const UserInfo = styled.div`
  text-align: center;
  padding-top: 30px;
`;

export const Avatar = styled.img`
  width: 100px;
  border: 1px solid #928d8d;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-weight: bold;
`;

export const Tag = styled.p``;

export const Location =styled.p``;

export const List = styled.ul`
  display: flex;
  margin-top: 40px;
  background-color: #f1f1f1;
  border: 1px solid #bebcbc;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const Stats = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 15px;
  padding-bottom: 15px;
  width: calc(100% / 3);

  &:not(:last-child) {
    border-right: 1px solid #bebcbc;
  }
`;

export const Label =styled.span``;

export const Quantity = styled.span`
    margin-top: 8px;
    font-weight: bold;
`;
