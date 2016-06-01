//after making an array, trying to determine class name and add event listener to each item. when clicked, checks to see classname

//REALLY THOUGHT THIS WAS CLOSE
var headerList = document.getElementsByClassName("main_list");
headerList.addEventListener("click", function(changeClassName){
function changeClassName(){
  var headerClick = document.getElementsByClassName("hide_list");
  var currentClass = headerClick.className;
  if (currentClass == "hide_list") {
    headerClick.className = "show_list";
  } else {
    headerClick.className = "hide_list";
  }
}});




// var headerList = document.getElementsByClassName('hide_list');
// headerList.addEventListener("click", function(event) {
//   if ()
// })


// for (i=0; i < headerList.length; i++) {
//   headerList[i].addEventListener('click',
//     // var headerClick = document.getElementsByClassName('hide_list');
//     var currentClass = this.className;                 // console.log("buttonclicked");
//     if (currentClass == "hide_list") {
//       headerClick.className = "show_list";
//     }  else {
//       headerClick.className = "hide_list";
//     }
//   });
// }
// this.nextElementSibling.classList.toggle("show");



//ANOTHER ATTEMPT
// function changeClassName (){                               creating a function to change class
//   var headerClick = document.getElementsById("header1");   added ID to HTML in hopes to grab the ID and change class
//   var currentClass = headerClick.className;                create variable currentclass to check which class is currently on element
//   if (currentClass == "hide_list") {                       if class is hide_list, change class to show_list
//     headerClick.className = "show_list";
//   } else {                                                 otherwise, make it hide_list
//     headerClick.className = "hide_list";
//   }
// }


// ATTEMPT
// var headerList = document.getElementsByClassName('hide_list');
// for (var liHead = 0; liHead < listarray.length; liHead++) {
//       headerList[liHead].addEventListener('click', function()
//
//     )
//       setAttribute('id', 'show_list');
// }



// ATTEMPT
// for (i = 0; i < classChange.length; i++){              loop through to see class change
//   classChange[0].setAttribute('class', 'show_list')
// //onclick var to index number?
// }
// var classChange = document.getElementsByClassName('hide_list'); grab elements by class name "hide_list"
// if (classChange.addEventListener) {
//   classChange('click', fshow())
// }
