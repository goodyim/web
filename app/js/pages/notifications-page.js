(function () {

  function HTMLCollectionToArray (HTMLCollection) {
    return Array.prototype.slice.call(HTMLCollection)
  }

  var textItems = HTMLCollectionToArray(document.getElementsByClassName('notifications__message-text'))

  textItems.map(function(item) {
    
    var elemHeight = parseInt(window.getComputedStyle(item).height)

    var elemScrollHeight = item.scrollHeight

    if(elemScrollHeight > elemHeight) {
      item.classList.add('notifications__message-text--withgradient')
    }
  })

})();