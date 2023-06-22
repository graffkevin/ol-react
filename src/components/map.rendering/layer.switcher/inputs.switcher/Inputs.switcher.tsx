interface InputSwitcherProps {
  properties: any;
  layerName: string;
  toggleLayerVisibility: any;
  toggleLegendVisibility: any;
}

export const InputSwitcher = ({
  properties,
  layerName,
  toggleLayerVisibility,
  toggleLegendVisibility,
}: InputSwitcherProps) => {
  return (
    <div key={properties}>
      <label>{layerName}</label>
      <input type="checkbox" onChange={() => toggleLayerVisibility()} />
      <input type="checkbox" onChange={() => toggleLegendVisibility()} />
    </div>
  );
};
