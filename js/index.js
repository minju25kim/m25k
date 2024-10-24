document.addEventListener("DOMContentLoaded", function () {
  const ul = document.createElement("ul");
  const mdListContainer = document.getElementById("md-list");
  const contentDiv = document.getElementById("content");

  fetch("../public/mdFiles.json")
    .then((response) => response.json())
    .then((mdFiles) => {
      mdFiles.forEach((file) => {
        const li = document.createElement("li");
        const link = document.createElement("a");

        link.href = `#`;
        link.textContent = file.name.slice(0, -3);

        link.addEventListener("click", function (event) {
          event.preventDefault();

          fetch(`../public/md/${file.name}`)
            .then((response) => response.text())
            .then((markdown) => {
              if (typeof marked === "function") {
                const htmlContent = marked(markdown);
                contentDiv.innerHTML = htmlContent;
              } else {
                console.error("marked is not a function.");
              }
            })
            .catch((error) => {
              console.error("Error fetching Markdown file:", error);
              contentDiv.innerHTML = `<p>Error loading file.</p>`;
            });
        });

        li.appendChild(link);
        ul.appendChild(li);
      });

      mdListContainer.appendChild(ul);
    })
    .catch((error) => {
      console.error("Error fetching file list:", error);
      mdListContainer.innerHTML = `<p>Error loading file list.</p>`;
    });
});