// You can add this script to page, where actions-btnS will be used,
// it adds functionality to open/close tooltip to all action-btnS, in each block,
// where they are

(function () {
  function HTMLCollectionToArray (HTMLCollection) {
    return Array.prototype.slice.call(HTMLCollection)
  }

  var actionsBtns = HTMLCollectionToArray(document.getElementsByClassName('actions-btn'))
  actionsBtns.map(actionBtn => {
    var btn = actionBtn.querySelector('.actions-btn__btn');
    var tooltip = actionBtn.querySelector('.actions-btn__tooltip');

    btn.addEventListener('click', (e) => {
      tooltip.classList.toggle('actions-btn__tooltip--active')
    })
  })

})();
