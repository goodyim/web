(function () {

  function HTMLCollectionToArray (HTMLCollection) {
    return Array.prototype.slice.call(HTMLCollection)
  }

  var buttons = document.getElementsByClassName('actions-btn__btn')
  var firstBtns = HTMLCollectionToArray(document.getElementsByClassName('.actions-btn__list')).map((el) => el.children[0])
  

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', openMoreActionsPopup)
  }

  for (var i = 0; i < firstBtns.length; i++) {
    firstBtns[i].addEventListener('mouseover', mouseoverFirstElement)
    firstBtns[i].addEventListener('mouseleave', mouseleaveFirstElement)
  }

  function openMoreActionsPopup () {
    this.classList.toggle('actions-btn__btn--active')
  }

  function mouseoverFirstElement () {
    this.parentNode.parentNode.classList.add('actions-btn__tooltip--active')
  }

  function mouseleaveFirstElement () {
    this.parentNode.parentNode.classList.remove('actions-btn__tooltip--active')
  }

})();
