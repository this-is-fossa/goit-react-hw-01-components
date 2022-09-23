import styled from '@emotion/styled';

export const Table = styled.table`
  width: 700px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;
  text-align: center;
  border-collapse: collapse;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.25);
`;

export const TableHead = styled.thead`
  color: #ffffff;
  background-color: #13dcdc;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const HeadCaption = styled.tr`

`;

export const Caption = styled.th`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const TableBody = styled.tbody``;

export const BodyLine = styled.tr`
  &:nth-of-type(2n+1) {
    background-color: #e8e2e2;
  }
`;

export const TableData = styled.td`
  padding-top: 10px;
  padding-bottom: 10px;
  text-transform: capitalize;
  border: 1px solid grey;
`;

