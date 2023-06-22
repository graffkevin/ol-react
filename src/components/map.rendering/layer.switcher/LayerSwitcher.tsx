import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Layer, LayerGroups } from '../../libs/interfaces';
import { InputSwitcher } from './inputs.switcher/Inputs.switcher';
import * as Styled from './layerSwitcher.style';
import { toggleLayerVisibility } from './switcher.manager/toggle.layer.visibility';
import { toggleLegendVisibility } from './switcher.manager/toggle.legend.visibility';

interface LayerSwitcherProps {
  layerGroups: LayerGroups;
}

export const LayerSwitcher = ({ layerGroups }: LayerSwitcherProps) => {
  const dispatch = useDispatch();
  const [_stateLayerVisibilities, setStateLayerVisibilities] = useState<{ [key: string]: boolean }>(
    Object.fromEntries(Object.keys(layerGroups).map((key) => [key, false])),
  );
  const [stateLegendVisibilities, setStateLegendVisibilities] = useState<{
    [key: string]: boolean;
  }>({});

  return (
    <Styled.LayerSwitcherContainer>
      {Object.values(layerGroups).map((layerGroup: Layer) => {
        const { properties } = layerGroup;
        const layerName = useSelector((state: any) => state[properties].name);
        const layerIsVisible = useSelector((state: any) => state[properties].layerIsVisible);

        const handleToggleLayerVisibility = () => {
          toggleLayerVisibility(
            layerGroup,
            layerIsVisible,
            setStateLayerVisibilities,
            setStateLegendVisibilities,
            dispatch,
          );
        };

        const handleToggleLegendVisibility = () => {
          toggleLegendVisibility(
            layerGroup,
            stateLegendVisibilities,
            setStateLegendVisibilities,
            dispatch,
          );
        };

        return (
          <InputSwitcher
            key={`${properties}-layer`}
            properties={properties}
            layerName={layerName}
            toggleLayerVisibility={handleToggleLayerVisibility}
            toggleLegendVisibility={handleToggleLegendVisibility}
          />
        );
      })}
    </Styled.LayerSwitcherContainer>
  );
};
