import PropTypes from 'prop-types';
import { Table, TableHead, HeadCaption, Caption, TableBody, BodyLine, TableData } from './TransactionHistory.styled';


export const TransactionHistory = ({ items }) => {
  return (<Table>
    <TableHead>
    <HeadCaption>
      <Caption>Type</Caption>
      <Caption>Amount</Caption>
      <Caption>Currency</Caption>
    </HeadCaption>
    </TableHead>

    <TableBody>
      {items.map(({ id, type, amount, currency }) => {
        return (<BodyLine key={id}>
          <TableData>{type}</TableData>
          <TableData>{amount}</TableData>
          <TableData>{currency}</TableData>
        </BodyLine>)
      })}
    </TableBody>
  </Table>)
}

TransactionHistory.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact( {
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }, ),
  ),
};
