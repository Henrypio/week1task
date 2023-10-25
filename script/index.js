 let img1 = document.getElementById("img1");
 let img1btn = document.getElementById("char1btn");
 let toAdd = [img1, img1btn]
 for(i=0;  i < toAdd.length; i++){
  toAdd[i].addEventListener("click", fetchImg1);
 }
  function fetchImg1(){
   fetch('https://swapi.dev/api/people')
   .then(response => response.json())
   .then(actualdata =>{
     let newdata = actualdata.results;
     let charName = document.getElementById("char-name");
     charName.innerHTML = "Name :" + newdata[0].name
     let charHeight = document.getElementById("char-height");
     charHeight.innerHTML = "Height :" + newdata[0].height
     let charGender = document.getElementById("char-gender");
     charGender.innerHTML = "Gender :" + newdata[0].gender
     document.getElementById("content1").classList.toggle("hidden");
   })  
 }
 
 let img2 = document.getElementById("img2");
 let img2btn = document.getElementById("char2btn");
 let toAdd1 = [img2, img2btn]
 for(i=0;  i < toAdd1.length; i++){
  toAdd1[i].addEventListener("click", fetchImg2);
 }
  function fetchImg2(){
   fetch('https://swapi.dev/api/people')
   .then(response => response.json())
   .then(actualdata =>{
     let newdata = actualdata.results;
     let charName = document.getElementById("char-name1");
     charName.innerHTML = "Name :" + newdata[1].name
     let charHeight = document.getElementById("char-height1");
     charHeight.innerHTML = "Height :" + newdata[1].height
     let charGender = document.getElementById("char-gender1");
     charGender.innerHTML = "Gender :" + newdata[1].gender
     document.getElementById("content2").classList.toggle("hidden");
   })  
 }

 let img3 = document.getElementById("img3");
 let img3btn = document.getElementById("char3btn");
 let toAdd2 = [img3, img3btn]
 for(i=0;  i < toAdd2.length; i++){
  toAdd2[i].addEventListener("click", fetchImg3);
 }
  function fetchImg3(){
   fetch('https://swapi.dev/api/people')
   .then(response => response.json())
   .then(actualdata =>{
     let newdata = actualdata.results;
     let charName = document.getElementById("char-name2");
     charName.innerHTML = "Name :" + newdata[2].name
     let charHeight = document.getElementById("char-height2");
     charHeight.innerHTML = "Height :" + newdata[2].height
     let charGender = document.getElementById("char-gender2");
     charGender.innerHTML = "Gender :" + newdata[2].gender
     document.getElementById("content3").classList.toggle("hidden");
   })  
 }

 let img4 = document.getElementById("img4");
 let img4btn = document.getElementById("char4btn");
 let toAdd3 = [img4, img4btn]
 for(i=0;  i < toAdd3.length; i++){
  toAdd3[i].addEventListener("click", fetchImg4);
 }
  function fetchImg4(){
   fetch('https://swapi.dev/api/people')
   .then(response => response.json())
   .then(actualdata =>{
     let newdata = actualdata.results;
     let charName = document.getElementById("char-name3");
     charName.innerHTML = "Name :" + newdata[3].name
     let charHeight = document.getElementById("char-height3");
     charHeight.innerHTML = "Height :" + newdata[3].height
     let charGender = document.getElementById("char-gender3");
     charGender.innerHTML = "Gender :" + newdata[3].gender
     document.getElementById("content4").classList.toggle("hidden");
   })  
 }

 let img5 = document.getElementById("img5");
 let img5btn = document.getElementById("char5btn");
 let toAdd4 = [img5, img5btn]
 for(i=0;  i < toAdd4.length; i++){
  toAdd4[i].addEventListener("click", fetchImg5);
 }
  function fetchImg5(){
   fetch('https://swapi.dev/api/people')
   .then(response => response.json())
   .then(actualdata =>{
     let newdata = actualdata.results;
     let charName = document.getElementById("char-name4");
     charName.innerHTML = "Name :" + newdata[4].name
     let charHeight = document.getElementById("char-height4");
     charHeight.innerHTML = "Height :" + newdata[4].height
     let charGender = document.getElementById("char-gender4");
     charGender.innerHTML = "Gender :" + newdata[4].gender
     document.getElementById("content5").classList.toggle("hidden");
   })  
 }

 let img6 = document.getElementById("img6");
 let img6btn = document.getElementById("char6btn");
 let toAdd5 = [img6, img6btn]
 for(i=0;  i < toAdd5.length; i++){
  toAdd5[i].addEventListener("click", fetchImg6);
 }
  function fetchImg6(){
   fetch('https://swapi.dev/api/people')
   .then(response => response.json())
   .then(actualdata =>{
     let newdata = actualdata.results;
     let charName = document.getElementById("char-name5");
     charName.innerHTML = "Name :" + newdata[5].name
     let charHeight = document.getElementById("char-height5");
     charHeight.innerHTML = "Height :" + newdata[5].height
     let charGender = document.getElementById("char-gender5");
     charGender.innerHTML = "Gender :" + newdata[5].gender
     document.getElementById("content6").classList.toggle("hidden");
   })  
 }

 let img7 = document.getElementById("img7");
 let img7btn = document.getElementById("char7btn");
 let toAdd6 = [img7, img7btn]
 for(i=0;  i < toAdd6.length; i++){
  toAdd6[i].addEventListener("click", fetchImg7);
 }
  function fetchImg7(){
   fetch('https://swapi.dev/api/people')
   .then(response => response.json())
   .then(actualdata =>{
     let newdata = actualdata.results;
     let charName = document.getElementById("char-name6");
     charName.innerHTML = "Name :" + newdata[6].name
     let charHeight = document.getElementById("char-height6");
     charHeight.innerHTML = "Height :" + newdata[6].height
     let charGender = document.getElementById("char-gender6");
     charGender.innerHTML = "Gender :" + newdata[6].gender
     document.getElementById("content7").classList.toggle("hidden");
   })  
 }

 let img8 = document.getElementById("img8");
 let img8btn = document.getElementById("char8btn");
 let toAdd7 = [img8, img8btn]
 for(i=0;  i < toAdd7.length; i++){
  toAdd7[i].addEventListener("click", fetchImg8);
 }
  function fetchImg8(){
   fetch('https://swapi.dev/api/people')
   .then(response => response.json())
   .then(actualdata =>{
     let newdata = actualdata.results;
     let charName = document.getElementById("char-name7");
     charName.innerHTML = "Name :" + newdata[7].name
     let charHeight = document.getElementById("char-height7");
     charHeight.innerHTML = "Height :" + newdata[7].height
     let charGender = document.getElementById("char-gender7");
     charGender.innerHTML = "Gender :" + newdata[7].gender
     document.getElementById("content8").classList.toggle("hidden");
   })  
 }

 let img9 = document.getElementById("img9");
 let img9btn = document.getElementById("char9btn");
 let toAdd8 = [img9, img9btn]
 for(i=0;  i < toAdd8.length; i++){
  toAdd8[i].addEventListener("click", fetchImg9);
 }
  function fetchImg9(){
   fetch('https://swapi.dev/api/people')
   .then(response => response.json())
   .then(actualdata =>{
     let newdata = actualdata.results;
     let charName = document.getElementById("char-name8");
     charName.innerHTML = "Name :" + newdata[8].name
     let charHeight = document.getElementById("char-height8");
     charHeight.innerHTML = "Height :" + newdata[8].height
     let charGender = document.getElementById("char-gender8");
     charGender.innerHTML = "Gender :" + newdata[8].gender
     document.getElementById("content9").classList.toggle("hidden");
   })  
 }

 let img10 = document.getElementById("img10");
 let img10btn = document.getElementById("char10btn");
 let toAdd9 = [img10, img10btn]
 for(i=0;  i < toAdd9.length; i++){
  toAdd9[i].addEventListener("click", fetchImg10);
 }
  function fetchImg10(){
   fetch('https://swapi.dev/api/people')
   .then(response => response.json())
   .then(actualdata =>{
     let newdata = actualdata.results;
     let charName = document.getElementById("char-name9");
     charName.innerHTML = "Name :" + newdata[9].name
     let charHeight = document.getElementById("char-height9");
     charHeight.innerHTML = "Height :" + newdata[9].height
     let charGender = document.getElementById("char-gender9");
     charGender.innerHTML = "Gender :" + newdata[9].gender
     document.getElementById("content10").classList.toggle("hidden");
   })  
 }

 
 

  



 
 


//module.exports = { main }