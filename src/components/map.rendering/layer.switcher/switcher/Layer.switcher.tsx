import { useSelector } from 'react-redux';

import { Layer, LayerGroups } from '../../../libs/interfaces';
import { InputLayer } from '../input.layer/Input.layer';
import * as Styled from './layer.switcher.style';

interface LayerSwitcherProps {
  layerGroups: LayerGroups;
}

export const LayerSwitcher = ({ layerGroups }: LayerSwitcherProps) => {
  return (
    <Styled.LayerSwitcherContainer>
      {Object.values(layerGroups).map((layerGroup: Layer) => {
        const { properties } = layerGroup;
        const layerName = useSelector((state: any) => state[properties].name);
        const layerIsVisible = useSelector((state: any) => state[properties].layerIsvisible);

        return (
          <InputLayer
            key={properties}
            properties={properties}
            layer={layerGroup}
            name={layerName}
            visibility={layerIsVisible}
          />
        );
      })}
    </Styled.LayerSwitcherContainer>
  );
};
