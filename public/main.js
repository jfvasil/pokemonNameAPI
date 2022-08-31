const fav = document.querySelectorAll('.poke span')

Array.from(fav).forEach(x => {
    x.addEventListener('click', makeFav)
})
Array.from(fav).forEach(x => {
    x.addEventListener('click', makeUnFav)
})

async function makeFav(){
    const pokeId = this.dataset.id
    try{
        const response = await fetch('/makeFav', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'idFromFile': pokeId
            })
        })
        const data = await response.json()
        location.reload()
        

    } catch(error){
        console.log(error)
    }

}
async function makeUnFav(){
    const pokeId = this.parentNode.dataset.id
    try{
        const response = await fetch('/makeUnFav', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'idFromFile': pokeId
            })
        })
        const data = await response.json()
        location.reload()
        

    } catch(error){
        console.log(error)
    }

}