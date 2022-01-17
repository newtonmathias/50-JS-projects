/*const btns = document.querySelectorAll('.question-btn');

btns.forEach((btn) => {
    btn.addEventListener('click', (e)=> {
        const quesition = e.currentTarget.parentElement.parentElement;
        quesition.classList.toggle('show-text');
    })
})
*/

const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    const btn = question.querySelector('.question-btn');

    btn.addEventListener('click', () => {
        questions.forEach((item) => {
            if (item !== question) {
                item.classList.remove('show-text')
            }  
        })

        question.classList.toggle('show-text')
    })
})