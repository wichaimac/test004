
function userAnswer(answer) {
    let extrovertScore = parseInt(localStorage.getItem('extrovertScore')) || 0;
    let introvertScore = parseInt(localStorage.getItem('introvertScore')) || 0;
    let sensingScore = parseInt(localStorage.getItem('sensingScore')) || 0;
    let intuitionScore = parseInt(localStorage.getItem('intuitionScore')) || 0;
    let thinkingScore = parseInt(localStorage.getItem('thinkingScore')) || 0;
    let feelingScore = parseInt(localStorage.getItem('feelingScore')) || 0;
    let judgingScore = parseInt(localStorage.getItem('judgingScore')) || 0;
    let perceivingScore = parseInt(localStorage.getItem('perceivingScore')) || 0;

// ฟังก์ชันรีเซ็ตคะแนนสะสม
/* function resetScores() {
    localStorage.setItem('extrovertScore', 0);
    localStorage.setItem('introvertScore', 0);
    localStorage.setItem('sensingScore', 0);
    localStorage.setItem('intuitionScore', 0);
    localStorage.setItem('thinkingScore', 0);
    localStorage.setItem('feelingScore', 0);
    localStorage.setItem('judgingScore', 0);
    localStorage.setItem('perceivingScore', 0);
    console.log("Scores have been reset.");
} */

// เรียกใช้ฟังก์ชันรีเซ็ตเมื่อหน้าเว็บโหลด

/* document.addEventListener('DOMContentLoaded', (event) => {
    resetScores();
}); */


    
    if (answer === 'e') {
        extrovertScore += 1;
    } else if (answer === 's') {
        sensingScore += 1;
    } else if (answer === 't') {
        thinkingScore += 1;
    } else if (answer === 'j') {
        judgingScore += 1;
    } else if (answer === 'i') {
        introvertScore += 1;
    } else if (answer === 'n') {
        intuitionScore += 1;
    } else if (answer === 'f') {
        feelingScore += 1;
    } else if (answer === 'p') {
        perceivingScore += 1;
    }

    localStorage.setItem('extrovertScore', extrovertScore);
    localStorage.setItem('introvertScore', introvertScore);
    localStorage.setItem('sensingScore', sensingScore);
    localStorage.setItem('intuitionScore', intuitionScore);
    localStorage.setItem('thinkingScore', thinkingScore);
    localStorage.setItem('feelingScore', feelingScore);
    localStorage.setItem('judgingScore', judgingScore);
    localStorage.setItem('perceivingScore', perceivingScore);
    // บันทึกตัวแปรใหม่ใน localStorage เช่น localStorage.setItem('anotherFactor', anotherFactor);

    console.log("Extrovert score:", extrovertScore);
    console.log("Introvert score:", introvertScore);
    console.log("Sensing score:", sensingScore);
    console.log("Intuition score:", intuitionScore);
    console.log("Thinking score:", thinkingScore);
    console.log("Feeling score:", feelingScore);
    console.log("Judging score:", judgingScore);
    console.log("Perceiving score:", perceivingScore);
    // แสดงค่าตัวแปรใหม่ใน console เช่น console.log("Another factor:", anotherFactor);

/*     console.log(`Answer: ${answer}, Extrovert score: ${extrovertScore}, Introvert score: ${introvertScore}, Sensing score: ${sensingScore}, Intuition score: ${intuitionScoreScore}, Thinking score: ${thinkingScore}, Feeling score: ${feelingScore}, Judging score: ${judgingScoreScore}, Perceiving score: ${perceivingScore} `);

} */
}

function goToQuiz1() {
    window.location.href = 'quiz1.html';
    resetScores();
}

function goToQuiz2() {
    window.location.href = 'quiz2.html';
}

function goToQuiz3() {
    window.location.href = 'quiz3.html';
}

function goToQuiz4() {
    window.location.href = 'quiz4.html';
}

function goToQuiz5() {
    window.location.href = 'quiz5.html';
}

function goToQuiz6() {
    window.location.href = 'quiz6.html';
}

function goToQuiz7() {
    window.location.href = 'quiz7.html';
}

function goToQuiz8() {
    window.location.href = 'quiz8.html';
}

function goToQuiz9() {
    window.location.href = 'quiz9.html';
}

function goToQuiz10() {
    window.location.href = 'quiz10.html';
}

function goToQuiz11() {
    window.location.href = 'quiz11.html';
}

function goToQuiz12() {
    window.location.href = 'quiz12.html';
}

function goToQuiz13() {
    window.location.href = 'quiz13.html';
}

function goToQuiz14() {
    window.location.href = 'quiz14.html';
}

function goToQuiz15() {
    window.location.href = 'quiz15.html';
}


function goToQuiz16() {
    window.location.href = 'quiz16.html';
}


function goToPage2() {
    window.location.href = 'page2.html';
}

function goToPage3() {
    window.location.href = 'page3.html';
}

function goToPage4() {
    window.location.href = 'page4.html';
}





function goToResultPage() {
    window.location.href = 'result.html';
}

function goToDebugPage() {
    window.location.href = 'debug.html';
}


function goToQuiz115() {
    window.location.href = 'Quiz1.5.html';
}

function goToQuiz1135() {
    window.location.href = 'Quiz13.5.html';
}

function resetAndGoToQuiz0() {
    window.location.href = 'Quiz0.html';
    resetScores();
}

function resetAndGoToPage3() {
    window.location.href = 'page3.html';
    resetScores();
}


function resetScores() {
    localStorage.setItem('extrovertScore', 0);
    localStorage.setItem('introvertScore', 0);
    localStorage.setItem('sensingScore', 0);
    localStorage.setItem('intuitionScore', 0);
    localStorage.setItem('thinkingScore', 0);
    localStorage.setItem('feelingScore', 0);
    localStorage.setItem('judgingScore', 0);
    localStorage.setItem('perceivingScore', 0);
    console.log("Scores have been reset.");
} 




/*     document.addEventListener('DOMContentLoaded', (event) => {
    resetScores();
});
 */
    /* console.log(`Answer: ${answer}, Extrovert score: ${extrovertScore}, Introvert score: ${introvertScore}, Sensing score: ${sensingScore}, Intuition score: ${intuitionScoreScore}, Thinking score: ${thinkingScore}, Feeling score: ${feelingScore}, Judging score: ${judgingScoreScore}, Perceiving score: ${perceivingScore} `); */

