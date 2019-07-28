window.onload = ()=>{
	const METERS_MAX = 5;

	for(let i = 0; i < METERS_MAX; ++i)
	{
		// let degreeStart = 360 / METERS_MAX;
		// let degreeEnd = degreeStart + 360;

		// var styleSheet = document.styleSheets[1];
		// var keyframes=
		// 	`@keyframes rotation0${i} {\n`+
		// 	`0% { transform: rotate(${degreeStart}deg); }\n`+
		// 	`100% { transform: rotate(${degreeEnd}deg); }\n`+
		// 	`}`;
			
		// document.styleSheets[1].insertRule(keyframes);
		
		let box = document.createElement("div");
		box.classList.add("box");

		let meter = document.createElement("div");
		meter.classList.add("meter");

		box.appendChild(meter);
		document.body.appendChild(box);
		box.style.animationName = `rotation0${i}`;
	}
}
