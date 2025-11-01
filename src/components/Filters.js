import { useState } from "react";
import "../App.css";

const Filters = () => {
    const [showSidebar, setShowSidebar] = useState(true);
    const [sortOpen, setSortOpen] = useState(false);
    const [sortValue, setSortValue] = useState("RECOMMENDED");
    const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

    const sortOptions = [
        "RECOMMENDED",
        "NEWEST FIRST",
        "POPULAR",
        "PRICE : HIGH TO LOW",
        "PRICE : LOW TO HIGH",
    ];

    return (
        <div className='wrapper'>
            <div className='topBar'>
                <span>3425 ITEMS</span>
                <button
                    className='filterToggle'
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    {showSidebar ? "HIDE FILTER" : "SHOW FILTER"}
                </button>

                <div
                    className='sortBox'
                    onClick={() => setSortOpen(!sortOpen)}
                >
                    {sortValue} ⌄
                    {sortOpen && (
                        <ul className='sortDropdown'>
                            {sortOptions.map((opt) => (
                                <li key={opt} onClick={() => setSortValue(opt)}>
                                    {opt}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            {/* MOBILE BAR */}
            <div className='mobileBar'>
                <button onClick={() => setMobileFilterOpen(true)}>FILTER</button>
                <div
                    className='sortBox'
                    onClick={() => setSortOpen(!sortOpen)}
                >
                    {sortValue} ⌄
                    {sortOpen && (
                        <ul className='sortDropdown'>
                            {sortOptions.map((opt) => (
                                <li key={opt} onClick={() => setSortValue(opt)}>
                                    {opt}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            {/* SIDEBAR (Desktop View) */}
            {showSidebar && (
                <aside className='sidebar'>
                    <div className='section'>
                        <label>
                            <input type="checkbox" /> CUSTOMIZABLE
                        </label>
                    </div>

                    <div className='section'>
                        <p>IDEAL FOR</p>
                        <label><input type="checkbox" /> Men</label>
                        <label><input type="checkbox" /> Women</label>
                        <label><input type="checkbox" /> Baby & Kids</label>
                    </div>

                    <div className='section'><p>FABRIC</p><p>All</p></div>
                    <div className='section'><p>PATTERN</p><p>All</p></div>
                </aside>
            )}

            {/* MOBILE MODAL FILTER */}
            {mobileFilterOpen && (
                <div className='mobileOverlay'>
                    <div className='mobilePanel'>
                        <button
                            className='closeBtn'
                            onClick={() => setMobileFilterOpen(false)}
                        >
                            ✕
                        </button>

                        <h3>FILTERS</h3>

                        <label><input type="checkbox" /> CUSTOMIZABLE</label>
                        <label><input type="checkbox" /> Men</label>
                        <label><input type="checkbox" /> Women</label>
                        <label><input type="checkbox" /> Baby & Kids</label>

                        <button className='applyBtn' >APPLY</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Filters;
