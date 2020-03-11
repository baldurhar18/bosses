import bossService from '../services/BossService';

export const getBosses = () => {
    return (dispatch) => {
        return bossService.getBosses().then(data => {
            dispatch(getBossesSuccess(data));
        });
    }
}

const getBossesSuccess = (bosses) => {
    return {
        type: 'GET_BOSSES',
        bosses
    }
}

export const createBoss = (boss) => {
    return (dispatch) => {
        return bossService.createBoss(boss).then(data => {
            dispatch(createBossSuccess({...boss, id: data.id}));
        });
    }
}

const createBossSuccess = (boss) => {
    return {
        type: 'CREATE_BOSS',
        boss
    }
}

export const updateBoss = (boss) => {
    return (dispatch) => {
        return bossService.updateBoss(boss).then(() => {
            dispatch(updateBossSuccess(boss));
        });
    }
}

const updateBossSuccess = (boss) => {
    return {
        type: 'UPDATE_BOSS',
        boss
    }
}

export const deleteBoss = (id) => {
    return (dispatch) => {
        return bossService.deleteBoss(id).then(() => {
            dispatch(deleteBossSuccess(id));
        })
    }
}

const deleteBossSuccess = (id) => {
    return {
        type: 'DELETE_BOSS',
        id
    }
}