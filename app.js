function addProjects() {
	var projectDiv = document.getElementById("#ourProjects");
	for (var i =0; i < 4; i++) {
		var project = document.createElement("div");
		var projectLink = document.createElement("a");
		var projectImage = document.createElement("img");
		projectLink.setAttribute("href", "http://www.zombo.com");
		projectImage.setAttribute("src", "project"+1+".png");
		projectLink.appendChild(projectImage);
		project.appendChild(projectLink);
		projectDiv.appendChild(project);
	}
}