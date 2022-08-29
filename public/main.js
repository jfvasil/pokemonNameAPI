const fav = document.querySelectorAll('.poke span')

Array.from(fav).forEach(x => {
    x.addEventListener('click', makeFav)
})

async function makeFav(){
    const nameText = this.parentNode.childNodes[1].innerText
    const typeText = this.parentNode.childNodes[3].innerText    
    try{
        const response = await fetch('/makeFav', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'pokeName': nameText,
                'pokeType': typeText
            })
        })
        const data = await response.json()
        location.reload()

    } catch(error){
        console.log(error)
    }

}