import React from 'react';
import PricingTitle from './PricingTitle/PricingTitle';
import SelectSQ from './SelectSQST/SelectSQ';
import Table from './Table/Table';

function PricingTable() {
    return (
        <div className="pricingTable">
            <PricingTitle />
            <SelectSQ />
            <Table />
        </div>
    );
}

export default PricingTable;
