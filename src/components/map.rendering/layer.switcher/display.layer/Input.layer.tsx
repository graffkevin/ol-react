interface DisplayLayerProps {
  layerName: string;
  toggleLayerVisibility: any;
}

export const InputLayer = ({ layerName, toggleLayerVisibility }: DisplayLayerProps) => {
  return (
    <>
      <label>{layerName}</label>
      <input type="checkbox" onChange={() => toggleLayerVisibility()} />
    </>
  );
};
