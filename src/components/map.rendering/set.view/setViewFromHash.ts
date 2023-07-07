export function setViewFromHash(hash: any) {
  const [zoom, latitude, longitude] = hash.split('/');
  return [Number(longitude), Number(latitude), Number(zoom.replace('#', ''))];
}
