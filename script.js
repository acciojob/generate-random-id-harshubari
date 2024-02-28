let regexpr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function makeid(l) {
	let len = regexpr.length;
	let res = ' ';
	for ( let i = 0; i < len; i++ ) {
        res += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
	return res;
} 

// Do not change the code below.

const l = prompt("Enter a number.");
alert(makeid(l)); 
