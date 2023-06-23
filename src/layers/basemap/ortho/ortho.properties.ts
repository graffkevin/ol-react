import { createSlice, Slice } from '@reduxjs/toolkit';

import orthoIcon from '../../../icons/basemap/ortho.svg';

const orthoPropertiesSlice: Slice = createSlice({
  name: 'orthoProperties',
  initialState: {
    visible: false,
    name: 'Orthophoto',
    icon: orthoIcon,
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
