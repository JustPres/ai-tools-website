import React from 'react';

const ToolCard = ({ tool }) => {
    return (
        <div className="tool-card">
            <img src={tool.image} alt={tool.name} className="tool-icon" />
            <h3 className="tool-name">{tool.name}</h3>
            <p className="tool-description">{tool.description}</p>
            <a href={tool.link} className="tool-link" target="_blank" rel="noopener noreferrer">
                Learn More
            </a>
        </div>
    );
};

export default ToolCard;