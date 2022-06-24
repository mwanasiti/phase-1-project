// fetch('https://worldwide-restaurants.p.rapidapi.com/search', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

	document.addEventListener('DOMContentLoaded',()=>{
	getData(3)
})

function getData(id){
	fetch(`http://localhost:3000/restaurants/${id}`).then(res=>res.json()).then(data=>console.log(data))
}

