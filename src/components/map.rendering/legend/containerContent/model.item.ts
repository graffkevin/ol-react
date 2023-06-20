import { useSelector } from 'react-redux';

export const legendModelItem = (layerProperties: string) => {
  const layerStyle = useSelector((state: any) => state[layerProperties].style);
  const layerValues = Object.entries(
    layerStyle as { [key: string]: { color: string; title: string } },
  ).map(([key, value]) => ({
    key,
    color: value.color,
    title: value.title,
  }));

  return layerValues;
};
