import React, { useState, useEffect } from 'react';

function TuitionScrollBy() {
    const [activeItem, setActiveItem] = useState('simple-list-item-1'); // Set initial state to 'simple-list-item-1'

    useEffect(() => {
        const handleScroll = () => {
            const anchors = document.querySelectorAll('.scroll_info h2');
            let foundActiveItem = false;
            anchors.forEach(anchor => {
                const rect = anchor.getBoundingClientRect();
                if (!foundActiveItem && rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    setActiveItem(anchor.id);
                    foundActiveItem = true;
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="flex row scroll_adjuster">
            <div className="col-4">
                <div id="simple-list-example" className="d-flex flex-column gap simple-list-example-scrollspy text-center " >
                    <a style={{ textDecoration: "none", color: "Blue", padding: "10px" }} className={`box_border ${activeItem === 'simple-list-item-1' ? 'active' : ''}`} href="#simple-list-item-1">Web Applications</a>
                    <a style={{ textDecoration: "none", color: "Blue", padding: "10px" }} className={`box_border ${activeItem === 'simple-list-item-2' ? 'active' : ''}`} href="#simple-list-item-2">Full Stack Applications</a>
                    <a style={{ textDecoration: "none", color: "Blue", padding: "10px" }} className={`box_border ${activeItem === 'simple-list-item-3' ? 'active' : ''}`} href="#simple-list-item-3">Cloud Development</a>
                    <a style={{ textDecoration: "none", color: "Blue", padding: "10px" }} className={`box_border ${activeItem === 'simple-list-item-4' ? 'active' : ''}`} href="#simple-list-item-4">Algorithm Workshops</a>
                    <a style={{ textDecoration: "none", color: "Blue", padding: "10px" }} className={`box_border ${activeItem === 'simple-list-item-5' ? 'active' : ''}`} href="#simple-list-item-5">Intro to AI</a>
                </div>
            </div>
        </div>
    );
}

export default TuitionScrollBy;
