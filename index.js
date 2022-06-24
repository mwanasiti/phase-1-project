// fetch('https://worldwide-restaurants.p.rapidapi.com/search', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

	document.addEventListener('DOMContentLoaded',()=>{
	getData(2)
	document.addEventListener('dblclick',()=>{
		alert("WELCOME")
	})
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
	let count=parseInt(document.querySelector('span').innerHTML)+=

	btn.addEventListener('click',()=>{
		// console.log(count ++);
	})
}

function addComment(){
	const form=document.getElementById('formComment')
	form.addEventListener('submit',()=>{
		e.preventDefault()
		console.log(form.comment.value);


	})
}


