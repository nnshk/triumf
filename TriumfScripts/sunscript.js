var animation = bodymovin.loadAnimation({
   container: document.getElementById('sunanim'),
   renderer:'svg',
   loop: true,
   autoplay: true,
   path: 'TriumfScripts/sundata.json',
   
   })
   
   
   function displayradiationtext()
   {
       document.getElementById('RadiationText').style=" transition: opacity 2s; opacity:1"; 
       animationDuration = "3s";
   }
   
   function hideradiationtext()
   {
       document.getElementById('RadiationText').style="transition: opacity 0.5s; opacity:0";
   
   }



   function displayAirplaneText()
   {
       document.getElementById('AirplaneText').style=" transition: opacity 2s; opacity:1"; 
       animationDuration = "3s";
   }
   
   function hideradiationtext()
   {
       document.getElementById('AirplaneText').style="transition: opacity 0.5s; opacity:0";
   
   }


   const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}