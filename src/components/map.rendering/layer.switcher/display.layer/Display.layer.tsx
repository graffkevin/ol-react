import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LayerGroups } from '../../../libs/interfaces';
import { InputLayer } from './Input.layer';
import { toggleLayerVisibility } from './toggle.layer.visibility';

interface DisplayLayerProps {
  layerGroups: LayerGroups;
}

export const DisplayLayer = ({ layerGroups }: DisplayLayerProps) => {
  const dispatch = useDispatch();

  const [_stateLayerVisibilities, setStateLayerVisibilities] = useState<{ [key: string]: boolean }>(
    Object.fromEntries(Object.keys(layerGroups).map((key) => [key, false])),
  );
  const [_stateLegendVisibilities, setStateLegendVisibilities] = useState<{
    [key: string]: boolean;
  }>({});

  const data = Object.values(layerGroups).map((layerGroup: any) => {
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
    return { properties, layerName, handleToggleLayerVisibility };
  });

  return (
    <>
      {data.map((item) => (
        <InputLayer
          key={`${item.properties}-layer`}
          layerName={item.layerName}
          toggleLayerVisibility={item.handleToggleLayerVisibility}
        />
      ))}
    </>
  );
};
