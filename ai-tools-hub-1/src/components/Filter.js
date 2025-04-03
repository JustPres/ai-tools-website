import React, { useState } from 'react';

const Filter = ({ tools, setFilteredTools }) => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleFilterChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        
        if (category === '') {
            setFilteredTools(tools);
        } else {
            const filtered = tools.filter(tool => tool.category === category);
            setFilteredTools(filtered);
        }
    };

    const uniqueCategories = [...new Set(tools.map(tool => tool.category))];

    return (
        <div className="filter">
            <label htmlFor="tool-category">Filter by Category:</label>
            <select id="tool-category" value={selectedCategory} onChange={handleFilterChange}>
                <option value="">All</option>
                {uniqueCategories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                ))}
            </select>
        </div>
    );
};

export default Filter;