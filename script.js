//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

let obj={};
for(let i=0;i<band.length;i++){
    let newArr = band[i].split(" ")
    console.log(newArr);
    if(newArr[0]=="A"|| newArr[0]=="An"||newArr[0]=="The"){
        newArr.splice(0,1);
    }
    console.log(newArr)
    obj[arr[i]] = newArr.join(' ');
    console.log(obj);
}
