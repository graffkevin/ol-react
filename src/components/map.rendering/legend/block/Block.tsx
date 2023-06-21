import { ItemLegend } from '../items/Items';
import { BlockContainer } from './style';

interface BlockProps {
  layerName: string;
  itemArrayProperties: any[];
  legendVisibility: boolean;
}

export const Block = ({ layerName, itemArrayProperties, legendVisibility }: BlockProps) => {
  if (!legendVisibility) return null;
  return (
    <BlockContainer>
      <p>{layerName}</p>
      {itemArrayProperties.map((value: any) => {
        return <ItemLegend key={value.title} color={value.color} title={value.title} />;
      })}
    </BlockContainer>
  );
};
