function loadjson(file){
	return new Promise((resolved,reject)=>
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
	basic(data.info);
 	
})


var first = document.querySelector(".first");
function basic(det){

	var image = document.createElement("img");
    image.src = "profile1.png";
	first.appendChild(image);


	var Name = document.createElement("h4");
	Name.textContent = det.Name;
	first.appendChild(Name);

	var Email = document.createElement("a");
	Email.href = "mailto:nagavsrgukt@gmail.com",
	Email.textContent=det.Email;
	first.appendChild(Email);


	var Number = document.createElement("a")
	Number.href = "telto:7661912789",
	Number.textContent=det.Number;
	first.appendChild(Number); 
	
}

var second = document.querySelector(".second");
function basic(det){

	var image = document.createElement("img");
    image.src = "profile1.png";
	second.appendChild(image);


	var Name = document.createElement("h4");
	Name.textContent = det.Name;
	second.appendChild(Name);

	var Email = document.createElement("a");
	Email.href = "mailto:nagavsrgukt@gmail.com",
	Email.textContent=det.Email;
	second.appendChild(Email);


	var Number = document.createElement("a")
	Number.href = "telto:7661912789",
	Number.textContent=det.Number;
	second.appendChild(Number); 
	
}
