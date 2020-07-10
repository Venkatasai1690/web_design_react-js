function loadjson(file){
	return new Promise((resolve,reject)=>
	{
		return fetch(file).then(response=>
		{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
			}

			
		}
		)
	}
	)
}



var newfile =loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	basic(data.details);
})


var child1 = document.querySelector(".child1");
function basic(det){

	var image = document.createElement("img");
    image.src = "profile1.png";
	child1.appendChild(image);


	var Name = document.createElement("h4");
	Name.textContent = det.Name;
	child1.appendChild(Name);

	var Email = document.createElement("a");
	Email.href = "mailto:nagavsrgukt@gmail.com",
	Email.textContent=det.Email;
	child1.appendChild(Email);


	var Number = document.createElement("a")
	Number.href = "telto:7661912789",
	Number.textContent=det.Number;
	child1.appendChild(Number); 
}
var child2 = document.querySelector(".child2");
function basic(det){

	var image = document.createElement("img");
    image.src = "profile1.png";
	child2.appendChild(image);


	var Name = document.createElement("h4");
	Name.textContent = det.Name;
	child2.appendChild(Name);

	var Email = document.createElement("a");
	Email.href = "mailto:nagavsrgukt@gmail.com",
	Email.textContent=det.Email;
	child2.appendChild(Email);


	var Number = document.createElement("a")
	Number.href = "telto:7661912789",
	Number.textContent=det.Number;
	child2.appendChild(Number); 
}