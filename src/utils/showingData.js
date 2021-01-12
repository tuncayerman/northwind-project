import {addLineNumber} from "./editData"

export function showdata(pageNumber, data, pageCount) {
  console.log(pageCount);
  console.log(pageNumber);
  let showingData =[];
    if(data === null || data === undefined)
      return showingData;
    
    const minIndex = (pageNumber-1)*pageCount;
    const maxIndex = calculateMaxIndex(data, pageCount*pageNumber);
    console.log(minIndex);
    console.log(maxIndex);
    if(minIndex === maxIndex)
      showingData.push(data[minIndex]);
    for(let i=minIndex; i<maxIndex; i++){
      console.log(data[i])
      showingData.push(data[i]);
    }
    console.log(showingData);
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

  console.log(filterData);
  return addLineNumber(filterData);
}


function calculateMaxIndex(data, number){
  const lastIndex = data.length-1;
  if(number<lastIndex)
    return number;
  else if(number>lastIndex)
    return lastIndex;
  else
    return number;

}
