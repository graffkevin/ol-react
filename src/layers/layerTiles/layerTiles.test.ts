import axios from 'axios';

import { ExtendedVectorTileLayer } from '../../components/libs/interfaces';
import { cadastreGouv } from './cadastre/cadastre.tiles';
import { droughtTilesLayers } from './drought/drought.tiles';
import { filosofiTilesLayers } from './filosofi.appenin/filosofi.tiles';
import { floodAppeninTilesLayers } from './flood/flood.tiles';
import { submersionTilesLayers } from './marineSubmersion/marineSubmersion.tiles';

const initUrlCoords: string = '{z}/{x}/{y}';
const mockedCoords: string = '#8.1/46.957/0.345';

const statusUrl = async (layer: ExtendedVectorTileLayer) => {
  const layerSourceUrl: any = layer.getSource()?.getUrls();
  const layerUrl = layerSourceUrl[0];
  const mockLayerUrl = layerUrl.replace(initUrlCoords, mockedCoords);
  const layerResponse = await axios.get(mockLayerUrl);
  return layerResponse.status;
};

test('check layer tiles availablity', async () => {
  const cadastreStatusCode = await statusUrl(cadastreGouv);
  expect(cadastreStatusCode).toBe(200);

  const droughtStatusCode = await statusUrl(droughtTilesLayers);
  expect(droughtStatusCode).toBe(200);

  const filosofiStatusCode = await statusUrl(filosofiTilesLayers);
  expect(filosofiStatusCode).toBe(200);

  const floodAppeninStatusCode = await statusUrl(floodAppeninTilesLayers);
  expect(floodAppeninStatusCode).toBe(200);

  const submersionStatusCode = await statusUrl(submersionTilesLayers);
  expect(submersionStatusCode).toBe(200);
});
