this.Elitetoma.Updates = this.Elitetoma.Updates || function() {

	// Elements
	var updatesDivElem = Ydom.get('updates'),
	formNameElem = Ydom.get('name'),
	formUpdateElem = Ydom.get('update'),
	inpUpdate = function() {return formUpdateElem.value;},
	inpName = function() {return formNameElem.value;},
	formDivElem = Ydom.get('updatesForm'),
	formToggleDivElem = Ydom.get('addAnUpdate');

	// Success and failure functions for different requests
	var handleSuccess = function(o){
		allRequest();
	};

	var handleFailure = function(o){
		if(o.responseText !== undefined){
			updatesDivElem.innerHTML = "request failure: " + o.responseText + updatesDivElem.innerHTML;
		}
	};

	var handleAllSuccess = function(o) {
		if(o.responseText !== undefined){
			updatesDivElem.innerHTML = o.responseText;
		}
	};

	/* Callback/Config objects for transactions */
	var callback = {
		method: "POST",
		success: handleSuccess,
		failure: handleFailure
	};

	var allCallback ={
		method:"GET",
		success: handleAllSuccess,
		failure: handleFailure
	};

	//Handler to make XHR request for adding a comment
	var addUpdateRequest = function(){
		callback.data = 'update='+inpUpdate()+'&name='+inpName(); // TODO: check this out!
		var addRequest = AjaxR('../updates/add', callback);
	};

	var deleteUpdateRequest = function(id) {
		callback.data = 'id='+id;
		var deleteRequest = AjaxR('../updates/delete', callback);
	};

	var allRequest = function() {
		var allRequest = AjaxR('../updates/all', allCallback);
	};

	var toggleForm = function() {
		// todo: there's got to be a better way to reset these.
		formDivElem.style.display = (formDivElem.style.display=='block')?'':'block';
		formToggleDivElem.innerHTML = (formDivElem.style.display=='block')?'Close':'Add an Update';
		if (formDivElem.style.display=='') {
			formNameElem.value = '';
			formUpdateElem.value = '';
		}
	};

	var handleClick = function(e) {
		var targetId= e.target.getAttribute('id'),
		// clean the id string, everything before a number
		command = (targetId)?targetId.split('_', 2)[0]:null;
		id = (targetId)?targetId.split('_', 2)[1]:null;
		switch (command) {
		case "addUpdate": 
			addUpdateRequest();
			break;
		case "deleteUpdate":
			deleteUpdateRequest(id);
			break;
		case "addAnUpdate":
			toggleForm();
			break;
		default:
			break;
		}
	};

	// Listen to all clicks in this web part
	Listen("click", handleClick, 'updatesWP');

}();