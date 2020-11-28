SPEAKING = [
  {
    title: "The Bug That Forced Me to Understand Memory Compaction",
    description:
      "A story about a user-reported bug that led me to learn all about memory management in Ruby, including how memory is allocated, Ruby's garbage collection algorithm, and finally, what memory compaction is all about!",
    links: [
      {
        text: "slides",
        url:
          "https://docs.google.com/presentation/d/1VmJyyM9dY5clrlCj8hkzkQY8DYZYM-HGYIBl5JAhUhU/edit#slide=id.g540449f56d_2_449",
      },
    ],
  },
  {
    title: "Your First Open Source Contribution",
    description:
      'A workshop for the <a href="https://codelandconf.com">Codeland 2020</a> where attendees learned about the history of open source and made their very first open source contributions.',
    links: [
      {
        text: "site",
        url: "https://codeland-open-source-workshop.vercel.app/",
      },
      {
        text: "slides",
        url:
          "https://docs.google.com/presentation/d/1nGELytl08YFVrcH4bfWQIzooOBrak28-xOrEKNC0SwI/edit#slide=id.p",
      },
      {
        text: "code",
        url: "https://github.com/egiurleo/codeland-2020",
      },
    ],
  },
  {
    title: "Successfully Onboarding a Junior Engineer in Three Steps",
    description:
      "A talk about onboarding junior engineers with the goals of building their trust, instilling confidence in their technical abilities, and enabling them to be autonomous contributors on your team.",
    links: [
      {
        text: "railsconf 2020 recording",
        date: "Apr 2020",
        url:
          "https://railsconf.com/2020/video/emily-giurleo-successfully-onboarding-a-junior-engineer-in-three-steps",
      },
      {
        text: "ruby on rails podcast, episode 316",
        date: "Apr 2020",
        url:
          "https://podcasts.apple.com/us/podcast/316-mongodb-onboarding-junior-developers-emily-giurleo/id840890158?i=1000477487494",
      },
      {
        text: "slides",
        url:
          "https://drive.google.com/file/d/1IKHnxYJ_z1C2Bk5qgeGzIvq4KCaJWbSv/view?usp=sharing",
      },
    ],
  },
];

OLDER = [
  {
    text: "Codecademy Go Cast (2019)",
    url: "https://podcasts.apple.com/us/podcast/codecademy-go-cast/id1450421834"
  },
  {
    text: "Stable Meow-age Problem (2018)",
    url: "https://glitch.com/edit/#!/stable-meowage-problem"
  }
]

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

function makeTalkDiv(talk) {
  const container = document.createElement("div");
  container.classList.add("talk");

  const title = document.createElement("h2");
  title.innerHTML = talk.title;

  const description = document.createElement("p");
  description.innerHTML = talk.description;

  const chips = document.createElement("div");
  chips.classList.add("chips");
  talk.links.forEach((link) => {
    var chip = makeChip(link);
    chips.append(chip);
  });

  container.append(title, description, chips);

  return container;
}

document.addEventListener("DOMContentLoaded", function () {
  const talksContainer = document.getElementById("talks");
  SPEAKING.forEach((talk) => {
    const talkDiv = makeTalkDiv(talk);
    talksContainer.append(talkDiv);
  });

  const olderTalksContainer = document.getElementById("older-talks");
  const ul = document.createElement("ul");

  OLDER.forEach((talk) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = talk.url;
    a.innerHTML = talk.text;

    li.append(a);
    ul.append(li);
  })

  olderTalksContainer.append(ul);
});
