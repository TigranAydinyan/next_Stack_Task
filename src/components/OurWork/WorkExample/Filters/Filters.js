import React, { useState } from 'react';
import clearIcon from '../../../../assets/images/Filter/clear.svg';
import FiltersElement from './FiltersElement/FiltersElement';
import { filters } from 'config/filters';

function Filters() {
    const [choseFilters, setChoseFilters] = useState(['All']);

    const onChooseFilter = (val) => {
        setChoseFilters((prev) =>
            prev.includes(val) ? prev.filter((item) => item !== val) : [...prev, val],
        );
    };

    const onClear = () => {
        setChoseFilters([]);
    };
    return (
        <div className="filters">
            <div className="filterByDiv">
                <span className="filterBy">Filter by</span>
            </div>
            {filters.map((item) => (
                <FiltersElement
                    photo={item.image}
                    title={item.title}
                    checked={choseFilters.includes(item.title)}
                    key={item.title}
                    onChooseFilter={onChooseFilter}
                />
            ))}
            <div className="clearDiv" onClick={onClear}>
                <img src={clearIcon} alt="" className="clearIcon" />
                <span className="clear">Clear</span>
            </div>
        </div>
    );
}

export default Filters;
