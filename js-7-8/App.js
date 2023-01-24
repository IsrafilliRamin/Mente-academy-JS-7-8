

/* let div = document.createElement("div");

div.innerText = "Hello World";

div.className = "div1";

div.id = "divId";

document.body.appendChild(div);

console.log(div);
 */













/* 
let ul = document.createElement("ul");

document.body.appendChild(ul)

console.log(ul);


let li = document.createElement("li");

li.innerText = "Hello World";

console.log(li);

ul.appendChild(li) */
















/* const ul = document.querySelector("ul"); */


/* let li = document.querySelector("li") */


/* console.log(li.parentNode.parentNode); */

/* console.log(ul.children[0]); */

/* console.log(ul.parentNode); */


/* console.log(li.nextElementSibling.nextElementSibling.previousElementSibling ); */












 
/*     console.log(div.setAttribute("style","background-color:blue ; padding:30px"));
    console.log(div.getAttribute("style")); */
   /*  console.log(div.hasAttribute("style")); */




const btn = document.querySelector("button");

/* let count = document.querySelector(".count")
let Newcount = 0;  */



let div = document.querySelector('div')

btn.addEventListener("click",()=>{
   /*  Newcount += 1; */
    /*  */
  /*   div.style.backgroundColor = "blue";
    count.innerHTML = Newcount; */

console.log(div.getAttribute("style"));
    if(div.getAttribute("style") == "background-color:red"){
        div.setAttribute("style","background-color:blue")
    }else{
        div.setAttribute("style","background-color:red")
    }

})












































