let headerDatas = 
[
	{name: "header_home", scrollPosY: 0},
	{name: "header_games", scrollPosY: 872},
	{name: "header_profile", scrollPosY: 4600},
	{name: "header_contact", scrollPosY: 5800},
	{name: "header_special", scrollPosY: 5800}
];

window.onload = ()=>{
	headerDatas.forEach((headerData)=>
	{
		let header = document.getElementById(headerData.name);

		header.onclick = ()=>{
			window.scrollTo({top: headerData.scrollPosY, behavior: "smooth"});
		};

		header.onmouseenter = (e)=> {
			e.target.style.color = "red";
		};

		header.onmouseleave = (e)=> {
			e.target.style.color = "white";
		};
	});
}
