import { useSelector } from 'react-redux';

import { LayerGroups } from '../../../libs/interfaces';
import { Block } from '../block/Block';
import { legendModelItem } from './model.item';
import { LegendContainer } from './style';

interface ContainerContentProps {
  layerGroups: LayerGroups;
  legendVisibility: boolean;
}

export const ContainerContent = ({ layerGroups, legendVisibility }: ContainerContentProps) => {
  const layers = Object.values(layerGroups).map((group: any) => {
    const { properties } = group;
    const layerName = useSelector((state: any) => state[properties].name);
    const stateVisibility = useSelector((state: any) => state[properties].legendIsVisible);
    const itemArrayProperties = legendModelItem(properties);
    return {
      layerName,
      itemArrayProperties,
      stateVisibility,
    };
  });

  return (
    <LegendContainer className={`${legendVisibility ? 'visible' : ''}`}>
      {layers.map((data, index) => (
        <Block
          key={index}
          layerName={data.layerName}
          itemArrayProperties={data.itemArrayProperties}
          legendVisibility={data.stateVisibility}
        />
      ))}
    </LegendContainer>
  );
};
