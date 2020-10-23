const express = require('express');
const request = require('request');

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/data', (req, res) => {
    request(
        { url: 'https://fetch-hiring.s3.amazonaws.com/hiring.json' },
        (error, response, body) => {
            if(error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: err.message })
            }
            const parsed = JSON.parse(body)
            const filteredNames = filterOutNullNames(parsed)
            const listSortedByName = sortListByNames(filteredNames)
            const listSortedbyNameAndListId = sortListByListId(listSortedByName)
            res.json({listSortedbyNameAndListId})
        }
        )
});
app.listen(PORT, () => console.log(`listening on ${PORT}`));

function filterOutNullNames(list) {
    const filteredList = list.filter(item => item.name !== "" && item.name !== null)
    return filteredList
};
function sortListByListId(list) {
    const sortedList = list.sort((a, b) => (a.listId > b.listId) ? 1 : -1)
    return sortedList
};
function sortListByNames(list) {
    const sortedListByNames = list.sort((a, b) => (a.name < b.name) ? 1 : -1)
    return sortedListByNames
};