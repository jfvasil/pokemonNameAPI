const fav = document.querySelectorAll('.poke span')
const deleted = document.querySelectorAll('.deleteButton')

Array.from(fav).forEach(x => {
    x.addEventListener('click', makeFav)
})
Array.from(fav).forEach(x => {
    x.addEventListener('click', makeUnFav)
})

Array.from(deleted).forEach(x =>{
    x.addEventListener('click', deleteItem)
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

async function deleteItem(){
    const pokeId = this.parentNode.dataset.id
    try{
        const response = await fetch('/deleteItem', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'IdFromFile': pokeId
            })
          })
        const data = await response.json()
        location.reload()

    }catch(err){
        console.log(err)
    }
}