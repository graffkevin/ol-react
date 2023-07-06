import { useState } from 'react';

import basemapButton from '../../../icons/basemap/button_basemap.svg';
import { BasemapLayerGroups } from '../../libs/interfaces';
import { BasemapSwitcherActivation } from './render.basemap.style';
import { BasemapSwitcher } from './switcher.controller/Basemap.switcher';

interface BasemapSwitcherProps {
  basemapGroups: BasemapLayerGroups;
}

export const RenderBasemapSwitcher = ({ basemapGroups }: BasemapSwitcherProps) => {
  const [activate, setActivate] = useState(false);
  return (
    <>
      <BasemapSwitcherActivation
        type="image"
        alt="basemap-switcher"
        src={basemapButton}
        onClick={() => setActivate(!activate)}
      />
      {activate && <BasemapSwitcher basemapGroups={basemapGroups} />}
    </>
  );
};
