import { configureStore } from '@reduxjs/toolkit';

import cadastralPropertiesReducer from '../layers/layerTiles/cadastre/cadastre.properties';
import droughtPropertiesReducer from '../layers/layerTiles/drought/drought.properties';
import filosofiPropertiesReducer from '../layers/layerTiles/filosofi.appenin/filosofi.properties';
import floodPropertiesReducer from '../layers/layerTiles/flood/flood.properties';
import marineSubmersionPropertiesReducer from '../layers/layerTiles/marineSubmersion/marineSubmersion.properties';

const store = configureStore({
  reducer: {
    droughtProperties: droughtPropertiesReducer,
    filosofiProperties: filosofiPropertiesReducer,
    floodProperties: floodPropertiesReducer,
    marineSubmersionProperties: marineSubmersionPropertiesReducer,
    cadastralProperties: cadastralPropertiesReducer,
  },
});

export default store;
