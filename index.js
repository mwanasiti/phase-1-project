fetch('https://worldwide-restaurants.p.rapidapi.com/search', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

	let container=document.getElementsByClassName("container")
	let navbarList=document.getElementsByClassName("navbar list")
	let navItemOne=document.getElementsByClassName("navbar-link1")
	let navItemTwo=document.getElementsByClassName("navbar-link2")
	let searchBtn=document.getElementById("button")


	searchBtn.addEventListener('submit',getRandomRestaurant)
	navItemOne.addEventListener('click', getRestaurant)
	navItemTwo.addEventListener('',getCuisine)

	function getRandomRestaurant(){
		fetch('https://worldwide-restaurants.p.rapidapi.com/search').then(res=>res.json()).then(response => console.log(response.result.data))
	}

	function getRestaurant(){
		fetch('https://worldwide-restaurants.p.rapidapi.com/search').then(res=>res.json()).then(response=>console.log(response.result.data))
	}
