(function () {

  function HTMLCollectionToArray (HTMLCollection) {
    return Array.prototype.slice.call(HTMLCollection)
  }
  
  var textItems = HTMLCollectionToArray(document.getElementsByClassName('notifications__message-text'))

  textItems.map(function(item, i) {
    if(item.clientHeight > 72) {
      item.classList.add('notifications__message-text--withgradient')
    }
  })

})();