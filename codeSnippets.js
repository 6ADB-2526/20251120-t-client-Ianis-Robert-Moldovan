  const options = {
    method: "...",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  };


  fetch(URL, option)
  .then(result => result.JSON())
  .then(data => console.log(data)
  )


// ----------------------

//   Alle form elementen ophalen en in een object steken

// haal alle form elementen op
var formData = new FormData(frmAanmaken);
// output as an object
const spelerAdd = Object.fromEntries(formData);