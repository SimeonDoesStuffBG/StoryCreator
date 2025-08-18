export function containsFilter(string:string, filter:string):boolean{
    if(filter==''){
        return true;
    }

    return string.toLowerCase().includes(filter.toLowerCase());
}
