const getBosses = () => {
    return fetch('http://localhost:4500/api/bosses/').then(res => {
        if(res.ok) {
            return res.json()
        }
    }).then(data => {
        if(!data) { return [] }
        //console.log(data)
        return data
    })
}

const getBoss = (id) => {
    return fetch('http://localhost:4500/api/bosses/' + id).then(res => {
        if(res.ok) {
            return res.json()
        }
    }).then(data => {
        if(!data) { return {} }
        //console.log(data)
        return data
    })
}

const createBoss = (boss) => {
    return fetch('http://localhost:4500/api/bosses/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: boss.name,
            description: boss.description,
            img: boss.img
        })
    }).then(res => res.json()
      .then(json => {return json})
    )};

const updateBoss = (boss) => {
    return fetch('http://localhost:4500/api/bosses/' + boss.id, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: boss.name,
            description: boss.description,
            img: boss.img  
        })
    }).then(status => {return status});
}

const deleteBoss = (id) => {
    return fetch('http://localhost:4500/api/bosses/' + id, {
        method: 'DELETE',
    }).then(status => {return status});
}


export default {
    getBosses,
    getBoss,
    createBoss,
    updateBoss,
    deleteBoss
}