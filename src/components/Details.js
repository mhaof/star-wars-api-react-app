import React, { useState } from 'react';

function Details({ data }) {
    return (
        <div>
            <span className = "release-date" > { data.release_date }</span >
            <div className="crawl-text">
                {data.opening_crawl}
            </div>
        </div>
    )
}
export default Details;