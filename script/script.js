
// selecteren van alle html elementen
const divSelectKind = document.querySelector("#selKind")
const selectKinderen = document.querySelector("#kinderen")
const divReedsgeschenk = document.querySelector("#reedsgeschenk")
const formAddGeschenk = document.querySelector("#addGeschenk")
const formVerwijderGeschenk = document.querySelector("#verwijderGeschenk")
const formAddKind = document.querySelector("#addKind")

// selecteren van submits uit html
const btnToevoegenGeschenk = document.querySelector("#btnToevoegenGeschenk")
const btnWisGeschenk = document.querySelector("#btnWisGeschenk")
const btnVoegKind = document.querySelector("#btnVoegKind")

// ophalen van externe informatie
fetch("https://o-apiandclient-render.onrender.com/kinderen")
    .then(info)
    .then((kinderen) => {
        kinderen.forEach(kind => {
            const newOption = document.createElement("option")
            newOption.value = kind.id
            newOption.innerHTML = kind.achternaam
            selectKinderen.appendChild(newOption)
        });
    })


// geschenk van het selecteerde 