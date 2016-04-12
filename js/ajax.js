var	request = function(url,onreadystatechange) {
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

    return http_request;
};

var	aget = function(url,callback) {
	var http = request(url,function(){
		if (http.readyState === XMLHttpRequest.DONE) {
	      if (http.status === 200) {
	        callback(http);
	      } else {
	        alert('There was a problem with the request.');
	      }
	    }
	});
	http.open('GET',url);
	http.send();
};

var	apost = function(url,data,callback) {
	var http = request(url,function(){
		if (http.readyState === XMLHttpRequest.DONE) {
	      if (http.status === 200) {
	        callback(http);
	      } else {
	        alert('There was a problem with the request.');
	      }
	    }
	});
	http.open('POST',url);
	http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	http.send(data);
};