import { useState } from 'react';

import { LayerGroups } from '../../libs/interfaces';
import { LegendContent } from './legend.content/Legend.content';
import { ButtonLegend, ContainerButtonAndLegend } from './style';

interface LegendProps {
  layerGroups: LayerGroups;
}

export const Legend = ({ layerGroups }: LegendProps) => {
  const [blockLegendVisibility, seBlockLegendVisibility] = useState(false);
  const toggleDiv = () => seBlockLegendVisibility(!blockLegendVisibility);
  return (
    <>
      <ContainerButtonAndLegend>
        <LegendContent layerGroups={layerGroups} legendVisibility={blockLegendVisibility} />
        <ButtonLegend onClick={toggleDiv}>
          {blockLegendVisibility ? 'hide legend' : 'display legend'}
        </ButtonLegend>
      </ContainerButtonAndLegend>
    </>
  );
};
