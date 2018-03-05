(function () {

  function HTMLCollectionToArray (HTMLCollection) {
    return Array.prototype.slice.call(HTMLCollection)
  }

  var buttons = document.getElementsByClassName('card__actions-btn')
  var firstBtns = HTMLCollectionToArray(document.getElementsByClassName('card__actions-list')).map((el) => el.children[0])
  

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', openMoreActionsPopup)
  }

  for (var i = 0; i < firstBtns.length; i++) {
    firstBtns[i].addEventListener('mouseover', mouseoverFirstElement)
    firstBtns[i].addEventListener('mouseleave', mouseleaveFirstElement)
  }

  function openMoreActionsPopup () {
    this.classList.toggle('card__actions-btn--active')
  }

  function mouseoverFirstElement () {
    this.parentNode.parentNode.classList.add('card__actions-tooltip--active')
  }

  function mouseleaveFirstElement () {
    this.parentNode.parentNode.classList.remove('card__actions-tooltip--active')
  }

})();
