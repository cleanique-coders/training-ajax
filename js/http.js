function ajax(url,onreadystatechange,method) {
	try{
       // Opera 8.0+, Firefox, Chrome, Safari
       http_request = new XMLHttpRequest();
    }catch (e){
       // Internet Explorer Browsers
       try{
          http_request = new ActiveXObject("Msxml2.XMLHTTP");
			
       }catch (e) {
		
          try{
             http_request = new ActiveXObject("Microsoft.XMLHTTP");
          }catch (e){
             // Something went wrong
             alert("Your browser broke!");
             return false;
          }
			
       }
    }

    http_request.onreadystatechange = onreadystatechange;
			
    http_request.open(method, url, true);
    http_request.send();
}

function ajax_get(url,onreadystatechange) {
	ajax(url,onreadystatechange,'GET');
}