"use strict";

window.addEventListener('DOMContentLoaded', ()=> {

    // Получаем все элементы с классом "dislike-icon"
    const dislikeIcons = document.querySelectorAll('.dislike-icon');

    // Проходим по каждому элементу и добавляем обработчик события
    dislikeIcons.forEach(icon => {
        icon.addEventListener('click', function() {
        // Находим родительский элемент "thumb" для текущего "dislike-icon"
            const thumb = this.closest('.thumb');
        
        // Если родительский элемент найден, скрываем его
        if (thumb) {
            thumb.style.display = 'none';
        }
    });
    });


    // Получаем все элементы с классом "like-icon"
    const likeIcons = document.querySelectorAll('.like-icon');

    // Проходим по каждому элементу и добавляем обработчик события для like-icon
    likeIcons.forEach(icon => {
        icon.addEventListener('click', function() {
           // Используем toggle для добавления/удаления класса
            this.classList.toggle('liked');
        });
    });
    ///////////////////////////////////////////////

    
});



