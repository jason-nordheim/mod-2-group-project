# Front End 
This README describes the functionality and purpose of the files in the front end 

## Purpose

We hope that this site will provide people with reasons to smile. With a wide range of jokes and the ability add more, there is no limit to the number of laughs that one may achieve from visiting "Funny's from behind the keyboard". 

## Styling 

The site was styled to be reminicent of a terminal (like the Mac OS terminal) in order to give visitors of the site a nerdy/geeky feel, and get them in the mood for some corny jokes. 

## Responsibilities: 
* provides a user interface for: 
    * viewing jokes
    * editing jokes
    * deleting jokes 
* works in conjunction with the back-end api to: 
    * C: add (create) records in the API 
    * R: read records from the API
    * U: update records already in the API
    * D: delete records in the API 

## File Structure 

In the root of the front-end directory is the HTML pages that serve the various functions of the web application. All supporting scripts (JavaScript/ES6) are nested within the scripts folder within the front-end's root directory, and all CSS documents (only 1 at this time) are in the `styles` directory. 

```
├── about.html
├── admin.html
├── findJoke.html
├── index.html
├── newJoke.html
├── randomJoke.html
├── scripts
│   ├── admin.js
│   ├── findJoke.js
│   ├── index.js
│   ├── newJoke.js
│   └── update.js
├── styles
│   └── main.css
└── update.html
```

### Home 
![IMAGE ALT TEXT HERE](/jokes-app/img/index.png "Home Page")
The home page serves primarily as a simple entryway to the web application. It links to the various features and functionality of the page. When loading the `index.html` or homepage, the `index.js` script associated with that page, will reach out to the API and retrieve a random joke and then render that joke to the page. 

### Find and Rate 
![IMAGE ALT TEXT HERE](/jokes-app/img/findRate.png "Find and Rate Page")
The `findJoke.html`, servees as a place where visitors of "Funny's from behind the keybaord" can look for a joke they've seen before. Along the top of the page are a series of buttons (rendered as `li` elements), which will filter the jokes displayed on the page by either the joke `category` or the joke's `author`. This will also enable end-users to add a rating to the joke. 

### Submit a funny 
![IMAGE ALT TEXT HERE](/jokes-app/img/new.png "Submit New Joke Page")
This form allows end-users of "Funny's from behind the keyboard" to tell us (or rather the application) about a joke that they really like, which would get added to the applications database via the backend API so that other visitors of "Funny's from behind the keyboard" can enjoy even more great jokes. 

### About 
![IMAGE ALT TEXT HERE](/jokes-app/img/about.png "About Page")
The `about.html` describes how the site as a whole and breifly introduces the developers responsible for it's creation. Here we have outlined the basic technologies used and given a breif (and fun) description of the people responsible for helping this project come to fruition. 

At the very bottom, purposely obscured, is the link to the admin interface (`admin.html`), which provides a way of performing our administrative functions. 

### Admin 
![IMAGE ALT TEXT HERE](/jokes-app/img/admin.png "Admin Page")
The admin page allows for managing the jokes in the database through a friendly GUI. Here administrators have the ability to update or remove any jokes from the applications database. 

# Future features

1. [Context: All Place where jokes are displayed] Display of Joke Ratings: In the future we would like to build out the functionality to display the average rating for a joke. 

2. [Context: Entire Application] Add User Accounts: Users would have the ability to login to the website and authenticate to provide enhanced functionality. 

3. [Context: Administration] Restricted deleting and editing: Currently there is nothing in the front-end UI preventing end-users from deleting or modifying jokes. In the future this would be restricted via a specific administrator UI, and prevented for standard users. (Pre-requisites: Add User Accounts)

