// Функция для раскрытия/сворачивания ответов в FAQ
function toggleAnswer(id) {
    const answer = document.getElementById(`answer${id}`);
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        // Сворачиваем все ответы
        document.querySelectorAll('.answer').forEach(ans => {
            ans.style.display = 'none';
        });
        answer.style.display = 'block';
    }
}
