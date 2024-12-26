document.getElementById('searchBtn').addEventListener('click', function() {
    const query = document.getElementById('searchBar').value;
    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            const results = data.filter(item => item.destination.toLowerCase().includes(query.toLowerCase()));
            displayResults(results);
        })
        .catch(error => console.error('Error fetching data:', error));
});

document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('searchBar').value = '';
    document.getElementById('resultList').innerHTML = '';
});

function displayResults(results) {
    const resultList = document.getElementById('resultList');
    resultList.innerHTML = ''; // Clear previous results
    if (results.length === 0) {
        resultList.innerHTML = '<li>No results found</li>';
    } else {
        results.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.destination;
            resultList.appendChild(li);
        });
    }
}