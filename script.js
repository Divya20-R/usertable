let userId = 4;
let userObject=document.getElementById('username');

userObject.addEventListener('keypress', function(event) {
	if (event.key === 'Enter') {
		addUser(userObject);
	}
});

function addUser(userObject) {
	const username = userObject.value;
	if (username !== '') {
		const tableBody = document.getElementById('tablebody');
		const newRow = document.createElement('tr');
		newRow.innerHTML = `
			<td>${userId}</td>
			<td>${username}</td>
		`;
		tableBody.appendChild(newRow);
		userId++;
		userObject.value = '';
	}
}




