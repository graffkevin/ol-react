import { osmBasemap } from './openStreetMap/osm.tiles';
import { orthoHRBasemap } from './ortho/orthophoto.tiles';
import { pianoBasemap } from './piano/piano.tiles';
import { esriBaseMap } from './topography/topography.tiles';

test('check if basemaps availability', () => {
  expect(osmBasemap).toBeDefined();
  expect(osmBasemap).not.toBeNull();

  expect(orthoHRBasemap).toBeDefined();
  expect(orthoHRBasemap).not.toBeNull();

  expect(pianoBasemap).toBeDefined();
  expect(pianoBasemap).not.toBeNull();

  expect(esriBaseMap).toBeDefined();
  expect(esriBaseMap).not.toBeNull();
});
