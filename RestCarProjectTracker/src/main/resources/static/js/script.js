console.log('script.js loaded')
window.addEventListener('load', function(e) {
	console.log('page loaded');
	loadAllProjects();
});

function loadAllProjects() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/projects');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === xhr.DONE) {
			if (xhr.status === 200) {
	let projectList = JSON.parse(xhr.responseText);
			displayProjectList(projectList);
			} else {
//todo
			}
		}

	}
	xhr.send();
}

function displayProjectList(projects) {
	if (projects && Array.isArray(projects) && projects.length > 0) {
		let dataDiv = document.getElementById('projectListDiv');
		dataDiv.textContent ='';
		
		for(let project of projects) {
			let li = document.createElement('li');
			li.textContent = project.model;
			dataDiv.appendChild(li);
		}
		
		
		
	}
	
}