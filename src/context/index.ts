import { Map } from 'ol';
import { defaults, FullScreen, ScaleLine } from 'ol/control';
import { createContext } from 'react';

import { osmBasemap } from '../layers/basemap/openStreetMap/osm.tiles';
import { orthoHRBasemap } from '../layers/basemap/ortho/orthophoto.tiles';
import { droughtTilesLayers } from '../layers/layerTiles/drought/drought.tiles';
import { filosofiTilesLayers } from '../layers/layerTiles/filosofi.appenin/filosofi.tiles';

const initMap = (): Map => {
  return new Map({
    target: undefined,
    layers: [osmBasemap, orthoHRBasemap, droughtTilesLayers, filosofiTilesLayers],
    view: undefined,
    controls: defaults({ attribution: true, zoom: true, rotate: false }).extend([
      new ScaleLine(),
      new FullScreen(),
    ]),
  });
};

export const openlayerContext = createContext<Map>(initMap());
