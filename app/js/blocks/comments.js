(function() {
  function HTMLCollectionToArray (HTMLCollection) {
    return Array.prototype.slice.call(HTMLCollection)
  }

  var cards = HTMLCollectionToArray(document.getElementsByClassName('bestcard'))

  //sort out all cards on the page:

  cards.map(card => {

    var commentBtn = card.querySelector('.actions__comments-btn');
    var commentsBlock = card.querySelector('.card-comments');

    commentBtn.addEventListener('click', (e) => {
      commentsBlock.classList.toggle('card-comments--active')

      if(commentsBlock.classList.contains('card-comments--active')) {        
        commentsBlock.style.maxHeight = commentsBlock.scrollHeight + 25 + 'px'
      } else {
        commentsBlock.style.maxHeight = '0px'
      }      
    })

    // each actions/tooltip inside comment inside card:

    var commentsActions = HTMLCollectionToArray(commentsBlock.getElementsByClassName('comments-actions-btn'));    

    commentsActions.map(actions => {
      var btn = actions.querySelector('.comments-actions-btn__btn');
      var tooltip = actions.querySelector('.comments-actions-btn__tooltip');

      btn.addEventListener('click', (e) => {
        tooltip.classList.toggle('comments-actions-btn__tooltip--active')
      })
    })

    // like buttons:

    var likeBtns = HTMLCollectionToArray(commentsBlock.getElementsByClassName('card-comments__comment-like-btn'));    

    likeBtns.map(likeBtn => {
      likeBtn.addEventListener('click', (e) => {
        likeBtn.classList.toggle('card-comments__comment-like-btn--active')
      })
    })  

    // expand comments-list:

    var expandCommentsBtn = card.querySelector('.card-comments__expand-btn');
    var commentsList = card.querySelector('.card-comments__list');
  
    expandCommentsBtn.addEventListener('click', (e) => {
      expandCommentsBtn.classList.toggle('card-comments__expand-btn--active')
      commentsList.classList.toggle('card-comments__list--active') 

      if(commentsList.classList.contains('card-comments__list--active')) {        
        expandBlock(commentsList, '')        
        expandBlock(commentsBlock, 36)          
      } else {
        commentsList.style.maxHeight = '98px'
      }   
    })

    function expandBlock(parentBlock, additionalValue) {
      parentBlock.style.maxHeight = parentBlock.scrollHeight + 'px'
    }

  })

})();