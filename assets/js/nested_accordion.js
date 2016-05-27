//array for event listner? when _ index is clicked, change class to display

var mainList = document.getElementsByClassName('hide_list');

for (i=0; i=mainList.length; i++)
  mainList[i].addEventLister("click", function fshow() {
    mainList.setAttribute("class", "show_list");
  });
