let profilePicture = document.querySelector(".card__profile-picture")

profilePicture.addEventListener('mouseover', showProfilePicture)
profilePicture.addEventListener('mouseout', hideProfilePicture)


function a(top, left, src) {

    let profileCard = document.createElement('img')
    profileCard.classList.add('profileCard')
    profileCard.style.top = top - 175 + 'px';
    profileCard.style.left = left + 40 + 'px';
    profileCard.src = src;

    document.body.append(profileCard)
}

function hideProfilePicture() {
    if(document.querySelector(".profileCard")) document.querySelector(".profileCard").remove()
    setTimeout(()=>{document.querySelector(".profileCard").remove();}, 300)
}

function showProfilePicture() {


    let coordinates = this.getBoundingClientRect()
    let src = this.src

    setTimeout(()=>{a(coordinates.top, coordinates.left, src)}, 300)

}

let modalButton = document.querySelector('button[data-modal]')

modalButton.addEventListener('click', function(event) {
    let card = document.querySelector(".card__social")
    
    card.style.display = (card.style.display == 'flex') ?  'none' : 'flex'

    let top = Math.trunc(this.getBoundingClientRect().top - card.getBoundingClientRect().height - 27)
    let left = Math.trunc(this.getBoundingClientRect().left - ((card.getBoundingClientRect().width - this.getBoundingClientRect().width ) / 2))
   
    if (window.innerWidth < 800) {
        let CARD = document.querySelector('.card__content')
        let CARD_WIDTH = CARD.getBoundingClientRect().width
        let CARD_HEIGHT = 80
        left = CARD.getBoundingClientRect().left
        top = CARD.getBoundingClientRect().top + CARD.getBoundingClientRect().height - CARD_HEIGHT;


        card.style.width = CARD_WIDTH + 'px';
        card.style.height = CARD_HEIGHT + 'px';

    }
    else {

        card.style.width = 248 + 'px';
        card.style.height = 55 + 'px';
       
    }
    
    card.style.left = left + 'px'
    card.style.top = top + 'px'
    
})


