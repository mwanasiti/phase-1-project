// fetch('https://worldwide-restaurants.p.rapidapi.com/search', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

	document.addEventListener('DOMContentLoaded',()=>{
	getData(1)
})

function getData(id){
	fetch(`http://localhost:3000/restaurants/${id}`)
	.then(res=>res.json())
	.then(data=>restaurantInfo(data.description))
}

function restaurantInfo(data){
	// console.log(data.name)
	document.getElementById('description').innerHTML=data.description
}