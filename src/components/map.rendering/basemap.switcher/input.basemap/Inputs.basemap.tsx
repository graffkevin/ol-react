import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { BasemapInput, InputSwitcher } from './input.style';

interface InputsBasemapProps {
  properties: any;
  basemap: any;
  name: any;
  visibility: any;
  icon: any;
}

export const InputsBasemap = ({
  properties,
  basemap,
  name,
  visibility,
  icon,
}: InputsBasemapProps) => {
  const dispatch = useDispatch();

  const [isCheck, setIsCheck] = useState(visibility);

  const toggleLayerVisibility = (isVisibile: boolean) => {
    const stateVisibility = !isVisibile;
    const layer = basemap.layer;
    layer.setVisible(stateVisibility);
    dispatch(basemap.sliceActions.setVisibilityAction(stateVisibility));
  };

  return (
    <BasemapInput>
      <InputSwitcher
        type="image"
        alt={name}
        src={icon}
        title={name}
        id={`layer-${properties}`}
        onClick={() => {
          toggleLayerVisibility(visibility);
          setIsCheck(!isCheck);
        }}
        style={{
          border: isCheck ? '2px solid rgb(255, 0, 0)' : 'none',
          borderRadius: isCheck ? '6px' : '0',
        }}
      />
    </BasemapInput>
  );
};
