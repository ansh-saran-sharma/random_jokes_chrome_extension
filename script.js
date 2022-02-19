fetch("https://api.chucknorris.io/jokes/random")
  .then(response => response.json())
  .then(data => {
	  const joke_element = document.getElementById("joke");
	  joke_element.innerHTML = data.value;
  });