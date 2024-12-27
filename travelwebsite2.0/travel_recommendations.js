document.getElementById('searchBtn').addEventListener('click', function() {
    const query = document.getElementById('search').value;
    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            const results = data.filter(item => item.destination.toLowerCase().includes(query.toLowerCase()));
            displayResults(results);
        })
        .catch(error => console.error('Error fetching data:', error));
});

document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('search').value = '';
    document.getElementById('resultContainer').innerHTML = '';
});

function displayResults(results) {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = '';
    if (results.length === 0) {
        resultContainer.innerHTML = '<p>No results found.</p>';
        return;
    }
    results.forEach(result => {
        const div = document.createElement('div');
        div.textContent = result.destination;
        resultContainer.appendChild(div);
    });
}

document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});