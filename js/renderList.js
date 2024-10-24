document.addEventListener("DOMContentLoaded", () => {
  const listContainer = document.getElementById("markdown-list");

  fetch("./public/md_files.json")
    .then((response) => response.json())
    .then((files) => {
      files.sort((a, b) => {
        const numA = parseInt(a.match(/^\d+/)[0], 10);
        const numB = parseInt(b.match(/^\d+/)[0], 10);
        return numA - numB;
      });

      files.forEach((fileName) => {
        const filePath = `./public/md/${fileName}`;

        const subject = fileName.replace(".md", "");

        const link = document.createElement("a");
        link.href = `view.html?subject=${encodeURIComponent(
          subject
        )}&file=${encodeURIComponent(filePath)}`;
        link.textContent = subject;
        const listItem = document.createElement("div");
        listItem.appendChild(link);
        listContainer.appendChild(listItem);
      });
    })
    .catch((error) =>
      console.error("Error fetching the Markdown file list:", error)
    );
});
