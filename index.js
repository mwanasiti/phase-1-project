// fetch('https://worldwide-restaurants.p.rapidapi.com/search', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

	document.addEventListener('DOMContentLoaded',()=>{
	document.addEventListener('dblclick',()=>{
		alert("WELCOME")
	})
	const form=document.querySelector('form')
		form.addEventListener('submit', event=>{
			event.preventDefault()
			const restaurantId=form.input.value;
			getData(restaurantId)
		})
})
const encodedParams = new URLSearchParams();
encodedParams.append("language", "en_US");
encodedParams.append("limit", "30");
encodedParams.append("location_id", "297704");
encodedParams.append("currency", "USD");

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': 'fe0a55d916msh30498ca9f7b074dp1c5d61jsnb3bde7cc8234',
		'X-RapidAPI-Host': 'worldwide-restaurants.p.rapidapi.com'
	},
	body: encodedParams
};

function getData(){

	fetch(`https://siti-restaurants.herokuapp.com/restaurants/${id}`, {
		headers:{
	
	'Access-Control-Allow-Credentials': true,
	
	'Access-Control-Allow-Origin':'*',
	
	'Access-Control-Allow-Methods': 'GET',
	
	'Access-Control-Allow-Headers': 'application/json',
	
	},
	
	}).then(res => res.json())
	
	.then(posts => posts.forEach(post => {
	
	renderOnePost(post)
	
	}))
}

// function getData(id){
// 	fetch(`https://siti-restaurants.herokuapp.com/restaurants/${id}`)
// 		.then(res=>res.json())
// 		.then(res=>restaurantInfo(res))
// 		.catch(err => console.error(err));
}



function restaurantInfo(data){
	// console.log(data.name)
	document.getElementById('name').innerHTML=data.data.name
	document.getElementById('description').innerHTML=data.data.description
	document.querySelector('img').src='https://res.cloudinary.com/buildsoko-images/'+data.data.image
	// const btn=document.querySelector('button')
	// let count=parseInt(document.querySelector('span').innerHTML)
	addComment()
}
	// btn.addEventListener('click',()=>{
	// 	// console.log(count ++);
	// })


function addComment(){
	const form=document.getElementById('formComment')
	form.addEventListener('submit',e=>{
		e.preventDefault()
		const post=(form.comment.value);
		postComment(post)
	})
}

function postComment(post){
	const postHeaders={
		method:'POST',
		headers:{'Content-type':'application/json'},
		body:JSON.stringify({
			comment:post
		})

	}

	fetch('http://localhost:3000/comments',postHeaders)
	.then(res=>res.json())
	.then(data=>ulpoadComments(data))
}

function ulpoadComments(comments){
	const li=document.createElement('li')
	li.innerHTML=comments.comment
	document.getElementById('comments').appendChild(li)
}



