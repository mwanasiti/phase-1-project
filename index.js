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

function getData(restaurantId){

	fetch(`https://siti-restaurants.herokuapp.com/restaurants/${restaurantId}`, {
		headers:{
			
			// Allow:["*"],


	
	},
	
	}).then(res => res.json())
	.then(res=>restaurantInfo(res))
}


function restaurantInfo(data){
	// console.log(data.name)
	document.getElementById('name').innerHTML=data.data.name
	document.getElementById('description').innerHTML=data.data.description
	document.querySelector('img').src='https://res.cloudinary.com/buildsoko-images/'+data.data.image
	// const btn=document.querySelector('button')
	// let count=parseInt(document.querySelector('span').innerHTML)
	addComment(data)
}
	// btn.addEventListener('click',()=>{
	// 	// console.log(count ++);
	// })


function addComment(restaurantId){
	const form=document.getElementById('formComment')
	form.addEventListener('submit',e=>{
		e.preventDefault()
		const post=(form.comment.value);
		postComment(restaurantId, post)
	})
}

function postComment(restaurantId, post){
	const postHeaders={
		method:'POST',
		headers:{'Content-type':'application/json'},
		body:JSON.stringify({
			comment:post,
			restaurant: restaurantId
		})

	}
	fetch(`https://siti-restaurants.herokuapp.com/comments/${restaurantId}`,postHeaders)
	.then(res=>res.json())
	.then(data=>ulpoadComments(data))
}

function ulpoadComments(comments){
	const li=document.createElement('li')
	li.innerHTML=comments.comment
	document.getElementById('comments').appendChild(li)
}




