function callRoll(students) {
    if (!Array.isArray(students)) return; // 의도하지 않은 자료형이면 함수를 빠져나감.
    students.forEach((student) => {
        console.log(`Are you here, ${student}`);
    });
}

const students = ['Jun', 'Ali', 'Murry', 'Toby'];
callRoll(students);