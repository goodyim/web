var classes = {
  mobile_navigation_open: 'mobile-navigation-open',
  transition: 'mobile-navigation-open-with-transition',
  navigation_is_show: 'header__navigation--is-show',
  content_clickable: 'content--clickable'

}
var body = document.getElementsByTagName('body')[0]
var content = document.getElementsByClassName('content')[0]
var navigation = document.getElementById('header__navigation')

function toggleNavigation() {
  if (body.classList.contains(classes.mobile_navigation_open)){
    body.classList.remove(classes.mobile_navigation_open)
    content.classList.remove(classes.content_clickable)
    
    setTimeout(function(){
      navigation.classList.remove(classes.navigation_is_show)
      body.classList.remove(classes.transition)
    }, 300)
  
  } else {
    navigation.classList.add(classes.navigation_is_show)
    body.classList.add(classes.mobile_navigation_open)
    body.classList.add(classes.transition)
    
    setTimeout(function(){
      content.classList.add(classes.content_clickable)
    }, 100)
  }
}

content.onclick = function() {
  var target = event.target;
  
  if (content.classList.contains(classes.content_clickable)){
    while (true) {
      if (navigation.contains(target)) {
        return false
      } else {
        toggleNavigation()
        return false;
      };
  
      target = target.parentNode;
    };
  }
}
