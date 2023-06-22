interface InputLegendProps {
  layerVisibility: boolean;
  toggleLegendVisibility: any;
}

export const InputLegend = ({ layerVisibility, toggleLegendVisibility }: InputLegendProps) => {
  console.log(layerVisibility);
  // if (!layerVisibility || undefined) return null;
  return <input type="checkbox" onChange={() => toggleLegendVisibility()} />;
};
