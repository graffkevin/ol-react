function convertNumToPercentage(val: number): string {
  const percentFormater = new Intl.NumberFormat('fr-FR', {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return percentFormater.format(val);
}

function getUniqueListBy<T>(arr: T[], key: keyof T): T[] {
  const itemsReturn = Array.from(new Map(arr.map((item) => [item[key], item])).values());
  return itemsReturn;
}

export { convertNumToPercentage, getUniqueListBy };
