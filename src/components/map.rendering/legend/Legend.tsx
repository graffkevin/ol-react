import { useSelector } from 'react-redux';

import { LayerGroups } from '../../libs/layer.group';
import { layerPropertiesModel } from '../../libs/layer.model';
import { ItemLegend } from './ItemLegend';
import * as Styled from './legend.style';

interface LegendProps {
  layerGroups: LayerGroups;
}

export const Legend = ({ layerGroups }: LegendProps) => {
  return (
    <Styled.LegendContainer>
      {Object.values(layerGroups).map((layerGroup: any) => {
        const { properties } = layerGroup;
        const layerName = useSelector((state: any) => state[properties].name);
        const legendVisibility = useSelector((state: any) => state[properties].legendIsVisible);
        const styleArrayProperties = layerPropertiesModel(properties);
        return (
          <>
            {legendVisibility ? (
              <Styled.ItemsLegend>
                <p>{layerName}</p>
                {styleArrayProperties.map((value: any) => (
                  <ItemLegend color={value.color} title={value.title} />
                ))}
              </Styled.ItemsLegend>
            ) : null}
          </>
        );
      })}
    </Styled.LegendContainer>
  );
};
