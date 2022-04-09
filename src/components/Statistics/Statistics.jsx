import PropTypes from 'prop-types';
import { Board, Title, List, Item, Label, Percentage } from 'components/Statistics/Statistics.styled';
import { randomColor } from 'utils/utils'


export const Statistics = ({ stats, title }) => {

  return <Board>
    {title && <Title>{title}</Title>}

    <List>
      {stats.map(({ id, label, percentage }) => {
        const color = randomColor();

        return (<Item key={id} bgc={color}>
          <Label>{label}</Label>
          <Percentage>{percentage}%</Percentage>
        </Item>)
      })}
    </List>
  </Board>
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact( {
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }, ),
  ),
};
