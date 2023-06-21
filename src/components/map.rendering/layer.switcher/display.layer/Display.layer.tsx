interface DisplayLayerProps {
  layerName: string;
  toggleLayerVisibility: any;
}

export const DisplayLayer = ({ layerName, toggleLayerVisibility }: DisplayLayerProps) => {
  return (
    <>
      <label>{layerName}</label>
      <input type="checkbox" onChange={() => toggleLayerVisibility()} />
    </>
  );
};
