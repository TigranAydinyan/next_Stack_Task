import React from 'react';

function SelectRange({ text, checked }) {
    return (
        <button
            className="selectRangeBtn"
            style={{
                backgroundColor: checked ? '#FFDB11' : '#EBEBEB',
            }}
        >
            {text}
        </button>
    );
}

export default SelectRange;
