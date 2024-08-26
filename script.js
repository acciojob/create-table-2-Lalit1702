function createTable() {
    // Get the table element by its ID
    const table = document.getElementById('myTable');
    
    // Clear the table content if there's any existing data
    table.innerHTML = '';

    // Prompt the user to input the number of rows
    const rows = prompt('Input number of rows');
    
    // Prompt the user to input the number of columns
    const cols = prompt('Input number of columns');

    // Create the table rows and columns based on the user's input
    for (let i = 0; i < rows; i++) {
        // Insert a new row in the table
        const row = table.insertRow(i);
        for (let j = 0; j < cols; j++) {
            // Insert a new cell in the current row
            const cell = row.insertCell(j);
            // Set the text content of the cell
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}
