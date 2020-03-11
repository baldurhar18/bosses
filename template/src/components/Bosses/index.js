import React from 'react';
import BossListView from '../BossListView';
import NewBoss from '../NewBoss';

const Bosses = ({bosses}) => {
    return(
        <div>
        <div>
            <BossListView bosses={ bosses }/>
            
        </div>
        <div><NewBoss /></div>
        </div>
        
    )
}

export default Bosses;