console.log('script.js loaded')
window.addEventListener('load', function(e) {
	console.log('page loaded');
	init();
	loadAllProjects();
});


function init() {
	document.getElementById('updateProjectButton').addEventListener('click', function() {
		let projectId = document.getElementById('updateProjectId').value;
		console.log(projectId);
		if (projectId) {
			updateProject(projectId);
			console.log(projectId);
		}
	});
	document.getElementById('addProjectButton').addEventListener('click', addProject);
	document.getElementById('removeProjectButton').addEventListener('click', function(e) {
		e.preventDefault();
		let projectId = document.projectForm.projectId.value;
		if (!isNaN(projectId) && projectId > 0) {
			removeProject(projectId);
		} else {
			console.error('Invalid Project ID');
		}
	});
	document.projectForm.lookup.addEventListener('click', function(e) {
		e.preventDefault();
		let projectId = document.projectForm.projectId.value;
		if (!isNaN(projectId) && projectId > 0) {
			getProject(projectId);
		}
	});
}

function addProject() {
	var project = {
		model: document.getElementById('projectModel').value,
		engine: document.getElementById('projectEngine').value,
		interior: document.getElementById('projectInterior').value,
		exterior: document.getElementById('projectExterior').value,
		suspension: document.getElementById('projectSuspension').value
	};

	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/projects', true);
	xhr.setRequestHeader('Content-Type', 'application/json');

	xhr.onload = function() {
		if (xhr.status === 200 || xhr.status === 201) {
			var projectData = JSON.parse(xhr.responseText);
			displayProject(projectData);
			var statusMessageElement = document.getElementById('statusMessage');
			if (statusMessageElement !== null) {
				statusMessageElement.textContent = 'Project successfully added';
				statusMessageElement.style.display = 'block';
				statusMessageElement.classList.add('alert-success');
			}
		} else {
			console.error('Error adding project:', xhr.responseText);
		}
	};

	xhr.onerror = function() {
		console.error('Request failed');
	};

	xhr.send(JSON.stringify(project));
}

function loadAllProjects() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/projects');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === xhr.DONE) {
			if (xhr.status === 200) {
				let projectList = JSON.parse(xhr.responseText);
				totalProjectsCount = projectList.length;
				displayProjectList(projectList);
			} else {
				//todo
			}
		}

	}
	xhr.send();
}

let totalProjectsCount = 0;

function displayProjectList(projects) {
	let dataDiv = document.getElementById('projectListDiv');
	dataDiv.textContent = '';


	let table = document.createElement('table');
	table.className = 'table table-striped';


	let thead = document.createElement('thead');
	let headerRow = document.createElement('tr');
	let headers = ["ID", "Model", "Engine", "Interior", "Exterior", "Suspension"];
	headers.forEach(headerText => {
		let header = document.createElement('th');
		header.textContent = headerText;
		headerRow.appendChild(header);
	});
	thead.appendChild(headerRow);
	table.appendChild(thead);


	let tbody = document.createElement('tbody');
	projects.forEach(project => {
		let row = document.createElement('tr');
		row.innerHTML = `
            <td>${project.id}</td>
            <td>${project.model}</td>
            <td>${project.engine}</td>
            <td>${project.interior}</td>
            <td>${project.exterior}</td>
            <td>${project.suspension}</td>
        `;
		tbody.appendChild(row);
	});
	table.appendChild(tbody);


	dataDiv.appendChild(table);
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
				console.error('Error parsing project data:', e);
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


	let listAllButton = document.createElement('button');
	listAllButton.textContent = 'List All Projects';
	listAllButton.className = 'btn btn-primary mt-3';
	listAllButton.addEventListener('click', loadAllProjects);

	 let totalCountElement = document.createElement('p');
    totalCountElement.textContent = `Total Projects: ${totalProjectsCount}`;
    detailDataDiv.appendChild(totalCountElement);

	detailDataDiv.appendChild(listAllButton);

}



function removeProject(projectId) {
	var xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/projects/' + projectId, true);
	xhr.onload = function() {
		if (xhr.status === 200 || xhr.status === 204) {
			console.log('Project successfully deleted');
			var statusMessageElement = document.getElementById('statusMessage');
			if (statusMessageElement !== null) {
				statusMessageElement.textContent = 'Project successfully deleted';
				statusMessageElement.style.display = 'block';
				statusMessageElement.classList.add('alert-success');
			}
			loadAllProjects();
		} else {
			console.error('Error deleting project: ', xhr.status);
			document.getElementById('projectData').textContent = 'Error deleting project';
		}
	};
	xhr.onerror = function() {
		console.error('Network error while deleting project');
		document.getElementById('projectData').textContent = 'Network error while deleting project';
	};

	xhr.send();
}


function updateProject(projectId) {
	var projectData = {
		model: document.getElementById('updateProjectModel').value,
		engine: document.getElementById('updateProjectEngine').value,
		interior: document.getElementById('updateProjectInterior').value,
		exterior: document.getElementById('updateProjectExterior').value,
		suspension: document.getElementById('updateProjectSuspension').value
	};

	var xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/projects/' + projectId, true);
	xhr.setRequestHeader('Content-Type', 'application/json');

	xhr.onload = function() {
		if (xhr.status === 200 || xhr.status === 204) {
			console.log('Project successfully updated');
			var statusMessageElement = document.getElementById('statusMessage');
			if (statusMessageElement !== null) {
				statusMessageElement.textContent = 'Project successfully updated';
				statusMessageElement.style.display = 'block';
				statusMessageElement.classList.add('alert-success');
			}
			loadAllProjects();
		} else {
			console.error('Error updating project: ', xhr.responseText);
			if (statusMessageElement !== null) {
				statusMessageElement.textContent = 'Error updating project';
				statusMessageElement.style.display = 'block';
				statusMessageElement.classList.add('alert-danger');
			}
		}
	};

	xhr.onerror = function() {
		console.error('Network error while updating project');
		if (statusMessageElement !== null) {
			statusMessageElement.textContent = 'Network error while updating project';
			statusMessageElement.style.display = 'block';
			statusMessageElement.classList.add('alert-danger');
		}
	};

	xhr.send(JSON.stringify(projectData));
}
