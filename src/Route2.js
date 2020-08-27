import React from 'react'
import { Link } from 'react-router-dom'

const Route2 = ({switchPage}) => {
    return (
        <div>
            <p>This is Route 2!</p>
            <div>
                {/* <button onClick={switchPage}> */}
                <button><Link to="/app1">Route-1</Link>
                </button>
            </div>
        </div>
    )
}

export default Route2;
