import { createSlice, Slice } from '@reduxjs/toolkit';

const orthoPropertiesSlice: Slice = createSlice({
  name: 'orthoProperties',
  initialState: {
    visible: false,
    name: 'Orthophoto',
  },
  reducers: {
    setVisibilityAction: (state, action) => {
      state.visible = action.payload;
    },
  },
});

const { setVisibilityAction } = orthoPropertiesSlice.actions;

export const orthoSliceActions = {
  setVisibilityAction,
};

export default orthoPropertiesSlice.reducer;
