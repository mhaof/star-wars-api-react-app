import React, { useState } from 'react';
import Details from './Details';

function Info({ data }) {
    const [showInfo, setShowInfo] = useState(false);
    const handleClick = () => setShowInfo(!showInfo);
    return (
        <div onClick={handleClick}>
            <h1>{data.title}</h1>
            { showInfo ? <Details data={data}/> : null }
        </div>
    )
}
export default Info;