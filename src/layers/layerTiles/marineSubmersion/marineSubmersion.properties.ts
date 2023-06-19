import { createSlice, Slice } from '@reduxjs/toolkit';

const marineSubmersionPropertiesSlice: Slice = createSlice({
  name: 'marineSubmersionProperties',
  initialState: {
    layerGroupName: 'risk',
    name: 'Submersion marine',
    layerIsvisible: false,
    legendIsVisible: false,
    style: {
      default: {
        color: 'rgba(39,172,245,0.2)',
        title: 'Default',
      },
      low: {
        color: 'rgba(134, 217, 255, 0.7)',
        title: 'low',
      },
      medium: {
        color: 'rgba(0, 175, 255, 0.7)',
        title: 'medium',
      },
      high: {
        color: 'rgba(0, 81, 117, 0.7)',
        title: 'high',
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
} = marineSubmersionPropertiesSlice.actions;

export const marineSubmersionSliceActions = {
  setLayerGroupNameAction,
  setLayerNameAction,
  setLayerVisibilityAction,
  setLegendVisibilityAction,
  setStyleAction,
};

export default marineSubmersionPropertiesSlice.reducer;
