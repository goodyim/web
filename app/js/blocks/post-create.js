(function() {
  //expand textarea in post-create if quantity of symbols greater then 20 & show hint if quantity of symbols greater then 50:

  function HTMLCollectionToArray (HTMLCollection) {
    return Array.prototype.slice.call(HTMLCollection)
  }

  var textBlocks = HTMLCollectionToArray(document.getElementsByClassName('post-create__text-block'))
  

  textBlocks.map(textblock => {
    var textArea = textblock.getElementsByClassName('post-create__form-message-textarea')[0];
    var hint = textblock.getElementsByClassName('post-create__hint')[0];

    textArea.addEventListener('keydown', (e) => {
      
      var arr = e.target.value.split('')
          
      if(arr.length > 20) {
        textArea.classList.add('post-create__form-message-textarea--extended') 
      } 
      if(arr.length < 20) {
        textArea.classList.remove('post-create__form-message-textarea--extended') 
      } 
      if(arr.length == 50) {
        hint.classList.add('post-create__hint--show')  
      } 
      if(arr.length < 50) {
        hint.classList.remove('post-create__hint--show')  
      } 
    })

    hint.addEventListener('click', (e) => {
      hint.classList.remove('post-create__hint--show')
    });
  })

  //open modal witch short notes:

  var addNoteBtn = document.querySelector('.post-create__fast-add-btn');
  var shortNotesModal = document.querySelector('.post-create__fast-add');  
  var cancelShortNotesList = document.querySelector('.post-create__fast-add-cancel');

  addNoteBtn.addEventListener('click', (e) => {
    e.preventDefault()
    shortNotesModal.classList.toggle('post-create__fast-add--active')
  });

  cancelShortNotesList.addEventListener('click', (e) => {
    e.preventDefault()
    shortNotesModal.classList.toggle('post-create__fast-add--active')
  });

  

  

})();

// adding things to template

(function () {

  //input with tags:
  var tagInput = document.querySelector('.post-create__hidden-tag-input');
  
  var btn = document.getElementById('add-things')
  var btnAdd = document.getElementById('add-thing')
  var input = document.getElementById('post-create__form-things-field')
  var container = input.parentNode
  var thingsList = document.getElementById('things-list')

  btn.addEventListener('click', (e) => {
    btn.classList.toggle('post-create__add-tag-btn--active')
    toggleFieldVisibility();
  })
  btnAdd.addEventListener('click', addElementToTemplate)

  function toggleFieldVisibility () {
    container.classList.toggle('post-create__form-things-field--show')
    input.focus()
  }

  function addElementToTemplate () {
    var value = input.value.trim()

    if (value !== '') {
      var div = document.createElement('div')
      div.classList.add('post-create__tag')
      div.classList.add('post-create__tag--active')
      div.dataset.thing = value
      tagInput.value = tagInput.value + ', ' + value
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
    
    if (target.classList.contains('post-create__tag')) {
      target.classList.toggle('post-create__tag--active')
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
    list.classList.toggle('post-create__people-list--visible')
  }
})();

(function () {
  function HTMLCollectionToArray (HTMLCollection) {
    return Array.prototype.slice.call(HTMLCollection)
  }

  var items = HTMLCollectionToArray(document.getElementsByClassName('post-create__form-attach-people-item'))

  items.map((el) => el.addEventListener('click', toggleActiveStatus))

  function toggleActiveStatus () {
    if (this === this.parentNode.children[0]) {
      this.parentNode.parentNode.classList.toggle('post-create__form-attach-people--active')
    }
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