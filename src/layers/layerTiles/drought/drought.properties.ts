import { createSlice, Slice } from '@reduxjs/toolkit';

const droughtPropertiesSlice: Slice = createSlice({
  name: 'droughtProperties',
  initialState: {
    layerGroupName: 'risk',
    name: 'Retrait-gonflement',
    layerIsvisible: false,
    legendIsVisible: false,
    style: {
      default: {
        color: 'rgba(255, 251, 170, 0.7)',
        title: 'Sans intensité renseignée',
      },
      light: {
        color: 'rgba(255, 251, 84, 0.7)',
        title: 'Faible',
      },
      medium: {
        color: 'rgba(255, 173, 84, 0.7)',
        title: 'Moyenne',
      },
      high: {
        color: 'rgba(179, 0, 0, 0.7)',
        title: 'Forte',
      },
    },
  },
  reducers: {
    setLayerGroupNameAction: (state, action) => {
      state.layerGroupName = action.payload;
    },
    setLayerNameAction: (state, action) => {
      state.name = action.payload;
    },
    setLayerVisibilityAction: (state, action) => {
      state.layerIsvisible = action.payload;
    },
    setLegendVisibilityAction: (state, action) => {
      state.legendIsVisible = action.payload;
    },
    setStyleAction: (state, action) => {
      const { key, color, title } = action.payload;
      state.style[key as keyof typeof state.style] = { color, title };
    },
  },
});

const {
  setLayerGroupNameAction,
  setLayerNameAction,
  setLayerVisibilityAction,
  setLegendVisibilityAction,
  setStyleAction,
} = droughtPropertiesSlice.actions;

export const droughtSliceActions = {
  setLayerGroupNameAction,
  setLayerNameAction,
  setLayerVisibilityAction,
  setLegendVisibilityAction,
  setStyleAction,
};

export default droughtPropertiesSlice.reducer;
