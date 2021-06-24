(async () => {
	let response = await fetch('https://api.github.com/orgs/GodotID/repos');

	let projects = await response.json();
	let project = projects[Math.floor(Math.random() * projects.length)].name;

	response = await fetch(
		`https://api.github.com/repos/GodotID/${project}/contributors?anon=1`
	);
	let contributors = await response.json();
	contributors = contributors.map(c => {
		return {
			name: c.login, avatar: c.avatar_url,
			count: c.contributions
		};
	});

	let contributor = contributors[Math.floor(Math.random() * contributors.length)];

	let photo = document.getElementById('cont_foto');
	let nama = document.getElementById('cont_nama');
	let jumlah = document.getElementById('cont_jumlah');
	let proyek = document.getElementById('cont_proyek');

	photo.src = contributor.avatar;
	nama.innerText = contributor.name;
	jumlah.innerText = contributor.count;
	proyek.innerText = project;
	proyek.href = `https://github.com/GodotID/${project}`
})()
