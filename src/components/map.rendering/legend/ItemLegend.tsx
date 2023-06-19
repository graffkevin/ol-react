import * as Styled from './legend.style';

interface itemsLgendProps {
  color: string;
  title: string;
}

export const ItemLegend = ({ color, title }: itemsLgendProps) => {
  const rectangleStyle = {
    width: '40px',
    height: '20px',
    border: '1px solid black',
    backgroundColor: color,
  };
  const textStyle = {
    paddingLeft: '5px',
  };
  return (
    <Styled.ItemBlock>
      <div style={rectangleStyle} />
      <div style={textStyle}>{title}</div>
    </Styled.ItemBlock>
  );
};
