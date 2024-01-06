type arr=string[]|number[];
function getFirstElement(arr:arr):number|string{
    return arr[0];

}
console.log(getFirstElement(["hi","why","guy"]).toUpperCase());
console.log(getFirstElement([1,2,3]))