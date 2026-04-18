const form = document.getElementById('studentForm');
const studentList = document.getElementById('studentList');

let students = JSON.parse(localStorage.getItem('students')) || [];
let editIndex = -1;

// Display students
function displayStudents() {
    studentList.innerHTML = "";

    students.forEach((student, index) => {
        const row = `
            <tr>
                <td>${student.name}</td>
                <td>${student.matricule}</td>
                <td>
                    <button onclick="editStudent(${index})">Edit</button>
                    <button onclick="deleteStudent(${index})">Delete</button>
                </td>
            </tr>
        `;
        studentList.innerHTML += row;
    });
}

// Add or Update student
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const matricule = document.getElementById('matricule').value;

    if (editIndex === -1) {
        students.push({ name, matricule });
    } else {
        students[editIndex] = { name, matricule };
        editIndex = -1;
    }

    localStorage.setItem('students', JSON.stringify(students));

    form.reset();
    displayStudents();
});

// Edit student
function editStudent(index) {
    const student = students[index];

    document.getElementById('name').value = student.name;
    document.getElementById('matricule').value = student.matricule;

    editIndex = index;
}

// Delete student
function deleteStudent(index) {
    students.splice(index, 1);
    localStorage.setItem('students', JSON.stringify(students));
    displayStudents();
}

displayStudents();