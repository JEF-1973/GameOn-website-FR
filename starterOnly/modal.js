function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground")
const modalContent = document.querySelector(".content")
const infoForm = document.getElementById("form")
const modalBtn = document.querySelectorAll(".modal-btn")
const formData = document.querySelectorAll(".formData") 
const btnClose = document.querySelector("#btn-close")
const submitBtn = document.querySelector(".btn-submit")

const thankYouModal = document.getElementById("thankyou")
// const closeModal = document.querySelector(".close")
//const closebuttonModal = document.querySelector(".btn-close")

// form elements
const firstNameInput = document.querySelector("#first-name")
const lastNameInput = document.querySelector("#last-name")
const emailInput = document.querySelector("#your-email")
const dateInput = document.querySelector("#your-birthdate")
const quantiteInput =document.querySelector("#quantity")
const locationRadio = document.getElementsByName("location")
const conditionCheck = document.querySelector("#checkbox1");

const form = document.getElementById("form") // pas besoin de # avec getElementById



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))



form.addEventListener("submit",function(e){
  e.preventDefault()
  const prenomValide = checkPrenom()
  const nomValide = checkNom()
  const mailValide =checkMail()
  const dateValide = checkDate()
  const quantiteValide = checkNumber()
  const locationValide = checkOption()
  const conditionValide = checkCondition()

  
  if (!prenomValide || !nomValide  || !mailValide || !dateValide  || !quantiteValide || !locationValide )
  {
    console.log("Veuillez saisir tous les champs correctement")
  }
  else if (!conditionValide){
    console.log("Veuillez accepter les conditions")
  }
  else {
    // lancer la feuille de validation
    // ici il ne faut pas lancer une nouvelle modale mais faire un display 
    //.none de la modal actuelle puis un inner html pour afficher le message
    //launchModal2()
    //formData.style.display = "none" //hide modal form
    //infoForm.style.display = "inline"
    infoForm.style.display="none"
    // modalContent.style.display="none"
    thankYouModal.style.display = "inline"
    firstNameInput.value=""
    lastNameInput.value=""
    emailInput.value=""
    dateInput.value=""
    quantiteInput.value=""
    locationRadio.value=""
    
    
    // thankYouModal.style.display = "inline" //show modal thank you
    // modalbg.innerHTML='<h1>Bonjour à tous</h1>'

    // remplacer par 
    console.log("C'est OK !")
    
  }
})
    

btnClose.addEventListener("click",closeModal)



// control first name field
firstNameInput.addEventListener("input",checkPrenom)
 
function checkPrenom(){
  const prenom = firstNameInput.value
  if (prenom.length<2 ||  prenom == null){
    firstNameInput.focus()
    document.getElementById("erreurPrenom").style.visibility = 'visible'
    firstNameInput.setAttribute("data-error-visible", "true")
    return false
  }
  else{
    document.getElementById("erreurPrenom").style.visibility = 'hidden'
    firstNameInput.setAttribute("data-error-visible", "false")
    return true
  }
}

// control last name field
lastNameInput.addEventListener("input",checkNom)

function checkNom(){
  const nom = lastNameInput.value
  if (nom.length<2 ||  nom == null){
    lastNameInput.focus()
    document.getElementById("erreurNom").style.visibility = 'visible'
    lastNameInput.setAttribute("data-error-visible", "true")
    return false
  }
  else{
    document.getElementById("erreurNom").style.visibility = 'hidden'
    lastNameInput.setAttribute("data-error-visible", "false")
    return true
  }
}

// control email field
emailInput.addEventListener("input",checkMail)

function checkMail(){
  const adressMail = emailInput.value;
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(adressMail))
    {
      document.getElementById("erreurMail").style.visibility = 'hidden'
      emailInput.setAttribute("data-error-visible", "false")
      return true
    }
  emailInput.focus()
  document.getElementById("erreurMail").style.visibility = 'visible'
  emailInput.setAttribute("data-error-visible", "true")
  return false
}

//dateInput.addEventListener("focusout",checkDate)
//control date field
function checkDate(){
  const birthdate = dateInput.value;
  if (birthdate != "")
    {
      document.getElementById("erreurDate").style.visibility = 'hidden'
      dateInput.setAttribute("data-error-visible", "false")
      return true
    }
  dateInput.focus()
  document.getElementById("erreurDate").style.visibility = 'visible'
  dateInput.setAttribute("data-error-visible", "true")
  return false
}


//fonction checkNumber qui controle qu'on a bien un nombre saisi
function checkNumber(){
  const quantite = quantiteInput.value;
  if (quantite !='')
    {
      document.getElementById("erreurNumber").style.visibility = 'hidden'
      quantiteInput.setAttribute("data-error-visible", "false")
      return true
    }
  quantiteInput.focus()
  document.getElementById("erreurNumber").style.visibility = 'visible'
  quantiteInput.setAttribute("data-error-visible", "true")
  return false
}


// fonction checkOption qui controle qu'un option radio a bien été choisi

function checkOption(){
  
  let villeChoisie = false
  for( i = 0; i < locationRadio.length; i++){
   if(locationRadio[i].checked){
    villeChoisie = true
   }
  }

  if (villeChoisie)
  {
    document.getElementById("erreurOption").style.visibility = 'hidden'
    return true 
    }
  document.getElementById("erreurOption").style.visibility = 'visible'
  return false
}


// fonction checkCondition qui vérifie que les conditions ont été acceptées
function checkCondition(){
if (conditionCheck.checked)
  {
  document.getElementById("erreurCheck").style.visibility = 'hidden'
  return true 
  }
document.getElementById("erreurCheck").style.visibility = 'visible'
return false
}



// launch modal form
function launchModal() {
  modalbg.style.display = "block"
  infoForm.style.display = "inline"; //show form
  thankYouModal.style.display = "none"; //hide thank you
  
}



//close the modal form
function closeModal(){
  modalbg.style.display="none"
}


