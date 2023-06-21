import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Layer, LayerGroups } from '../../libs/interfaces';
import { DisplayLayer } from './display.layer/Display.layer';
import { DisplayLegend } from './display.legend/Display.legend';
import * as Styled from './layerSwitcher.style';

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

  const toggleLayerVisibility = (
    getLayer: Layer,
    layerIsVisible: boolean,
    setStateVisible: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>,
    setStateLegend: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>,
  ) => {
    const stateVisibility = !layerIsVisible;
    const tilesLayer = getLayer.tilesLayers;
    tilesLayer.setVisible(stateVisibility);
    dispatch(getLayer.sliceActions.setLayerVisibilityAction(stateVisibility));
    setStateVisible((prevState) => ({ ...prevState, [getLayer.properties]: stateVisibility }));

    if (!layerIsVisible) {
      setStateLegend((prevState) => ({ ...prevState, [getLayer.properties]: false }));
      dispatch(getLayer.sliceActions.setLegendVisibilityAction(false));
    }
  };

  const toggleLegendVisibility = (layerGroup: Layer) => {
    const legendIsVisible = !stateLegendVisibilities[layerGroup.properties];
    setStateLegendVisibilities((prevState) => ({
      ...prevState,
      [layerGroup.properties]: legendIsVisible,
    }));
    dispatch(layerGroup.sliceActions.setLegendVisibilityAction(legendIsVisible));
  };

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
          );
        };

        const handleToggleLegendVisibility = () => {
          toggleLegendVisibility(layerGroup);
        };

        return (
          <div key={properties}>
            <DisplayLayer
              key={properties}
              layerName={layerName}
              toggleLayerVisibility={handleToggleLayerVisibility}
            />
            <DisplayLegend
              layerVisibility={stateLayerVisibility}
              toggleLegendVisibility={handleToggleLegendVisibility}
            />
          </div>
        );
      })}
    </Styled.LayerSwitcherContainer>
  );
};
