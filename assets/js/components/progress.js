document.addEventListener('DOMContentLoaded', ()=>{

    let progressBarWrapper = document.querySelector('.progress-bar-wrapper');
    let progressBar = progressBarWrapper.querySelector('.progress-bar');
    let currentSumSpan = progressBarWrapper.querySelector('#current-sum-total');
    let currentSum = Number(progressBarWrapper.querySelector('#current-sum-total').getAttribute('data-sum'));
    let limit = Number(progressBarWrapper.querySelector('#sum-limit').getAttribute('data-limit'));

    // add current sum into span
    let formattedCurrentSum = currentSum.toLocaleString('ru-RU');
    currentSumSpan.innerText = formattedCurrentSum;

    // calculate progress bar length
    let percent = Math.round((currentSum * 100) / limit);
    progressBar.setAttribute('style', 'width:'+percent+'%');
});