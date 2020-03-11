const initialState = {
    bosses: []
}

const bossReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'GET_BOSSES':
            return {
                ...state,
                bosses: action.bosses
            }
        case 'CREATE_BOSS':
            let addBosses = [...state.bosses, action.boss];
            return {
                ...state,
                bosses: addBosses
            }
        case 'UPDATE_BOSS':
            const updatedItems = state.bosses.map(boss => {
                if(boss.id === action.boss.id) {
                    return { ...boss, ...action.boss }
                }
                return boss;
            });
            return{
                bosses: updatedItems
            }
        case 'DELETE_BOSS':
            let newBosses = state.bosses.filter(boss => {
                return action.id !== boss.id;
            });
            return {
                ...state,
                bosses: newBosses
            }
        default:
            return state;
    }
}

export default bossReducer;