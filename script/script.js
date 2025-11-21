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

// ophalen van kinderen 
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
fetch("https://o-apiandclient-render.onrender.com/kinderen")
    .then((data) => data.json())
    .then((cadeaus) => {
        
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

// geschenk toevoegen knop
btnToevoegenGeschenk.addEventListener("click", () => {

})

// geschenk verwijderen knop
btnWisGeschenk.addEventListener("click", () => {
  const id = selectGeschenken.value;
  const options = {
    method: "DELETE",
    headers: { "Content-type": "application/json" }
  };

  fetch("https://o-apiandclient-render.onrender.com/geschenken" + id, options)
    .then((info) => info.json())
    .then((geschenk) => {
      console.log("Verwijderd:", geschenk);
    });
});

// kind toevoegen knop
btnVoegKind.addEventListener("click", () => {
  const options = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      id: 0,
      voornaam: "string",
      achternaam: "string"
    }),
  };

  fetch("https://o-apiandclient-render.onrender.com/kinderen", options)
    .then((data) => data.json())
    .then((kind) => {
      console.log(kind);
    });
});