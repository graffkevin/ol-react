import { ItemsContainer, Label, Rectangle } from './style';

interface itemsLgendProps {
  color: string;
  title: string;
}

export const ItemLegend = ({ color, title }: itemsLgendProps) => {
  return (
    <ItemsContainer>
      <Rectangle color={color} />
      <Label>{title}</Label>
    </ItemsContainer>
  );
};
