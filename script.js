let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function makeid(l) {
	if(l == null || l == "") return ;
	let len = characters.length;
	let res = ' ';
	for ( let i = 0; i < len; i++ ) {
        res += characters.charAt(Math.floor(Math.random() * len));
    }

	let newres = res.slice(0, l)
	console.log(newres);
	return newres;
} 

// Do not change the code below.

const l = prompt("Enter a number.");
alert(makeid(l));  
