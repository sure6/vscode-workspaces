import _, { lowerFirst } from 'lodash';
import printMe from './print.js';
// import './style.css';
// import icon from './icon.png';
// import Data from './data.xml';
// import Note from './data.csv';
function component(){
    const element =document.createElement("div");

    // management output
    const btn =document.createElement("button");
    btn.innerHTML="Click me and check the console!";
    btn.onclick=printMe;
    element.appendChild(btn);

    // resource management
    // element.innerHTML=_.join(['Hello','webpack'],' ');
    // element.classList.add('hello');

    // const myIcon=new Image();
    // myIcon.src=icon;
    // element.appendChild(myIcon);

    // console.log(Data);
    // console.log(Note);

    return element;
}

document.body.appendChild(component())