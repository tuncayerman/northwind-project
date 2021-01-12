export function addLineNumber(arr){
    let editArr=[];
    if(!Array.isArray(arr) && arr.length===0)
        return [];
    let lineNumber=1;
    arr.forEach(element => {
        element.lineNumber = lineNumber;
        editArr.push(element);
        lineNumber++;
    });
    return editArr;
}


export function showValue(value,type){
    if(type === "Date"){
        const date = new Date(value);
        return date.getDate().toString() + "-" + (date.getMonth()+1).toString()+ "-" + date.getFullYear().toString();
    }
    else
        return value;
}
