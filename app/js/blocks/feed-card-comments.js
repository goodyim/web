(function() {
  function HTMLCollectionToArray(HTMLCollection) {
    return Array.prototype.slice.call(HTMLCollection);
  }

  var textarea = HTMLCollectionToArray(document.querySelectorAll('.card-comments__add-comment-textarea'));
  var hiddenBlock = HTMLCollectionToArray(document.querySelectorAll('.card-comments__hidden-block'));

  

  textarea.map((textarea) => {
    const onKeyDownHandler = (e) => {
      var text = textarea.value;
      hiddenBlock[i].innerText = text;
    }  


    textarea.addEventListener('keyup', onKeyDownHandler);
  });
})();