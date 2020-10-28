# Fetch Rewards Coding Exercise
> Software Engineering - Front End Role

## Proxy Server to fetch data using Node and Express

The deliverables for this exercise were to fetch data from https://fetch-hiring.s3.amazonaws.com/hiring.json and display to the user. 

 * Display this list of items to the user based on the following requirements:
    * Display all the items grouped by "listId"
    * Sort the results first by "listId" then by "name" when displaying.
    * Filter out any items where "name" is blank or null.

I used React as my [frontend](https://github.com/haileyringier/fetch-rewards-interview-assessment) framework and incorporated Material-UI for styling. Initially, I attempted to fetch the data in React but due to Cors my request was blocked. I proceeded by creating a proxy using Node and Express.

Once I fetched the data I created a helper function that filters out any objects where the "name" property is either an empty string or if the "name" property was null. 

After I filtered the data, I then created a helper function that sorts the data by the "name" property. The instruction to sort the results by "listid" and then by "name" posed some questions. The "name" property is a string that follows the pattern of the word "Item" followed by a number. For example, "name": "Item 234", sorting by a string will alphabetically sort the data which is not how a user would expect the data to appear in a list. Most users would expect to see a list be ordered chronologically if numbers are involved, but the the deliverables state to sort by name which is a string. This presented a dilema but utimately I decided to specifically follow the instructions for the challenge and sort by "name" and resulted in an alphabetic sort. 

I then took the sorted data and created another helper function that groups the data by the "listId" property which reflected in all the objects with the "listId" of "1" being shown and then subsequently sorted by the "name" property. 

There are five buttons that when clicked, filter the data to show the items with the corresponding "listId" the default is to show all of the items grouped by "listId" and then sorted by "name".

I used Materail-UI for a few key stlying components such as the Grid and Paper to display the data in an asthetically appealing and user friendly way. 


## Setup
1. Fork and Clone the [frontend repository](https://github.com/haileyringier/fetch-rewards-interview-assessment) and this repository.  
1.  To get the proxy running, make sure you are in backend repository directory and run ```npm install```, to make sure that you have all the necessary packages and their dependencies. 
1. To start the server run ```npm start```. 
1. Once your server is up and running, open another terminal tab and in the frontend repository run ```npm install```.
1. After the packages are done installing, run ```npm start``` and go to localhost:3001 to view the web app. 

## Contact
[Hailey Ringier](https://www.linkedin.com/in/hailey-ringier/) 

