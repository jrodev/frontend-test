module.exports = {
    saludar: function (name) {
        return "Hola: " + name;
    },
    sortArray: function (array) {
    	var menor=0;
    	for (var i=0; i < (array.length-1); i++) {
    		for(var j=(i+1); j < array.length; j++) {
    			if(array[j] < array[i]) {
    			   menor = array[j];
    			   array[j] = array[i];
    			   array[i] = menor;
    			}
    		}
        }
	}
};
