export function getFilteredArray(arr,prop){

return arr && arr.filter(item=>item.name===prop)

}






export function getTotals(arr,prop){
    if(prop===undefined){
        return arr.reduce((acc,curr)=>acc+curr.price, 0)
    }else{
    
    }
    
}