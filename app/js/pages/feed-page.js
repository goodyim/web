if (window.jQuery || typeof jQuery !== 'undefined') {
  $(function() {
    // $('#registration-datapicker').datepicker()
    $('#post-create__form-help').selectmenu({ icons: { button: 'post-create__form-help-icon' } })
  });
}

(function () {

  function HTMLCollectionToArray (HTMLCollection) {
    return Array.prototype.slice.call(HTMLCollection)
  }

  var ACTIVE_CLASSES = {
    tab: 'feed__tab--active'
  }

  var tabs = HTMLCollectionToArray(document.getElementsByClassName('feed__tab'))

  tabs[0].classList.add(ACTIVE_CLASSES.tab)

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', setActiveTab)
  }

  function setActiveTab () {
    tabs.map((el) => el.classList.remove(ACTIVE_CLASSES.tab))
    this.classList.add(ACTIVE_CLASSES.tab)
  }

  function getActiveTabIndex (tab) {
    return tabs.indexOf(tab)
  }

})();

// adding things to template
(function () {
  var btn = document.getElementById('add-things')
  var btnAdd = document.getElementById('add-thing')
  var input = document.getElementById('post-create__form-things-field')
  var container = input.parentNode
  var thingsList = document.getElementById('things-list')

  btn.addEventListener('click', toggleFieldVisibility)
  btnAdd.addEventListener('click', addElementToTemplate)

  function toggleFieldVisibility () {
    container.classList.toggle('post-create__form-things-field--show')
    input.focus()
  }

  function addElementToTemplate () {
    var value = input.value.trim()

    if (value !== '') {
      var div = document.createElement('div')
      div.classList.add('post-create__form-things-item')
      div.classList.add('post-create__form-things-item--active')
      div.dataset.thing = value
      div.innerHTML = value
      thingsList.appendChild(div)
      input.value = ''
    } else {
      input.value = ''
    }
  }
  
  thingsList.addEventListener('click', thingTogleStatus)

  function thingTogleStatus () {
    var target = event.target
    
    if (target.classList.contains('post-create__form-things-item')) {
      target.classList.toggle('post-create__form-things-item--active')
    } 
  }

})();

(function () {
  var btnEvent = document.getElementById('event-attach-file')
  var btnNote = document.getElementById('note-attach-file')

  btnEvent.addEventListener('change', addActiveStatusEvent)
  btnNote.addEventListener('change', addActiveStatusNote)

  function addActiveStatusEvent () {
    btnEvent.parentNode.classList.add('post-create__form-attach-btn-file--active')
  }
  function addActiveStatusNote () {
    btnNote.parentNode.classList.add('post-create__form-attach-btn-file--active')
  }
})();

(function () {
  var btn = document.getElementById('event-attach-people')
  var list = document.getElementById('event-attach-people-list')

  btn.addEventListener('click', addActiveStatuss)

  function addActiveStatuss () {
    list.classList.toggle('post-create__form-attach-people--visible')
  }
})();

(function () {
  function HTMLCollectionToArray (HTMLCollection) {
    return Array.prototype.slice.call(HTMLCollection)
  }

  var items = HTMLCollectionToArray(document.getElementsByClassName('post-create__form-attach-people-item'))

  items.map((el) => el.addEventListener('click', toggleActiveStatus))

  function toggleActiveStatus () {
    this.classList.toggle('post-create__form-attach-people-item--checked')
  }
})();

(function () {
  var items = document.getElementsByClassName('post-create__form-privacy-icon')
  var btn = document.getElementById('change-privacy')
  var btnNote = document.getElementById('note-change-privacy')

  btn.onclick = function () {
    this.classList.toggle('post-create__form-privacy-btn--private')
    this.dataset.private = !JSON.parse(this.dataset.private)
  }

  btnNote.onclick = function () {
    this.classList.toggle('post-create__form-privacy-btn--private')
    this.dataset.private = !JSON.parse(this.dataset.private)
  }

})();

(function () {
  var disabled = document.getElementById('create-disabled-tab')
  var active = document.getElementById('create-active-tab')
  var container = document.getElementById('create-post-body')
  
  disabled.onclick = function () {
    var disabledText = document.getElementById('create-disabled-tab').textContent
    var activeText = document.getElementById('create-active-tab').textContent
    
    disabled.textContent = activeText
    active.textContent = disabledText
    container.classList.toggle('post-create__body--note')
  }

})();
