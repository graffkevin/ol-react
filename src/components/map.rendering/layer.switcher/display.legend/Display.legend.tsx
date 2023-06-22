import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LayerGroups } from '../../../libs/interfaces';
import { InputLegend } from './Input.legend';
import { toggleLegendVisibility } from './toggle.legend.visibility';

interface DisplayLegendProps {
  layerGroups: LayerGroups;
}

export const DisplayLegend = ({ layerGroups }: DisplayLegendProps) => {
  const dispatch = useDispatch();

  const [stateLegendVisibilities, setStateLegendVisibilities] = useState<{
    [key: string]: boolean;
  }>({});

  const data = Object.values(layerGroups).map((layerGroup: any) => {
    const { properties } = layerGroup;
    const layerIsVisible = useSelector((state: any) => state[properties].layerIsVisible);
    const stateLayerVisibility = stateLegendVisibilities[properties] ?? layerIsVisible;
    const handleToggleLegendVisibility = () => {
      toggleLegendVisibility(
        layerGroup,
        stateLegendVisibilities,
        setStateLegendVisibilities,
        dispatch,
      );
    };
    return { properties, stateLayerVisibility, handleToggleLegendVisibility };
  });

  return (
    <>
      {data.map((item) => (
        <InputLegend
          key={`${item.properties}-legend`}
          layerVisibility={item.stateLayerVisibility}
          toggleLegendVisibility={item.handleToggleLegendVisibility}
        />
      ))}
    </>
  );
};
