import React from 'react';

function Table() {
    return (
        <div className="tableDiv">
            <table className="table table-striped tableLayout">
                <thead>
                    <tr>
                        <th></th>
                        <th>
                            <div className="tableTh">
                                <h4 className="tablePricePanel">
                                    <sup className="tableDollar">$</sup> 149
                                </h4>
                                <p className="tableHeadText">
                                    Photography Slideshow Property Website
                                </p>
                            </div>
                        </th>
                        <th>
                            <div className="tableTh">
                                <h4 className="tablePricePanel">
                                    <sup className="tableDollar">$</sup> 259
                                </h4>
                                <p className="tableHeadText">
                                    Photography Cinematic Video Property Website
                                </p>
                            </div>
                        </th>
                        <th>
                            <div className="tableTh">
                                <h4 className="tablePricePanel">
                                    <sup className="tableDollar">$</sup> 299
                                </h4>
                                <p className="tableHeadText">
                                    Photography Matterport Slideshow Property Website
                                </p>
                            </div>
                        </th>
                        <th>
                            <div className="tableTh">
                                <h4 className="tablePricePanel">
                                    <sup className="tableDollar">$</sup> 399
                                </h4>
                                <p className="tableHeadText">
                                    Photography Matterport Cinematic Video Property Website
                                </p>
                            </div>
                        </th>
                        <th>
                            <div className="tableTh">
                                <h4 className="tablePricePanel">
                                    <sup className="tableDollar">$</sup> 699
                                </h4>
                                <p className="tableHeadText">ALL IN</p>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    );
}

export default Table;
