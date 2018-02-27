var allTabs = document.querySelectorAll('.user-profile__tab')

function savedI(arg) {
  return arg;
}

var n;

for(var i = 0; i < allTabs.length; i++){
  allTabs[i].addEventListener('click', function(e) {
    e.preventDefault();
    var index = (function(x){
      return n = i;
    })(i);
    console.log(allTabs[n]);
  });
};





var tabs = [
  document.getElementById("first-tab"),
  document.getElementById("second-tab"),
  document.getElementById("third-tab")
]

var lists = [
  document.getElementById("first-list"),
  document.getElementById("second-list"),
  document.getElementById("third-list")
]

for(var i = 0; i < tabs.length; i++) {
  console.dir(tabs[i])
  tabs[i].addEventListener('click', function(e) {
    e.preventDefault();
    console.dir(i);
    // .classList.add("user-profile__tab--active");
    // tabs[i + 1].classList.remove("user-profile__tab--active");
    // tabs[i - 1].classList.remove("user-profile__tab--active");
    // lists[i].classList.add("user-profile__item-list--active");
    // lists[i + 1].classList.remove("user-profile__item-list--active");
    // lists[i - 1].classList.remove("user-profile__item-list--active");
  });
}


tabs[0].classList.add("user-profile__tab--active");
lists[0].classList.add("user-profile__item-list--active");