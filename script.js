const form = document.getElementById('studentForm');
const studentList = document.getElementById('studentList');

let students = JSON.parse(localStorage.getItem('students')) || [];

function displayStudents() {
    studentList.innerHTML = '';

    students.forEach((student, index) => {
        const row = `<tr>
            <td>${student.name}</td>
            <td>${student.matricule}</td>
            <td>
            <button onclick="deleteStudent(${index})">Delete</button></td>
            </tr>
            `;
        studentList.innerHTML += row;
    });
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const matricule = document.getElementById('matricule').value;

    if (name && matricule) {
        students.push({ name, matricule });
        localStorage.setItem('students', JSON.stringify(students));
        displayStudents();
        form.reset();
    }
});

function deleteStudent(index) {
    students.splice(index, 1);
    localStorage.setItem('students', JSON.stringify(students));
    displayStudents();
}

displayStudents();