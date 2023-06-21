export const toggleLegendVisibility = (
  layerGroup: any,
  stateLegendVisibilities: any,
  setStateLegendVisibilities: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>,
  dispatch: any,
) => {
  const legendIsVisible = !stateLegendVisibilities[layerGroup.properties];
  setStateLegendVisibilities((prevState) => ({
    ...prevState,
    [layerGroup.properties]: legendIsVisible,
  }));
  dispatch(layerGroup.sliceActions.setLegendVisibilityAction(legendIsVisible));
};
