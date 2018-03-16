(function() {

  function HTMLCollectionToArray(HTMLCollecton) {
    return Array.prototype.slice.call(HTMLCollecton)
  }

  //Add or remove participants

  var participantsList = document.getElementById('participants');
  var participants = HTMLCollectionToArray(document.getElementsByClassName('edit-event__participant-item'));
  var newParticipants = HTMLCollectionToArray(document.getElementsByClassName('edit-event__add-participant-item'))
    
  newParticipants.map(function(item){
    item.addEventListener('click', () => replaceItem(item))
  }) 

  participants.map(function(item){
    item.addEventListener('click', () => deleteItem(item))
  }) 

  function replaceItem(item) {
    item.classList.remove('edit-event__add-participant-item');
    item.classList.add('edit-event__participant-item');
    item.addEventListener('click', () => deleteItem(item))
    participantsList.appendChild(item);
  }

  function deleteItem(item) {
    participantsList.removeChild(item);
  }

  //Enable editable mode

  var editBtn = document.getElementById('edit-btn')
  var editableTitle = document.getElementById('editable-title')
  var editableText = document.getElementById('editable-text')
  var tags = HTMLCollectionToArray(document.getElementsByClassName('edit-event__tag'));
  var tagsList = document.getElementById('tags-list')
  
  editBtn.addEventListener('click', function(e) {
    editableTitle.disabled = false
    editableTitle.classList.add('edit-event__editable-title--edit-enable')
    editableText.disabled = false
    editableText.classList.add('edit-event__text--edit-enable')

    tags.map(function(item) {
      item.classList.add('edit-event__tag--removable')
      item.addEventListener('click', () => tagsList.removeChild(item))
    })
  })

  //Status change

  var tabs = HTMLCollectionToArray(document.getElementsByClassName('edit-event__status-item'));

  tabs.map(item => {
    item.addEventListener('click', setActiveTab)
  })

  function setActiveTab () {
    tabs.map((el) => el.classList.remove('edit-event__status-item--active'))
    this.classList.add('edit-event__status-item--active')
  }

})();