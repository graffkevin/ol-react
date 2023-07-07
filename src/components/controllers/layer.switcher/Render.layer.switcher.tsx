import { useState } from 'react';

import empty from '../../../icons/basemap/empty.svg';
import { LayerGroups } from '../../libs/interfaces';
import { LayerSwitcherActivation } from './render.layer.switcher.style';
import { LayerSwitcher } from './switcher.controller/Layer.switcher';

interface RenderSwitcherProps {
  layerGroups: LayerGroups;
}

export const RenderLayerSwitcher = ({ layerGroups }: RenderSwitcherProps) => {
  const [activate, setActivate] = useState(false);
  return (
    <>
      <LayerSwitcherActivation
        type="image"
        alt="layer-switcher"
        src={empty}
        onClick={() => setActivate(!activate)}
      />
      {activate && <LayerSwitcher layerGroups={layerGroups} />}
    </>
  );
};
