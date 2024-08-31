// Add event listener to table rows
document.querySelectorAll('#morse-code-table tbody tr').forEach(row => {
	row.addEventListener('click', () => {
		// Get the Morse code for the clicked row
		const morseCode = row.cells[1].textContent;
		// Do something with the Morse code (e.g., play audio, display in alert)
		alert(`Morse code for ${row.cells[0].textContent}: ${morseCode}`);
	});
});

