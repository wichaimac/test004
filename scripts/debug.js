document.addEventListener('DOMContentLoaded', function() {
    let extrovertScore = parseInt(localStorage.getItem('extrovertScore')) || 0;
    let introvertScore = parseInt(localStorage.getItem('introvertScore')) || 0;
    let sensingScore = parseInt(localStorage.getItem('sensingScore')) || 0;
    let intuitionScore = parseInt(localStorage.getItem('intuitionScore')) || 0;
    let thinkingScore = parseInt(localStorage.getItem('thinkingScore')) || 0;
    let feelingScore = parseInt(localStorage.getItem('FeelingScore')) || 0;
    let judgingScore = parseInt(localStorage.getItem('judgingScore')) || 0;
    let perceivingScore = parseInt(localStorage.getItem('perceivingScore')) || 0;

    document.getElementById('extrovertScore').textContent = extrovertScore;
    document.getElementById('introvertScore').textContent = introvertScore;
    document.getElementById('sensingScore').textContent = sensingScore;
    document.getElementById('intuitionScore').textContent = intuitionScore;
    document.getElementById('thinkingScore').textContent = thinkingScore;
    document.getElementById('feelingScore').textContent = feelingScore;
    document.getElementById('judgingScore').textContent = judgingScore;
    document.getElementById('perceivingScore').textContent = perceivingScore;

    console.log(`Extrovert score: ${extrovertScore}`);
    console.log(`Introvert score: ${introvertScore}`);
    console.log(`Sensing score: ${sensingScore}`);
    console.log(`Intuition score: ${intuitionScoreScore}`);
    console.log(`Thinking score: ${thinkingScore}`);
    console.log(`Feeling score: ${feelingScore}`);
    console.log(`Judging score: ${judgingScore}`);
    console.log(`Perceiving score: ${perceivingScore}`);
});

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
