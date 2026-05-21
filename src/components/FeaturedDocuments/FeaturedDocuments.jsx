import React from 'react';
import './FeaturedDocuments.css';

const FeaturedDocuments = () => {
    const handleMore = () => {
        console.log('clicked: MORE');
    };

    const handleDownload = (docName) => {
        console.log(`clicked: Download ${docName}`);
    };

    const documents = [
        {
            version: 'v2.1',
            theme: 'OFFICIAL DOCUMENTS',
            title: 'GENERAL REGULATIONS 2026',
            name: 'General Regulations'
        },
        {
            version: 'v1.0',
            theme: 'SUSTAINABILITY',
            title: 'Sustainability Guidelines for ESC Events',
            name: 'Sustainability Guidelines'
        },
        {
            version: 'v3.2',
            theme: 'RULES',
            title: 'Technical Rules Update — Rifle / Pistol',
            name: 'Technical Rules'
        },
        {
            version: 'v1.3',
            theme: 'COURSES',
            title: 'Officials Education Programme Overview',
            name: 'Education Programme'
        }
    ];

    return (
        <section className="featured-documents">
            <div className="documents-naming">
                <p className="documents-title">FEATURED DOCUMENTS</p>
                <div className="documents-line"></div>
                <div className="documents-spacer"></div>
                <button className="documents-more-btn" onClick={handleMore}>MORE →</button>
            </div>
            <div className="document-container">
                {documents.map((doc, index) => (
                    <div className="document" key={index}>
                        <div className="doc-header">
                            <i className="fa-regular fa-file-lines"></i>
                            <p className="version">{doc.version}</p>
                        </div>
                        <p className="theme">{doc.theme}</p>
                        <p className="document-title">{doc.title}</p>
                        <div 
                            className="download-area" 
                            onClick={() => handleDownload(doc.name)}
                        >
                            <i className="fa-solid fa-download"></i>
                            <p className="download-text">download PDF</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedDocuments;