var firstTab = document.getElementById("first-tab");
var secondTab = document.getElementById("second-tab");
var thirdTab = document.getElementById("third-tab");

var firstList = document.getElementById("first-list");
var secondList = document.getElementById("second-list");
var thirdList = document.getElementById("third-list");

firstList.style.display = "flex";
secondList.style.display = "none";
thirdList.style.display = "none";

firstTab.addEventListener('click', function(event) {
  event.preventDefault();
  firstTab.classList.add("user-profile__tab--active");
  secondTab.classList.remove("user-profile__tab--active");
  thirdTab.classList.remove("user-profile__tab--active");
  firstList.style.display = "flex";
  secondList.style.display = "none";
  thirdList.style.display = "none";
})

secondTab.addEventListener('click', function(event) {
  event.preventDefault();
  secondTab.classList.add("user-profile__tab--active");
  firstTab.classList.remove("user-profile__tab--active");
  thirdTab.classList.remove("user-profile__tab--active");
  secondList.style.display = "flex";
  firstList.style.display = "none";  
  thirdList.style.display = "none";
})

thirdTab.addEventListener('click', function(event) {
  event.preventDefault();
  thirdTab.classList.add("user-profile__tab--active");
  firstTab.classList.remove("user-profile__tab--active");
  secondTab.classList.remove("user-profile__tab--active");
  thirdList.style.display = "flex";
  secondList.style.display = "none";
  firstList.style.display = "none";    
})