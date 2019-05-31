# RSS Feed Reader web application

## Table of Contents

- [Introduction](#introduction)
- [Instructions](#instructions)
- [Contributing](#contributing)

## Introduction
  This application is an **RSS feed reader.**
  The application's purpose is to allow the end user to read RSS feed content within their web browser. It is a web based application. The app provides an interface for the user to view several RSS feeds from a few different sources specifically on technology topics and topics related to Front end web development. Feed content is acquired from the following sources:
  - [_Udacity_](https://blog.udacity.com/)
  - [_CssTricks_](https://css-tricks.com/)
  - [_HTML5rocks_](https://www.html5rocks.com/en/)
*_The application includes several suites of Jasmine tests, for which the results will be displayed at the bottom of the page once the feed reader loads._*

## Instructions

### How to run/use Feed reader application
- Application may be downloaded from [my GitHub repository](https://github.com/spectre4300s/frontend-nanodegree-feedreader)
- Once downloaded, ensure compressed file is extracted to one folder.
- In order to launch the feed reader app, open the `index.html` file in the web browser of your choice, this will load the feed reader home page.
- Upon initial launch the feed reader should be displaying content from the [Udacity blog](https://blog.udacity.com/).
#### Feed reader navigation
- You may navigate around the feed reader app via the following means:
  - On the currently loaded feed page, click any of the articles text to view the content of that article.
  - There is a menu hamburger button to the top left of the feed reader app. Click on this menu button to expand the feed reader menu. From this menu you can navigate to one of the other feed reader pages, which are:
      - _Udacity Blog_
      - _CSS Tricks_
      - _HTML5 Rocks_
      - _Linear Digression_
  - You can access anyone of the pages listed above by clicking on the item.
  - Once on one of the pages you may then access anyone of the articles in   that category by clicking on the article title.
### Jasmine Tests
At the bottom of each page of the feed reader app you will notice there is a section labelled [Jasmine 3.3.0](https://jasmine.github.io/index.html), which then has some more info listed under this heading.
This is a means for testing proper app functionality within the feed reader app upon it being initially loaded or reloaded.

_*Once the app is functioning as intended you should see _0 Failures_ displayed here under the Jasmine 3.3.0 heading._

#### Tests that are being run against the Feed reader app via Jasmine:
_*These tests are all implemented through the_ `feedreader.js` _file which is located in the_ `jasmine/spec` _folder for this project._
##### `RSS Feeds` test suite containing: #####
 - `is allFeeds defined` test - this tests whether the `allFeeds` array has been declared within the `app.js` file and whether the array has at least 1 element.
 - `is url defined` test - this tests whether the `url` property of each object in the `allFeeds` array has been defined and is not an empty string.
 - `is name defined` test - this tests whether the `name` property of each object in the `allFeeds` array has been defined and is not an empty string.

##### `The menu` test suite containing: #####
 - `is menu hidden` test - this tests whether the feed reader app menu is hidden by default upon app being loaded or reloaded.
 - `does menu toggle` test - this tests whether the app menu alternates between being visible and hidden when menu button is clicked consecutively.

##### `Initial Entries` test suite containing: #####
 - `are feeds loaded` test - this tests whether the loadFeed function has been called and whether at least one child element is present within the `.feed` container.
 _*_`loadFeed` _is an asynchronous function._

##### `New Feed Selection` test suite containing: #####
 - `does feed content change` test - this tests whether the feed content changes when a new feed is loaded by the `loadFeed` function by comparing current feed content with previous feed content.
 _*_`loadFeed` _is an asynchronous function._

## Contributing

All the starter code for the feed reader app was provided by [Udacity](https://github.com/udacity/frontend-nanodegree-feedreader).
