const express = require('express');
const request = require('request');

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
});

app.get('/data', (req, res) => {
    request(
        { url: 'https://fetch-hiring.s3.amazonaws.com/hiring.json' },
        (error, response, body) => {
            if(error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: err.message })
            }
            
            const parsed = JSON.parse(body)
            const filtered = filterOutNullNames(parsed)
            const sortedFilteredList = sortListByListId(filtered)
            res.json({sortedFilteredList})
        }
        )
});
    
app.listen(PORT, () => console.log(`listening on ${PORT}`));

function filterOutNullNames(list) {
    const filteredList = list.filter(item => item.name !== "" && item.name !== null)
    return filteredList
}
function sortListByListId(list) {
    const sortedList = list.sort((a, b) => (a.listId > b.listId) ? 1 : -1)
    return sortedList
}