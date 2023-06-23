import { createSlice, Slice } from '@reduxjs/toolkit';

const osmPropertiesSlice: Slice = createSlice({
  name: 'osmProperties',
  initialState: {
    visible: true,
    name: 'OpenStreetMap',
  },
  reducers: {
    setVisibilityAction: (state, action) => {
      state.visible = action.payload;
    },
  },
});

const { setVisibilityAction } = osmPropertiesSlice.actions;

export const osmSliceActions = {
  setVisibilityAction,
};

export default osmPropertiesSlice.reducer;
