export const toggleLayerVisibility = (
  getLayer: any,
  layerIsVisible: boolean,
  setStateVisible: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>,
  setStateLegend: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>,
  dispatch: any,
) => {
  const stateVisibility = !layerIsVisible;
  const tilesLayer = getLayer.tilesLayers;
  tilesLayer.setVisible(stateVisibility);
  dispatch(getLayer.sliceActions.setLayerVisibilityAction(stateVisibility));
  setStateVisible((prevState) => ({ ...prevState, [getLayer.properties]: stateVisibility }));

  if (!layerIsVisible) {
    setStateLegend((prevState) => ({ ...prevState, [getLayer.properties]: false }));
    dispatch(getLayer.sliceActions.setLegendVisibilityAction(false));
  }
};
