export function containsFilter(text:string, filter:string):boolean{
    if(filter.length==0){
        return true;
    }
    
    return text.toLowerCase().includes(filter.toLowerCase());
}