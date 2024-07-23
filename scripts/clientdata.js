document.getElementById('personalityForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;
    let occupation = document.getElementById('occupation').value;

    let data = {
        age: age,
        gender: gender,
        occupation: occupation
    };

    fetch('/saveData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        gotopage3(); // เรียกฟังก์ชัน gotopage3 เมื่อส่งข้อมูลสำเร็จ
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

function gotopage3() {
    window.location.href = 'page3.html'; // เปลี่ยนหน้าไปยัง page3.html
}
