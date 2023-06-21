import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Layer, LayerGroups } from '../../libs/interfaces';
import { DisplayLayer } from './display.layer/Display.layer';
import { DisplayLegend } from './display.legend/Display.legend';
import * as Styled from './layerSwitcher.style';
import { toggleLayerVisibility } from './toggle.layer.visibility';
import { toggleLegendVisibility } from './toggle.legend.visibility';

interface LayerSwitcherProps {
  layerGroups: LayerGroups;
}

export const LayerSwitcher = ({ layerGroups }: LayerSwitcherProps) => {
  const dispatch = useDispatch();
  const [stateLayerVisibilities, setStateLayerVisibilities] = useState<{ [key: string]: boolean }>(
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
        const stateLayerVisibility = stateLayerVisibilities[properties] ?? layerIsVisible;

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
          <div key={properties}>
            <DisplayLayer
              key={`${properties}-layer`}
              layerName={layerName}
              toggleLayerVisibility={handleToggleLayerVisibility}
            />
            <DisplayLegend
              key={`${properties}-legend`}
              layerVisibility={stateLayerVisibility}
              toggleLegendVisibility={handleToggleLegendVisibility}
            />
          </div>
        );
      })}
    </Styled.LayerSwitcherContainer>
  );
};
