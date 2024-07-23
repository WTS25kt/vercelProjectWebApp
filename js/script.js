let selectedOptions = [];

function nextPage(nextPageId, selectedOption) {
    const currentPage = document.querySelector('.page.active');
    currentPage.classList.remove('active');

    const nextPage = document.getElementById(nextPageId);
    nextPage.classList.add('active');

    selectedOptions.push(selectedOption);

    if (nextPageId === 'result') {
        const output = selectedOptions.join('');
        document.getElementById('output').innerText = output;
    }
}