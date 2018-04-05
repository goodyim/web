(function () {
  function HTMLCollectionToArray (HTMLCollection) {
    return Array.prototype.slice.call(HTMLCollection)
  }

  var actionsBtns = HTMLCollectionToArray(document.getElementsByClassName('actions-btn'))
  actionsBtns.map(actionBtn => {
    var btn = actionBtn.querySelector('.actions-btn__btn');
    console.log('btn', btn)
    var tooltip = actionBtn.querySelector('.actions-btn__tooltip');

    btn.addEventListener('click', (e) => {
      tooltip.classList.toggle('actions-btn__tooltip--active')
    })
  })

})();
