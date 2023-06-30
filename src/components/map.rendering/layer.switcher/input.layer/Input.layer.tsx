import { useState } from 'react';
import { useDispatch } from 'react-redux';

interface InputLayerProps {
  properties: any;
  layer: any;
  name: any;
  layerVisibility: any;
  legendVisibility: any;
}

export const InputLayer = ({
  properties,
  layer,
  name,
  layerVisibility,
  legendVisibility,
}: InputLayerProps) => {
  const dispatch = useDispatch();

  const [inputLayerIsChecked, setInputLayerIsChecked] = useState(layerVisibility);
  const [inputLegendIsChecked, setInputLegendIsChecked] = useState(legendVisibility);

  const toggleLayerVisibility = (isVisible: boolean) => {
    const stateLayerVisibility = !isVisible;
    const tilesLayer = layer.tileLayer;
    tilesLayer.setVisible(stateLayerVisibility);
    dispatch(layer.sliceActions.setLayerVisibilityAction(stateLayerVisibility));

    if (stateLayerVisibility === false) {
      dispatch(layer.sliceActions.setLegendVisibilityAction(false));
    }
  };

  const toggleLegendVisibility = (isVible: boolean) => {
    const stateLegendVisibility = !isVible;
    dispatch(layer.sliceActions.setLegendVisibilityAction(stateLegendVisibility));
  };

  return (
    <div key={properties}>
      <label>{name}</label>
      <input
        type="checkbox"
        id={`layer-${properties}`}
        onClick={() => {
          toggleLayerVisibility(layerVisibility);
          setInputLayerIsChecked(!inputLayerIsChecked);
        }}
      />
      {inputLayerIsChecked && (
        <input
          type="checkbox"
          id={`legend-${properties}`}
          onClick={() => {
            toggleLegendVisibility(legendVisibility);
            setInputLegendIsChecked(!inputLegendIsChecked);
          }}
        />
      )}
    </div>
  );
};
