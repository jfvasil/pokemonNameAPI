const fav = document.querySelectorAll('.pokes span')

Array.from(fav).forEach(x => {
    x.addEventListener('click', makeFav)
})

async function makeFav(){
    const pokeId = this.parentNode.childNodes[1].dataset.id
    try{
        const response = await fetch('makeFav', {
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