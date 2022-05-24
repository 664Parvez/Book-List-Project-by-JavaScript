let btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    let input = document.querySelector('.input').value;

    if (input == ''){
        alert('Empty value here! Please enter your book name...')
    }
    else{
        let table = document.querySelector('.table');
        let create_table_body = document.createElement('tbody');
        let table_row = document.createElement('tr');
        let book_section = document.createElement('th');
        let price_section = document.createElement('th');
        let auther_section = document.createElement('th');

        table.appendChild(create_table_body);
        create_table_body.appendChild(table_row);
        table_row.appendChild(book_section).innerHTML = input;

        if (input == 'Python' || input == 'python') {
            table_row.appendChild(price_section).innerHTML = '$22.99';
            table_row.appendChild(auther_section).innerHTML = 'Eric Matthes';
        }
        else if (input == 'JavaScript' || input == 'javascript') {
            table_row.appendChild(price_section).innerHTML = '$20.87';
            table_row.appendChild(auther_section).innerHTML = 'David Flanagan';
        }
        else if (input == 'Java' || input == 'java') {
            table_row.appendChild(price_section).innerHTML = '$20.87';
            table_row.appendChild(auther_section).innerHTML = 'Elliotte Rusty Harold';
        }
        else if (input == 'PHP' || input == 'php') {
            table_row.appendChild(price_section).innerHTML = '$24.77';
            table_row.appendChild(auther_section).innerHTML = 'Alan Forbes';
        }
        else if (input == 'C++' || input == 'c++') {
            table_row.appendChild(price_section).innerHTML = '$31.16';
            table_row.appendChild(auther_section).innerHTML = 'Bjarne Stroustrup';
        }
        else if (input == 'C' || input == 'c') {
            table_row.appendChild(price_section).innerHTML = '$19.76';
            table_row.appendChild(auther_section).innerHTML = 'Dennis Ritchie';
        }
    }

    e.preventDefault()
})