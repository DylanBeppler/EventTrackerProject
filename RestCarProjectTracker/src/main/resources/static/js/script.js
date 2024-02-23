console.log('script.js loaded')
window.addEventListener('load', function(e) {
	console.log('page loaded');
	init();
	loadAllProjects();
});


function init() {
	document.projectForm.lookup.addEventListener('click', function(e) {
		e.preventDefault();
		let projectId = document.projectForm.projectId.value;
		if (!isNaN(projectId) && projectId > 0) {
			getProject(projectId);
		}
	})
}


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
		dataDiv.textContent = '';

		let ul = document.createElement('ul');
		for (let project of projects) {

			let liModel = document.createElement('li');
			liModel.textContent = "Model: " + project.model;
			ul.appendChild(liModel);


			let liEngine = document.createElement('li');
			liEngine.textContent = "Engine: " + project.engine;
			ul.appendChild(liEngine);


			let liInterior = document.createElement('li');
			liInterior.textContent = "Interior: " + project.interior;
			ul.appendChild(liInterior);


			let liExterior = document.createElement('li');
			liExterior.textContent = "Exterior: " + project.exterior;
			ul.appendChild(liExterior);


			let liSuspension = document.createElement('li');
			liSuspension.textContent = "Suspension: " + project.suspension;
			ul.appendChild(liSuspension);


			ul.appendChild(document.createElement('hr'));
		}

		dataDiv.appendChild(ul);
	}

}

function getProject(projectId) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/projects/' + projectId, true);
	xhr.onload = function() {
		if (xhr.status === 200) {
			try {
				var projectData = JSON.parse(xhr.responseText);
				displayProject(projectData);

			} catch (e) {
				console.error('Error parsing film data:', e);
				document.getElementById('projectData').textContent = 'Project data is invalid';
			}
		} else {
			document.getElementById('projectData').textContent = 'Project not found';
		}
	};
	xhr.onerror = function() {
		document.getElementById('projectData').textContent = 'Project not found';
	};

	xhr.send();

}

function displayProject(project) {
	let detailDataDiv = document.getElementById('projectDetailDiv');
	detailDataDiv.textContent = '';
	let titleElement = document.createElement('h1');
	titleElement.textContent = project.model;
	detailDataDiv.appendChild(titleElement);


	let infoList = document.createElement('ul');
	let liEngine = document.createElement('li');
	liEngine.textContent = "Engine: " + project.engine;
	infoList.appendChild(liEngine);


	let liInterior = document.createElement('li');
	liInterior.textContent = "Interior: " + project.interior;
	infoList.appendChild(liInterior);


	let liExterior = document.createElement('li');
	liExterior.textContent = "Exterior: " + project.exterior;
	infoList.appendChild(liExterior);


	let liSuspension = document.createElement('li');
	liSuspension.textContent = "Suspension: " + project.suspension;
	infoList.appendChild(liSuspension);

	detailDataDiv.appendChild(infoList);

}
