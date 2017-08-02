var $ = {};
	var createElement = function(options) {


		var properties = options.properties;

		// create element
		var element = document.createElement(options.element);        	

		// class list
		if (properties.classList &&
			Array.isArray(properties.classList)) {
			properties.classList.forEach(function(className) {
				$.addClass(element, className);
			}.bind(this));
		} else if (properties.classList) {
			element.classList = properties.classList;
		}

		// id
		if (properties.id) {
			element.id = properties.id;
		}

		if (properties.role) {
			element.role = properties.role;
		}

		if (properties.title) {
			element.title = properties.title;
		}
		
		// textnode
		if (properties.text) {
			element.appendChild(document.createTextNode(properties.text));			
		}	

		// innerHTML
		if (properties.innerHTML) {
			element.innerHTML = properties.innerHTML;
		}

		if (properties.childNode) {
			element.appendChild(properties.childNode);
		}

		// dataset
		if (properties.dataset) {
			for (var data in properties.dataset) {
				element.dataset[data] = properties.dataset[data];
			}
		}

		return element;
	};

$.createElement = createElement;
$.addClass = function(element, className) {

    if (element.classList && element.classList.add) {
        element.classList.add(className);
    } else if (element.className) {
        element.className = element.className + ' ' + className;
    }

    return element;

};

$.createFragment = function() {
	return document.createDocumentFragment();
};


$.createListFragment = function(list, items, links) {

	function appendLinkToItem(item, index) {
		return item.append(links[index]);
	}

	function appendItemToList(item) {
		list.appendChild(item);
	}

	items.map(appendLinkToItem);
	items.forEach(appendItemToList);
	return $.createFragment().appendChild(list);
};

