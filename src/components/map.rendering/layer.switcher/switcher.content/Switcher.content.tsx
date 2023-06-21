import { useSelector } from 'react-redux';

import { Layer, LayerGroups } from '../../../libs/interfaces';
import { DisplayLayer } from '../display.layer/Display.layer';
import { DisplayLegend } from '../display.legend/Display.legend';
import * as Styled from '../layerSwitcher.style';

interface SwitcherContentProps {
  layerGroups: LayerGroups;
  stateLayerVisibilities: any;
  handleToggleLayerVisibility: any;
  handleToggleLegendVisibility: any;
}

export const SwitcherContent = ({
  layerGroups,
  stateLayerVisibilities,
  handleToggleLayerVisibility,
  handleToggleLegendVisibility,
}: SwitcherContentProps) => {
  const layer = Object.values(layerGroups).map((group: Layer) => {
    const { properties } = group;
    const layerName = useSelector((state: any) => state[properties].name);
    const layerIsVisible = useSelector((state: any) => state[properties].layerIsVisible);
    const legendIsVisible = useSelector((state: any) => state[properties].legendIsVisible);
    const stateLayerVisibility = stateLayerVisibilities[properties] ?? layerIsVisible;

    const layerVisibility = handleToggleLayerVisibility(group, stateLayerVisibility);
    const legendVisibility = handleToggleLegendVisibility(group);
    return {
      properties,
      layerName,
      layerIsVisible,
      legendIsVisible,
      stateLayerVisibility,
      layerVisibility,
      legendVisibility,
    };
  });

  return (
    <Styled.LayerSwitcherContainer>
      {layer.map((data) => (
        <div key={data.properties}>
          <DisplayLayer
            key={data.properties}
            layerName={data.layerName}
            toggleLayerVisibility={data.layerVisibility}
          />
          <DisplayLegend
            layerVisibility={data.stateLayerVisibility}
            toggleLegendVisibility={data.legendVisibility}
          />
        </div>
      ))}
    </Styled.LayerSwitcherContainer>
  );
};
