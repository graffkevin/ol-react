import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Layer, LayerGroups } from '../../libs/layer.group';
import * as Styled from './layerSwitcher.style';

interface LayerSwitcherProps {
  layerGroups: LayerGroups;
}

export const LayerSwitcher = ({ layerGroups }: LayerSwitcherProps) => {
  const dispatch = useDispatch();
  const [stateLayerVisibilities, setStateLayerVisibilities] = useState<{ [key: string]: boolean }>(
    {},
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
        const stateLegendVisibility = stateLegendVisibilities[properties] ?? false;

        return (
          <div key={properties}>
            <label>{layerName}</label>
            <input
              type="checkbox"
              id={`layer-${properties}`}
              checked={stateLayerVisibility}
              onChange={() =>
                toggleLayerVisibility(
                  layerGroup,
                  stateLayerVisibility,
                  setStateLayerVisibilities,
                  setStateLegendVisibilities,
                )
              }
            />
            {stateLayerVisibility && (
              <input
                type="checkbox"
                id={`legend-${properties}`}
                checked={stateLegendVisibility}
                onChange={() => toggleLegendVisibility(layerGroup)}
              />
            )}
          </div>
        );
      })}
    </Styled.LayerSwitcherContainer>
  );
};
