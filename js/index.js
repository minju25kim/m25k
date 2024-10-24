const list = document.getElementById("md-list");
const content = document.getElementById("md-content");

function fetchMdList() {
  return fetch("md.json")
    .then((result) => result.json())
    .then((json) => json);
}

function fetchMd(md) {
  fetch(`md/${md}`)
    .then((response) => response.text())  
    .then((markdown) => {
      const htmlContent = marked(markdown); 
      content.innerHTML = htmlContent;      
    })
    .catch((error) => {
      console.error('Error fetching markdown:', error);  
    });
}

function createList(mdList) {
  let ul = document.createElement("ul");

  mdList.forEach((item) => {
    let li = document.createElement("li");
    let link = document.createElement("a");

    link.textContent = item.name;

    link.addEventListener("click", () => {
      fetchMd(item.name);
    });
    li.appendChild(link);
    ul.appendChild(li);
  });
  list.appendChild(ul);
}

fetchMdList().then((mdList) => createList(mdList));
