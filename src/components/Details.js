import React, { useState } from 'react';

function Details({ data }) {
    return (
        <div className="info-container">
            <span className = "release-date" >Released:  { data.release_date }</span >
            <div className="crawl-text-container">
                <div className="crawl-text">
                    {data.opening_crawl}
                </div>
            </div>
        </div>
    )
}
export default Details;