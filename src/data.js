import React from 'react';
// import Github from './icons/Github';
// import Twitter from './icons/Twitter';
// import LinkedIn from './icons/LinkedIn';
// import DevTo from './icons/DevTo';

const data = {
  "social": [
    {
      "name": "github",
      "link": "https://github.com/egiurleo",
    },
    {
      "name": "twitter",
      "link": "https://twitter.com/EmilyGiurleo",
    },
    {
      "name": "dev.to",
      "link": "https://dev.to/egiurleo",
    },
    {
      "name": "linkedin",
      "link": "https://linkedin.com/in/egiurleo",
    },
  ],
  "about": "I'm a software engineer at MongoDB working on the <a href=\"https://github.com/mongodb/mongo-ruby-driver\" target=\"_blank\" rel=\"noopener noreferrer\">Ruby driver</a> and <a href=\"https://github.com/mongodb/mongoid\" target=\"_blank\" rel=\"noopener noreferrer\">Mongoid ODM</a>. I have previously worked at <a href=\"https://codecademy.com\" target=\"_blank\" rel=\"noopener noreferrer\">Codecademy</a>. I care a lot about accessible education, civic engagement, and cats.",
  "projects": [
    {
      "title": "FreeFrom Compensation Compass",
      "link": "https://compass.freefrom.org",
      "year": 2019,
      "description": "<a href=\"https://freefrom.org\" target=\"_blank\" rel=\"noopener noreferrer\">FreeFrom</a> is an organization that helps survivors of gender-based violence achieve financial security. As a volunteer with <a href=\"https://ragtag.org\" target=\"_blank\" rel=\"noopener noreferrer\">Ragtag</a>, I built a Rails API backend for their new compensation tool, which helps survivors of gender-based violence in all 50 states learn what forms of financial compensation that are available to them. I also built a CMS with <a href=\"https://github.com/heartcombo/devise\" target=\"_blank\" rel=\"noopener noreferrer\">devise</a> and <a href=\"https://github.com/thoughtbot/administrate\" target=\"_blank\" rel=\"noopener noreferrer\">administrate</a> that allows the FreeFrom staff to update and maintain their site.",
      featured: true,
    },
    {
      "title": "Advent of Code",
      "link": "https://github.com/egiurleo/advent-of-code-2019",
      "year": 2019,
      "description": "My solutions to <a href=\"https://adventofcode.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Advent of Code 2019</a>, written in Ruby."
    },
    {
      "title": "Codecademy Go Cast",
      "link": "https://podcasts.apple.com/us/podcast/codecademy-go-cast/id1450421834",
      "year": 2019,
      "description": "A podcast about creating the Codecademy mobile app."
    },
    {
      "title": "The Stable Meow-age Problem",
      "link": "https://glitch.com/edit/#!/stable-meowage-problem",
      "year": 2018,
      "description": "A high school workshop on the Stable Marriage Problem algorithm... featuring cats!"
    },
    {
      "title": "Keyboard Interactions in App Inventor",
      "link": "https://drive.google.com/file/d/0B8AUNoeCnCCASzUwMWtwWUhmN1E/view",
      "year": 2017,
      "description": "A paper I wrote as part of my undergraduate thesis about implementing keyboard interactions in App Inventor, a block-based Android app building tool."
    },
  ],
  "talks": [
    {
      "title": "Successfully Onboarding a Junior Engineer in Three Steps",
      "link": "https://railsconf.com/2020/video/emily-giurleo-successfully-onboarding-a-junior-engineer-in-three-steps",
      "conference": "RailsConf 2020, Couch Edition",
      "description": "A talk about three steps you can follow to onboard a junior engineer to your team."
    },
    {
      "title": "Ruby on Rails Podcast, Episode 316",
      "link": "https://5by5.tv/rubyonrails/316",
      "conference": "2020",
      "description": "I went on the Ruby on Rails podcast to talk about my upcoming RailsConf talk, \"Successfully Onboarding a Junior Engineer in Three Steps\"."
    },
    {
      "title": "Onboarding Junior Engineers",
      "link": "https://youtu.be/7TrKS8ZiTyI?t=3045",
      "conference": "RubyConf 2019",
      "description": "A 5-minute lightning talk about delivering feedback to new junior engineers on your team."
    }
  ]
}

export default data;
