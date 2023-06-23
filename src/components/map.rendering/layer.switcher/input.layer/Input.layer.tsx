import { useState } from 'react';
import { useDispatch } from 'react-redux';

interface InputLayerProps {
  properties: any;
  layer: any;
  name: any;
  visibility: any;
}

export const InputLayer = ({ properties, layer, name, visibility }: InputLayerProps) => {
  const dispatch = useDispatch();

  const [inputIsChecked, setInputIsChecked] = useState(visibility);
  const [legendVisibility, setLegendVisibility] = useState(false);

  const toggleLayerVisibility = (isVisible: boolean) => {
    const stateVisibility = !isVisible;
    const tilesLayer = layer.tileLayer;
    tilesLayer.setVisible(stateVisibility);
    dispatch(layer.sliceActions.setLayerVisibilityAction(stateVisibility));

    if (!isVisible) {
      dispatch(layer.sliceActions.setLegendVisibilityAction(false));
    }
  };

  const toggleLegendVisibility = () => {
    const legendIsVisible = !visibility;
    dispatch(layer.sliceActions.setLegendVisibilityAction(legendIsVisible));
  };

  return (
    <div key={properties}>
      <label>{name}</label>
      <input
        type="checkbox"
        id={`layer-${properties}`}
        onClick={() => {
          toggleLayerVisibility(visibility);
          setInputIsChecked(!inputIsChecked);
        }}
      />
      {inputIsChecked && (
        <input
          type="checkbox"
          id={`legend-${properties}`}
          onClick={() => {
            toggleLegendVisibility();
            setLegendVisibility(!legendVisibility);
          }}
        />
      )}
    </div>
  );
};
