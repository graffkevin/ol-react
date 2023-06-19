import { createSlice, Slice } from '@reduxjs/toolkit';

const cadastralPropertiesSlice: Slice = createSlice({
  name: 'cadastralProperties',
  initialState: {
    layerGroupName: 'cadastral',
    name: 'Parcelles cadastrales',
    layerIsvisible: false,
    legendIsVisible: false,
    style: {
      section: {
        color: 'rgba(57, 41, 74, 0.2)',
        title: 'Section',
      },
      parcelle: {
        color: 'rgba(105, 103, 74, 0.3)',
        title: 'Parcelle',
      },
      batiment: {
        color: 'rgba(0, 0, 0, 1)',
        title: 'Bâtiment',
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
} = cadastralPropertiesSlice.actions;

export const cadastralSliceActions = {
  setLayerGroupNameAction,
  setLayerNameAction,
  setLayerVisibilityAction,
  setLegendVisibilityAction,
  setStyleAction,
};

export default cadastralPropertiesSlice.reducer;
