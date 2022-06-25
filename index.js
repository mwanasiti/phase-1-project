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



