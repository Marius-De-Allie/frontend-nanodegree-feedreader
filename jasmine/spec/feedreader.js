/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* 'is allFeeds defined' test - tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('is allFeeds defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* 'is url defined' test - test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('is url defined', function() {
          for (let feed of allFeeds) {
            expect(feed['url']).toBeDefined(); //test that url property is
            //defined for each object in the allFeeds array.
            expect(feed['url']).not.toBe(''); //test that url property is not an
            //empty string for each object in the allFeeds array.
          };
        });
        /* 'is name defined' test - test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('is name defined', function() {
          for (let feed of allFeeds) {
            expect(feed['name']).toBeDefined(); //test that name property is
            //defined for each object in the allFeeds array.
            expect(feed['name']).not.toBe(''); //test that name property is not
            //an empty string for each object in the allFeeds array.
          };
        });
    });

    /* Declare 'The menu' test suite which contains tests that verify that the
     * menu behaves as intended when clicked.
    */
    describe('The menu', function() {
        const body = document.querySelector('body');
          /* 'is menu hidden' test - test that ensures the menu element is
           * hidden by default. You'll have to analyze the HTML and
           * the CSS to determine how we're performing the
           * hiding/showing of the menu element.
           */
        it('is menu hidden', function() {
        /* Test that the body DOM element has the class attribute value of
         * 'menu-hidden' on initial page load.
         */
          expect(body.className).toContain('menu-hidden');
      });
         /* 'does menu toggle' test - test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
      it('does menu toggle', function() {
        const menuIcon = document.querySelector('.menu-icon-link');
        menuIcon.click(); // Simulate a click event on menuIcon DOM element.
        /* Test that the body DOM element does not have the class attribute
         * value of 'menu-hidden' after menu has been clicked.
         */
        expect(body.classList.contains('menu-hidden')).not.toBe(true);
        menuIcon.click(); // Simulate a 2nd click event on menuIcon DOM element.
        /* Test that the body DOM element now has the class atrribute value of
         * 'menu-hidden' after 'menuIcon' has been clicked a 2nd time.
         */
        expect(body.classList.contains('menu-hidden')).toBe(true);
      });
    });

    /* Declare the test suite named 'Initial Entries', which contains test
     * that checks whether the feeds load properly.
    */
    describe('Initial Entries', function() {
        /* 'are feeds loaded' test - test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
      const feed = document.querySelector('.feed');
      beforeEach(function(done) { // Call beforeEach method on loadFeed async fn
        loadFeed(0, done);
      });
      it('are feeds loaded', function () {
        /* Check that the feed DOM element contains at least 1 .entry child
         * element , if true this means feed has loaded successfully.
         */
        expect(feed.querySelectorAll('.entry').length).toBeGreaterThan(0);
      });
    });
    /* Declare test suite named 'New Feed Selection', which contains test that
     * checks whether the content (innerText) of a newly loaded is different
     * than previously loaded feed's content (innerText).
     */
    describe('New Feed Selection', function() {
      let feedOneContent;
      let feedTwoContent;
      beforeEach(function(done) {
        loadFeed(0, function() {
          // Assign innerHTML DOM element of feed with index of 0 to variable.
          feedOneContent = document.querySelector('.feed').innerHTML;
          loadFeed(1, function() {
            // Assign innerHTML DOM element of feed with index of 1 to variable.
            feedTwoContent = document.querySelector('.feed').innerHTML;
            done();
          });
        });
      });
      /* 'does feed content change' test - test that ensures when a new feed
       * is loaded by the loadFeed function that the content actually changes.
       * Remember, loadFeed() is asynchronous.
       */
      it('does feed content change', function() {
          /* expectation to check that the  content of feed one
           * is not equal to the content of feed two.
           */
          expect(feedOneContent).not.toBe(feedTwoContent);
        });
      });
}());
