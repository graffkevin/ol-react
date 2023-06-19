/* eslint-disable no-process-env */

const ESLINT_NO_DEV_ERRORS = process.env.REACT_APP_ESLINT_NO_DEV_ERRORS;
const REACT_APP_MAPTILER_KEY = process.env.REACT_APP_MAPTILER_KEY;
const BAN_URL = process.env.REACT_APP_BAN_URL;
const GOOGLE_SERVICES = process.env.REACT_APP_GOOGLE_SERVICES;
const FALCO_TILES = process.env.REACT_APP_FALCO_TILES;
const MAPTILER_API = process.env.REACT_APP_MAPTILER_API;
const DATA_GOUV_TILES_API = process.env.REACT_APP_DATA_GOUV_TILES_API;
const PIANO_TILES_API = process.env.REACT_APP_PIANO_TILES_API;
const IGN_TILES_API = process.env.REACT_APP_IGN_TILES_API;
const ESRI_TILES_API = process.env.REACT_APP_ESRI_TILES_API;
const API_GEO_BASE_URL = process.env.REACT_APP_FALCO_GEO_API;

export const config = {
  ESLINT_NO_DEV_ERRORS,
  REACT_APP_MAPTILER_KEY,
  BAN_URL,
  GOOGLE_SERVICES,
  FALCO_TILES,
  MAPTILER_API,
  DATA_GOUV_TILES_API,
  PIANO_TILES_API,
  IGN_TILES_API,
  ESRI_TILES_API,
  API_GEO_BASE_URL,
};
