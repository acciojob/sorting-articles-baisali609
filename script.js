//your JS code here. If required.
let obj={};
for(let i=0;i<arr.length;i++){
    let newArr = arr[i].split(" ")
    console.log(newArr);
    if(newArr[0]=="A"|| newArr[0]=="An"||newArr[0]=="The"){
        newArr.splice(0,1);
    }
    console.log(newArr)
    obj[arr[i]] = newArr.join(' ');
    console.log(obj);
}
