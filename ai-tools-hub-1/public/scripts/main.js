document.addEventListener('DOMContentLoaded', () => {
    const toolsContainer = document.getElementById('tools-container');
    const filterInput = document.getElementById('filter-input');

    let tools = [];

    fetch('./data/tools.json')
        .then(response => response.json())
        .then(data => {
            tools = data;
            displayTools(tools);
        });

    filterInput.addEventListener('input', (event) => {
        const filterValue = event.target.value.toLowerCase();
        const filteredTools = tools.filter(tool => 
            tool.name.toLowerCase().includes(filterValue) || 
            tool.description.toLowerCase().includes(filterValue)
        );
        displayTools(filteredTools);
    });

    function displayTools(tools) {
        toolsContainer.innerHTML = '';
        tools.forEach(tool => {
            const toolCard = document.createElement('div');
            toolCard.className = 'tool-card';
            toolCard.innerHTML = `
                <img src="${tool.image}" alt="${tool.name} icon" />
                <h3>${tool.name}</h3>
                <p>${tool.description}</p>
                <a href="${tool.link}" target="_blank">Learn More</a>
            `;
            toolsContainer.appendChild(toolCard);
        });
    }
});