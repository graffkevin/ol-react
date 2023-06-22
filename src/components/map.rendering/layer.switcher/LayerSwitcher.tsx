import { LayerGroups } from '../../libs/interfaces';
import { DisplayLayer } from './display.layer/Display.layer';
import { DisplayLegend } from './display.legend/Display.legend';
import { DisplayContainer, LayerSwitcherContainer } from './layerSwitcher.style';

interface LayerSwitcherProps {
  layerGroups: LayerGroups;
}

export const LayerSwitcher = ({ layerGroups }: LayerSwitcherProps) => {
  return (
    <LayerSwitcherContainer>
      <DisplayContainer>
        <DisplayLayer layerGroups={layerGroups} />
        <DisplayLegend layerGroups={layerGroups} />
      </DisplayContainer>
    </LayerSwitcherContainer>
  );
};
