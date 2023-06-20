import { useState } from 'react';

import { LayerGroups } from '../../libs/interfaces';
import { ContainerContent } from './containerContent/Container.content';
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
        <ContainerContent layerGroups={layerGroups} legendVisibility={blockLegendVisibility} />
        <ButtonLegend onClick={toggleDiv}>
          {blockLegendVisibility ? 'hide legend' : 'display legend'}
        </ButtonLegend>
      </ContainerButtonAndLegend>
    </>
  );
};
