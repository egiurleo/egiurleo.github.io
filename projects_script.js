PROJECTS = [
  {
    title: "FreeFrom Policy Map",
    description: "I'm currently working on a new project with <a href='https://ragtag.org'>Ragtag</a> and <a href='https://freefrom.org'>FreeFrom</a>: The FreeFrom Policy Map. The policy map will be an interactive map of the US where each state is graded on its laws that allow survivors of domestic violence to accumulate wealth. This site will serve as an educational tool for domestic violence advocates seeking to craft policies that make it easier for survivors to achieve financial independence.<br /><br /> The FreeFrom Policy Map will be a React single-page app with a Python Flask backend. I am serving as the technical project lead and have written and architected most of the backend.",
    links: [
      {
        text: "frontend code",
        url: "https://github.com/RagtagOpen/freefrom-map-frontend"
      },
      {
        text: "backend code",
        url: "https://github.com/RagtagOpen/freefrom-map-backend"
      },
    ]
  },
  {
    title: "FreeFrom Compensation Compass",
    description: "<a href='https://freefrom.org'>FreeFrom</a> is an organization that helps survivors of domestic violence achieve healing through financial independence. In 2019, I volunteered with <a href='https://ragtag.org'>Ragtag</a> to build the <a href='https://compass.freefrom.org'>FreeFrom Compensation Compass</a>: a site that connects survivors with resources to help them acquire financial compensation. The Compensation Compass has been used by over 100,000 survivors all across the country.<br /><br />The Compensation Compass is a React single-page application with a Rails API backend. I served as a technical lead on the project and wrote most of the backend code (along with a few contributions to the frontend).",
    links: [
      {
        text: "compensation compass",
        url: "https://compass.freefrom.org"
      },
      {
        text: "frontend code",
        url: "https://github.com/RagtagOpen/freefrom-compensation-web"
      },
      {
        text: "backend code",
        url: "https://github.com/RagtagOpen/freefrom-compensation-api"
      },
      {
        text: "refinery29 article",
        url: "https://www.refinery29.com/en-us/compensation-compass-financial-support-domestic-violence"
      },
    ]
  }
];

OLDER = []

function makeChip(link) {
  const anchor = document.createElement("a");
  anchor.href = link.url;

  const chip = document.createElement("div");
  chip.classList.add("chip");

  chip.append(link.text);
  chip.insertAdjacentHTML(
    "beforeend",
    '<svg viewBox="0 0 100 125" width="25px" height="25px"><g transform="translate(-25, 12.5)"><path d="M82,50H74V70a4,4,0,0,1-4,4H30a4,4,0,0,1-4-4V30a4,4,0,0,1,4-4H50V18H30A12,12,0,0,0,18,30V70A12,12,0,0,0,30,82H70A12,12,0,0,0,82,70Z"/><path d="M82,22a4,4,0,0,0-4-4H58v8H68.34l-24,24L50,55.66l24-24V42h8Z"/></g></svg>'
  );

  anchor.append(chip);

  return anchor;
}

function makeProjectDiv(project) {
  const container = document.createElement("div");
  container.classList.add("project");

  const title = document.createElement("h2");
  title.innerHTML = project.title;

  const description = document.createElement("p");
  description.innerHTML = project.description;

  const chips = document.createElement("div");
  chips.classList.add("chips");
  project.links.forEach((link) => {
    var chip = makeChip(link);
    chips.append(chip);
  });

  container.append(title, description, chips);

  return container;
}

document.addEventListener("DOMContentLoaded", function () {
  const projectsContainer = document.getElementById("projects");
  PROJECTS.forEach((project) => {
    const projectDiv = makeProjectDiv(project);
    projectsContainer.append(projectDiv);
  });

  // const olderProjectsContainer = document.getElementById("older-projects");
  // const ul = document.createElement("ul");

  // OLDER.forEach((project) => {
  //   const li = document.createElement("li");
  //   const a = document.createElement("a");

  //   a.href = project.url;
  //   a.innerHTML = project.text;

  //   li.append(a);
  //   ul.append(li);
  // })

  // olderProjectsContainer.append(ul);
});
