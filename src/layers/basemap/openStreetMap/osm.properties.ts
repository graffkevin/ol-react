import { createSlice, Slice } from '@reduxjs/toolkit';

import osmIcon from '../../../icons/basemap/osm.svg';

const osmPropertiesSlice: Slice = createSlice({
  name: 'osmProperties',
  initialState: {
    visible: true,
    name: 'OpenStreetMap',
    icon: osmIcon,
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
