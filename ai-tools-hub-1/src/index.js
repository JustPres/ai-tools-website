import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import ToolCard from './components/ToolCard';
import toolsData from './data/tools.json';
import './styles/main.scss';

const App = () => {
    const [filteredTools, setFilteredTools] = React.useState(toolsData);

    const handleFilterChange = (selectedCategory) => {
        if (selectedCategory === 'all') {
            setFilteredTools(toolsData);
        } else {
            const filtered = toolsData.filter(tool => tool.category === selectedCategory);
            setFilteredTools(filtered);
        }
    };

    return (
        <div>
            <Navbar />
            <Filter onFilterChange={handleFilterChange} />
            <div className="tool-list">
                {filteredTools.map(tool => (
                    <ToolCard key={tool.name} tool={tool} />
                ))}
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));