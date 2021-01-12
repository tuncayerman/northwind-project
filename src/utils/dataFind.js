export function detailFind(id, arr){
     if(Array.isArray(arr))
        return arr.find(item => item.id===id);
}