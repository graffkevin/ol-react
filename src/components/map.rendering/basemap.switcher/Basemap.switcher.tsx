import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BasemapLayerGroups } from '../../libs/interfaces';
import { BasemapSwitcherContainer } from './basemap.style';

interface BasemapSwitcherProps {
  basemapGroups: BasemapLayerGroups;
}

export const BasemapSwitcher = ({ basemapGroups }: BasemapSwitcherProps) => {
  const dispatch = useDispatch();
  const [stateLayerVisibilities, setStateLayerVisibilities] = useState<{ [key: string]: boolean }>(
    {},
  );

  const toggleLayerVisibility = (
    groupLayer: any,
    visibility: boolean,
    setStateVisible: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>,
  ) => {
    const stateVisibility = !visibility;
    const layer = groupLayer.layer;
    layer.setVisible(stateVisibility);
    dispatch(groupLayer.sliceActions.setVisibilityAction(stateVisibility));
    setStateVisible((prevState) => ({ ...prevState, [groupLayer.properties]: stateVisibility }));
  };

  return (
    <BasemapSwitcherContainer>
      {Object.values(basemapGroups).map((layerGroup: any) => {
        const { properties } = layerGroup;
        const layerName = useSelector((state: any) => state[properties].name);
        const layerIsVisible = useSelector((state: any) => state[properties].visible);
        const stateLayerVisibility = stateLayerVisibilities[properties] ?? layerIsVisible;

        return (
          <div key={properties}>
            <label>{layerName}</label>
            <input
              type="checkbox"
              id={`layer-${properties}`}
              checked={stateLayerVisibility}
              onChange={() =>
                toggleLayerVisibility(layerGroup, stateLayerVisibility, setStateLayerVisibilities)
              }
            />
          </div>
        );
      })}
    </BasemapSwitcherContainer>
  );
};
