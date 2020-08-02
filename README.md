# Hackday-project -- Twan Boox
A one-day project as part of the &lt;/salt> full stack javascript bootcamp. Let the fun begin!


![](client/react-twanboox/public/Screenshot%202020-07-31%20at%2011.56.13.png)

## Requirements

- scoped for one day
- implement a front-end, I will go with React
- implement a back-end, I will use Node & Express
- live demo the next morning.

> keep it simple, improve in small increments, have fun!

## Idea

TwanBoox, it's the hot new thing everyone talks about!
All readers around the world are now able to bring their entire library with them.
Users can explore the books of the world. start a new library, wishlist, collection; you name it!

### Preparations

The first step would be making sure that I can actually access the google maps API. I have run a succesfull test. Second, fetching based on location and a specific kind of place.

- create react app
- setting up the express server
- connect to database and setting up the GUI (Robo 3t)
- API: Google books API tested with postman
- API: reading the docs (google always has really extensive documentations)


### Approach

I started off with creating some mockups for the app.
I also created a graphic with my component structure
![](client/react-twanboox/public/Screenshot%202020-07-31%20at%2011.57.00.png)


After i set up my server, connected to my database & explored the api documentation for a bit.
I basically started working on my components from left to right.
Most components are self explanatory; but the most important one is the **<Books />** component,
here i fetch data from my api, handle state and some methods.


