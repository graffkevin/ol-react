import { createSlice, Slice } from '@reduxjs/toolkit';

const filosofiPropertiesSlice: Slice = createSlice({
  name: 'filosofiProperties',
  initialState: {
    layerGroupName: 'economy',
    name: 'Filosofi',
    layerIsvisible: false,
    legendIsVisible: false,
    style: {
      default: {
        color: 'rgba(227, 253, 228, 0.6)',
        title: 'Non bornée',
      },
      veryLightGreen: {
        color: 'rgba(227, 253, 228, 0.8)',
        title: 'Très faible',
        threshold: 8381,
      },
      lightGreen: {
        color: 'rgba(162, 255, 167, 0.8)',
        title: 'Faible',
        threshold: 20936,
      },
      mediumGreen: {
        color: 'rgba(53, 228, 62, 0.8)',
        title: 'Moyenne',
        threshold: 23756,
      },
      strongGreen: {
        color: 'rgba(0, 94, 5, 0.8)',
        title: 'Forte',
        threshold: 40000,
      },
      veryStrongGreen: {
        color: 'rgba(0, 42, 2, 0.8)',
        title: 'Très forte',
        threshold: 66061,
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
      const { key, color, title, threshold } = action.payload;
      state.style[key as keyof typeof state.style] = { color, title, threshold };
    },
  },
});

const {
  setLayerGroupNameAction,
  setLayerNameAction,
  setLayerVisibilityAction,
  setLegendVisibilityAction,
  setStyleAction,
} = filosofiPropertiesSlice.actions;

export const filosofiSliceActions = {
  setLayerGroupNameAction,
  setLayerNameAction,
  setLayerVisibilityAction,
  setLegendVisibilityAction,
  setStyleAction,
};

export default filosofiPropertiesSlice.reducer;
