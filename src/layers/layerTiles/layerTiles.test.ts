import axios from 'axios';

import { cadastreGouv } from './cadastre/cadastre.tiles';
import { droughtTilesLayers } from './drought/drought.tiles';
import { filosofiTilesLayers } from './filosofi.appenin/filosofi.tiles';
import { floodAppeninTilesLayers } from './flood/flood.tiles';
import { submersionTilesLayers } from './marineSubmersion/marineSubmersion.tiles';

const initUrlCoords: string = '{z}/{x}/{y}';
const mockedCoords: string = '#8.1/46.957/0.345';

test('check layer tiles availablity', async () => {
  const cadastreSourceUrl: any = cadastreGouv.getSource()?.getUrls();
  const cadastreUrl = cadastreSourceUrl[0];
  const mockCadastreUrl = cadastreUrl.replace(initUrlCoords, mockedCoords);
  const cadastreResponse = await axios.get(mockCadastreUrl);
  const cadastreStatusCode = cadastreResponse.status;
  expect(cadastreStatusCode).toBe(200);

  const droughtSourceUrl: any = droughtTilesLayers.getSource()?.getUrls();
  const droughtUrl = droughtSourceUrl[0];
  const mockDroughtUrl = droughtUrl.replace(initUrlCoords, mockedCoords);
  const droughtResponse = await axios.get(mockDroughtUrl);
  const droughtStatusCode = droughtResponse.status;
  expect(droughtStatusCode).toBe(200);

  const filosofiSourceUrl: any = filosofiTilesLayers.getSource()?.getUrls();
  const filosofiUrl = filosofiSourceUrl[0];
  const mockFilosofiUrl = filosofiUrl.replace(initUrlCoords, mockedCoords);
  const filosofiResponse = await axios.get(mockFilosofiUrl);
  const filosofiStatusCode = filosofiResponse.status;
  expect(filosofiStatusCode).toBe(200);

  const floodAppeninSourceUrl: any = floodAppeninTilesLayers.getSource()?.getUrls();
  const floodAppeninUrl = floodAppeninSourceUrl[0];
  const mockFloodAppeninUrl = floodAppeninUrl.replace(initUrlCoords, mockedCoords);
  const floodAppeninResponse = await axios.get(mockFloodAppeninUrl);
  const floodAppeninStatusCode = floodAppeninResponse.status;
  expect(floodAppeninStatusCode).toBe(200);

  const submersionSourceUrl: any = submersionTilesLayers.getSource()?.getUrls();
  const submersionUrl = submersionSourceUrl[0];
  const mockSubmersionUrl = submersionUrl.replace(initUrlCoords, mockedCoords);
  const submersionResponse = await axios.get(mockSubmersionUrl);
  const submersionStatusCode = submersionResponse.status;
  expect(submersionStatusCode).toBe(200);
});