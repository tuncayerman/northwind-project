import { addLineNumber } from "./editData";

export function showdata(pageNumber, data, pageCount) {
  let showingData = [];
  if (data === null || data === undefined) return showingData;

  const minIndex = (pageNumber - 1) * pageCount;
  const maxIndex = calculateMaxIndex(data, pageCount * pageNumber);
  if (minIndex === maxIndex) showingData.push(data[minIndex]);
  for (let i = minIndex; i < maxIndex; i++) {
    showingData.push(data[i]);
  }
  return showingData;
}

export function filterData(data, filter, fields) {
  if (filter.length === 0 || filter === undefined) return data;
  let filterData = [];
  data.forEach((element) => {
    fields.forEach((field) => {
      if (element[field].toString().includes(filter)) filterData.push(element);
    });
  });

  return addLineNumber(filterData);
}

function calculateMaxIndex(data, number) {
  const maxIndex = data.length;
  if (number < maxIndex) return number;
  else if (number > maxIndex) return maxIndex;
  else return number;
}
