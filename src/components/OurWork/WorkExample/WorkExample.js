import React from 'react';
import Filters from './Filters/Filters';
import JobDescript from './JobDescript/JobDescript';
import SlidVideo from './SlidVideo/SlidVideo';

function WorkExample() {
    return (
        <div className="workExample">
            <div className="jobTitleDiv">
                <h2 className="jobTitle">Our work</h2>
            </div>
            <Filters />
            <div className="aboutOurWork">
                <JobDescript />
                <SlidVideo />
            </div>
        </div>
    );
}

export default WorkExample;
