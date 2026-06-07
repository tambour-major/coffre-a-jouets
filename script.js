fetch("texte.txt")
  .then(response => {
    console.log("STATUS:", response.status);
    return response.text();
  })
  .then(text => {
    console.log("LONGUEUR TEXTE:", text.length);
  })
  .catch(err => {
    console.error("ERREUR FETCH:", err);
  });
