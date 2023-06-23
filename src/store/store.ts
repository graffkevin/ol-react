import { configureStore } from '@reduxjs/toolkit';

import osmPropertiesReducer from '../layers/basemap/openStreetMap/osm.properties';
import orthoPropertiesReducer from '../layers/basemap/ortho/ortho.properties';
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
    osmProperties: osmPropertiesReducer,
    orthoProperties: orthoPropertiesReducer,
  },
});

export default store;
