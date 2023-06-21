interface DisplayLegendProps {
  layerVisibility: boolean;
  toggleLegendVisibility: any;
}

export const DisplayLegend = ({ layerVisibility, toggleLegendVisibility }: DisplayLegendProps) => {
  if (!layerVisibility) return null;
  return <input type="checkbox" onChange={() => toggleLegendVisibility()} />;
};
