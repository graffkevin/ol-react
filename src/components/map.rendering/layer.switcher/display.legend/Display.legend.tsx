interface DisplayLegendProps {
  layerVisibility: boolean;
  toggleLegendVisibility: any;
}

export const DisplayLegend = ({ layerVisibility, toggleLegendVisibility }: DisplayLegendProps) => {
  console.log('layerVisibility', layerVisibility);
  if (!layerVisibility) return null;
  return <input type="checkbox" onChange={() => toggleLegendVisibility()} />;
};
