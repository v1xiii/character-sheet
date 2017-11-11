function statGenerator() {
	var fields = document.getElementsByClassName('width_2rem');
	for (i = 0; i < fields.length; i++) {
	    fields[i].value = Math.floor(Math.random()*100)+1;
	}
}