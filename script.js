// app.js
document.addEventListener("DOMContentLoaded", () => {
  const projectsList = document.getElementById("projects-list");

  projects.forEach((project) => {
    const projectDiv = document.createElement("a");
    projectDiv.href = project.link;
    projectDiv.target = "_blank";
    projectDiv.className = "project";

    projectDiv.innerHTML = `
        <h4><sup>(${project.id})</sup> ${project.title}</h4>
        <img width="100%" class="project__image" src="images/${project.image}" alt="${project.title}" />
        <h5>${project.tag}</h5>
        <div class="arrowBox">
          <img src="images/Arrow.svg" alt="Arrow" width="20px" />
        </div>
      `;

    projectsList.appendChild(projectDiv);
  });
});

function Marquee(selector, speed) {
  const parentSelector = document.querySelector(selector);
  const clone = parentSelector.innerHTML;
  const firstElement = parentSelector.children[0];
  let i = 0;
  console.log(firstElement);
  parentSelector.insertAdjacentHTML("beforeend", clone);
  parentSelector.insertAdjacentHTML("beforeend", clone);

  setInterval(function () {
    firstElement.style.marginLeft = `-${i}px`;
    if (i > firstElement.clientWidth) {
      i = 0;
    }
    i = i + speed;
  }, 0);
}

//after window is completed load
//1 class selector for marquee
//2 marquee speed 0.2
window.addEventListener("load", Marquee(".marquee", 0.2));
