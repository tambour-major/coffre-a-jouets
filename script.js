fetch("texte.txt")
  .then(response => response.text())
  .then(text => {

    const container = document.getElementById("fragments");

    const blocks = text.split("\n\n"); // paragraphes

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

  });
