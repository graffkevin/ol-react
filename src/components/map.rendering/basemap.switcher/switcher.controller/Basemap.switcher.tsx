import { useSelector } from 'react-redux';

import empty from '../../../../icons/basemap/empty.svg';
import { BasemapLayerGroups } from '../../../libs/interfaces';
import { InputsBasemap } from '../input.basemap/Inputs.basemap';
import { BasemapSwitcherContainer } from './switcher.style';

interface BasemapSwitcherProps {
  basemapGroups: BasemapLayerGroups;
}

export const BasemapSwitcher = ({ basemapGroups }: BasemapSwitcherProps) => {
  return (
    <BasemapSwitcherContainer>
      {Object.values(basemapGroups).map((basemap: any) => {
        const { properties } = basemap;
        const name = useSelector((state: any) => state[properties].name);
        const visibility = useSelector((state: any) => state[properties].visible);
        const icon = useSelector((state: any) => state[properties].icon);
        return (
          <InputsBasemap
            key={name}
            properties={properties}
            name={name}
            visibility={visibility}
            basemap={basemap}
            icon={icon || empty}
          />
        );
      })}
    </BasemapSwitcherContainer>
  );
};
