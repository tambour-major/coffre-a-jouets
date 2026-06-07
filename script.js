fetch("texte.txt")
  .then(response => {
    if (!response.ok) throw new Error("HTTP " + response.status);
    return response.text();
  })
  .then(text => {

    const container = document.getElementById("fragments");

    const blocks = text.split("\n\n");

    blocks.forEach((block, i) => {

      const p = document.createElement("p");
      p.innerHTML = block.replace(/\n/g, "<br>");
      container.appendChild(p);

      if (i < blocks.length - 1) {
        const spacer = document.createElement("div");
        spacer.className = "spacer";
        container.appendChild(spacer);
      }

    });

  })
  .catch(err => {
    console.error("Erreur:", err);
  });
