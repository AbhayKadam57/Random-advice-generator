const adviceNumber = document.querySelector(".adviceNumber")

const advice = document.querySelector(".advice")

const btn = document.querySelector(".btn")


btn.addEventListener("click",(e)=>{

    const random = Math.ceil(Math.random()*1000)

    adviceNumber.innerText = `#${random}`

    fetch("https://free-famous-quotes.p.rapidapi.com/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "free-famous-quotes.p.rapidapi.com",
		"x-rapidapi-key": "0a58c523efmsh5fa9bfaabaf56ccp15310fjsn187501fba186"
	}
})
.then(response=>response.json())
.then(data=>{

    console.log(data.quote)
    advice.innerText = data.quote
})



})

