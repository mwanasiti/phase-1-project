// fetch('https://worldwide-restaurants.p.rapidapi.com/search', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

	document.addEventListener('DOMContentLoaded',()=>{
	getData(5)
})

function getData(id){
	fetch(`http://localhost:3000/restaurants/${id}`)
	.then(res=>res.json())
	.then(data=>restaurantInfo(data))
}

function restaurantInfo(data){
	// console.log(data.name)
	document.getElementById('name').innerHTML=data.name
	document.getElementById('description').innerHTML=data.description
	document.querySelector('img').src=data.image
	const btn=document.querySelector('button')
	btn.addEventListener('click',()=>{
		alert("Review")
		btn.innerHTML +=1
	})
}


