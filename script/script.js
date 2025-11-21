// selecteren van alle html elementen
const divSelectKind = document.querySelector("#selKind")
const selectKinderen = document.querySelector("#kinderen")
const divReedsgeschenk = document.querySelector("#reedsgeschenk")
const formAddGeschenk = document.querySelector("#addGeschenk")
const formVerwijderGeschenk = document.querySelector("#verwijderGeschenk")
const formAddKind = document.querySelector("#addKind")
const selectGeschenken = document.querySelector("#geschenken")
const geschenkenVerwijderen = document.querySelector("#geschenkenVerwijderen")
const geschenkenlijst = document.querySelector("#geschenkenlijst")
// selecteren van submits uit html
const btnToevoegenGeschenk = document.querySelector("#btnToevoegenGeschenk")
const btnWisGeschenk = document.querySelector("#btnWisGeschenk")
const btnVoegKind = document.querySelector("#btnVoegKind")

// ophalen van externe informatie
fetch("https://o-apiandclient-render.onrender.com/kinderen")
    .then((data) => data.json())
    .then((kinderen) => {
        kinderen.forEach(kind => {
            const newOption = document.createElement("option")
            newOption.value = kind.id
            newOption.innerHTML = kind.achternaam
            selectKinderen.appendChild(newOption)
        });
    })

// geschenk van het selecteerde kindje
selectKinderen.addEventListener("change", (e) => {
    selecteID = e.target.value

    fetch("https://o-apiandclient-render.onrender.com/geschenken" + e.target.value)
        .then((data) => data.json())
        .then((cadeau) => {
            geschenkenlijst.innerHTML = ""
            const newP = document.createElement("P")
            newP.innerHTML = cadeau.naam
            geschenkenlijst.appendChild(newP)
        })
})

// select geschenk toevoegen
fetch("https://o-apiandclient-render.onrender.com/geschenken")
    .then((data) => data.json())
    .then((cadeautjes) => {
        cadeautjes.forEach(cadeau => {
            const newOption = document.createElement("option")
            newOption.value = cadeau.id
            newOption.innerHTML = cadeau.naam
            selectGeschenken.appendChild(newOption)
        });
    })

fetch("https://o-apiandclient-render.onrender.com/geschenken")
    .then((data) => data.json())
    .then((cadeautjes) => {
        cadeautjes.forEach(cadeau => {
            const newOption = document.createElement("option")
            newOption.value = cadeau.id
            newOption.innerHTML = cadeau.naam
            geschenkenVerwijderen.appendChild(newOption)
        });
    })

