import React from 'react';
import { Link } from 'react-router-dom';

const BossItem = ({boss}) => {
    return(
        <div className="boss-container">
            <li className="boss-item">
                <Link className="boss-link" to={`bosses/${boss.id}`}><h1 className="boss-heading">{ boss.name }</h1></Link>
                <Link className="boss-link" to={`bosses/${boss.id}`}><img className="boss-img" src={boss.img} alt={boss.name}/></Link>
            </li>
        </div>
    )
}

export default BossItem;