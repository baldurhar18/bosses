import React from 'react';
import BossItem from '../BossItem'

const BossListView = ({bosses}) => {
    return(
        <ul className="allBosses">
           { bosses.map(boss => <BossItem boss={boss} key={ boss.id }/>) }
        </ul>
    )
}

export default BossListView;