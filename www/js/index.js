$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
  	var text = $('#textinput').val();
    storeValue(1,text);
  });            
});            


function submitText() {
	var text = $('#textinput').val();
	alert(text);
}

function storeValue(key, value) {
	//add some code to store the key-value pair in persistant storage 
	 $('#textoutput').val(value);
}