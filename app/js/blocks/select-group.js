(function() {
  function HTMLCollectionToArray(HTMLCollection) {
    return Array.prototype.slice.call(HTMLCollection);
  }

  function onSelectClickHandler(e) {
    this.classList.toggle('select--opened');
  } 

  var selects = HTMLCollectionToArray(document.getElementsByClassName('select'));
  selects.map(select => {
    select.addEventListener('click', onSelectClickHandler);
  })
  
})();