# ReactBootcamp-Code2017

## Pre Reqs
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Node / NPM](https://docs.npmjs.com/getting-started/installing-node) - should be 6.10.2 or later
* [Yarn](https://yarnpkg.com/lang/en/docs/install/)

## Editors
Choose 1 of the following:

* [Atom](https://atom.io/)
* [VSCode](https://code.visualstudio.com/)
* [SublimeText 3](https://www.sublimetext.com/3)

If you choose atom (which is the editor I will be using for examples), please also run the following command after cloning this repo: ```apm install --packages-file package-list.txt```


## Setup Steps
* Clone this ReactBootcamp-Code2017 repo
* Run ```yarn``` or ```npm install```
* Run ```yarn start``` or ```npm start```

You should see Hello Bootcamp - you're now ready to go

# Day 1 - Lab
We are going to be building our own little IMDB.

## APIs:

* http://www.omdbapi.com/ - this will let you search for titles
* http://developer.nytimes.com/movie_reviews_v2.json - you may use my key: 5c36e0dd71d140c09f8cfb6e580365a9

## Other
* https://coolors.co/ - Helps you pick colors

## Requirements
There will be two panels to the app.

#### Left Panel
* The left panel will contain the search and search results. You need to at minimum search for a title. Extra credit for allowing the user to specify the type.
* The results should be display as a ul.
* When I click on a title, the right panel should change to the selected title.

#### Right Panel
* The right panel will contain the detail about the selected movie
* You should display at minimum:
    * Rating
    * Release Date
    * Main Cast
    * Plot summary
    * Movie poster
    * Link to the NY Times Review

# Day 2 - Lab
We are going to keep working on our IMDB app.

## Requirements
* Add a top menu to the app
    * There should be 2 entries: Search and About
    * Add an About page - content can be minimal
* Add some style to the panels, at a minimum:
    * Your colors should be defined in their own file
    * The search panel and detail panels should have their own files respectively
    * The left panel should be a different background color than the right
    * The selected title should highlight
    * Add some color to the right panel
* Convert all state and actions to Redux
    * You may use either middleware - both are already hooked in for you
