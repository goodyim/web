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

if (content) {
  content.onclick = function() {
    var target = event.target
  
    if (content.classList.contains(classes.content_clickable)){
      while (true) {
        if (navigation.contains(target)) {
          return false
        } else {
          toggleNavigation()
          return false
        }
  
        target = target.parentNode
      }
    }
  }
}

(function() {
  //expand textarea in post-crete if quantity of symbols greater then 27 & show hint if if quantity of symbols greater then 62:

  function HTMLCollectionToArray (HTMLCollection) {
    return Array.prototype.slice.call(HTMLCollection)
  }

  var textBlocks = HTMLCollectionToArray(document.getElementsByClassName('post-create__text-block'))

  textBlocks.map(textblock => {
    var textArea = textblock.getElementsByClassName('post-create__form-message-textarea')[0];
    textArea.addEventListener('keydown', (e) => {
      var arr = e.target.value.split('')
      var counter = 0
      arr.map(item => counter++) 
    
      if(counter > 20) {
        textArea.classList.add('post-create__form-message-textarea--extended') 
      } 
      if(counter < 20) {
        textArea.classList.remove('post-create__form-message-textarea--extended') 
      } 
      if(counter == 50) {
        hint.classList.add('post-create__hint--show')  
      } 
    })
    var hint = textblock.getElementsByClassName('post-create__hint')[0];
    console.log('hint', hint)

    hint.addEventListener('click', (e) => {
      hint.classList.remove('post-create__hint--show')
    });
  })


  //open modal witch short notes:

  var addNoteBtn = document.querySelector('.post-create__fast-add-btn');
  var shortNotesModal = document.querySelector('.post-create__fast-add');  

  addNoteBtn.addEventListener('click', (e) => {
    e.preventDefault()
    shortNotesModal.classList.toggle('post-create__fast-add--active')
  });




})();
