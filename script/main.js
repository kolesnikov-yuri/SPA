// "use strict";

// window.addEventListener('DOMContentLoaded', ()=> {

//     // Получаем все элементы с классом "dislike-icon"
//     const dislikeIcons = document.querySelectorAll('.dislike-icon');

//     // Проходим по каждому элементу и добавляем обработчик события
//     dislikeIcons.forEach(icon => {
//         icon.addEventListener('click', function() {
//         // Находим родительский элемент "thumb" для текущего "dislike-icon"
//             const thumb = this.closest('.thumb');
        
//         // Если родительский элемент найден, скрываем его
//         if (thumb) {
//             thumb.style.display = 'none';
//         }
//     });
//     });


//     // Получаем все элементы с классом "like-icon"
//     const likeIcons = document.querySelectorAll('.like-icon');

//     // Проходим по каждому элементу и добавляем обработчик события для like-icon
//     likeIcons.forEach(icon => {
//         icon.addEventListener('click', function() {
//            // Используем toggle для добавления/удаления класса
//             this.classList.toggle('liked');
//         });
//     });


    
// });
//////////////////////////////////////////////////
// "use strict";

// window.addEventListener('DOMContentLoaded', () => {
//     // Получаем все элементы с классом "dislike-icon"
//     const dislikeIcons = document.querySelectorAll('.dislike-icon');

//     // Массив для хранения скрытых карточек
//     const hiddenThumbs = new Set();

//     // Обработчик для dislike-icon
//     dislikeIcons.forEach(icon => {
//         icon.addEventListener('click', function() {
//             const thumb = this.closest('.thumb');
//             if (thumb) {
//                 thumb.style.display = 'none'; // Скрываем карточку
//                 hiddenThumbs.add(thumb); // Добавляем в массив скрытых карточек
//             }
//         });
//     });

//     // Получаем все элементы с классом "like-icon"
//     const likeIcons = document.querySelectorAll('.like-icon');

//     // Обработчик для like-icon
//     likeIcons.forEach(icon => {
//         icon.addEventListener('click', function() {
//             this.classList.toggle('liked'); // Используем toggle для добавления/удаления класса
//         });
//     });

//     // Получаем элемент с классом "like_top"
//     const likeTop = document.querySelector('.like_top');

//     // Обработчики событий для удерживания и отпускания
//     likeTop.addEventListener('mousedown', function() {
//         const thumbs = document.querySelectorAll('.thumb');
//         thumbs.forEach(thumb => {
//             // Проверяем наличие класса 'liked' у like-icon внутри текущей карточки
//             const likeIcon = thumb.querySelector('.like-icon');
//             if (likeIcon && !likeIcon.classList.contains('liked') && !hiddenThumbs.has(thumb)) {
//                 thumb.style.display = 'none'; // Скрываем карточки, если нет класса 'liked'
//             }
//         });
//     });

//     likeTop.addEventListener('mouseup', function() {
//         const thumbs = document.querySelectorAll('.thumb');
//         thumbs.forEach(thumb => {
//             if (!hiddenThumbs.has(thumb)) {
//                 thumb.style.display = ''; // Показываем все карточки снова, кроме скрытых
//             }
//         });
//     });

//     // Чтобы работать на мобильных устройствах
//     likeTop.addEventListener('touchstart', function() {
//         const thumbs = document.querySelectorAll('.thumb');
//         thumbs.forEach(thumb => {
//             // Проверяем наличие класса 'liked' у like-icon внутри текущей карточки
//             const likeIcon = thumb.querySelector('.like-icon');
//             if (likeIcon && !likeIcon.classList.contains('liked') && !hiddenThumbs.has(thumb)) {
//                 thumb.style.display = 'none'; // Скрываем карточки, если нет класса 'liked'
//             }
//         });
//     });

//     likeTop.addEventListener('touchend', function() {
//         const thumbs = document.querySelectorAll('.thumb');
//         thumbs.forEach(thumb => {
//             if (!hiddenThumbs.has(thumb)) {
//                 thumb.style.display = ''; // Показываем все карточки снова, кроме скрытых
//             }
//         });
//     });
// });



/////////////////////////////////////////////
"use strict";

window.addEventListener('DOMContentLoaded', () => {
    // Получаем все элементы с классом "dislike-icon"
    const dislikeIcons = document.querySelectorAll('.dislike-icon');

    // Массив для хранения скрытых карточек
    const hiddenThumbs = new Set();

    // Обработчик для dislike-icon
    dislikeIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const thumb = this.closest('.thumb');
            if (thumb) {
                thumb.style.display = 'none'; // Скрываем карточку
                hiddenThumbs.add(thumb); // Добавляем в массив скрытых карточек
            }
        });
    });

    // Получаем все элементы с классом "like-icon"
    const likeIcons = document.querySelectorAll('.like-icon');

    // Обработчик для like-icon
    likeIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            this.classList.toggle('liked'); // Используем toggle для добавления/удаления класса
        });
    });

    // Получаем элемент с классом "like_top"
    const likeTop = document.querySelector('.like_top');

    // Обработчики событий для удерживания и отпускания
    likeTop.addEventListener('mousedown', function() {
        const thumbs = document.querySelectorAll('.thumb');
        thumbs.forEach(thumb => {
            const likeIcon = thumb.querySelector('.like-icon');
            if (likeIcon && !likeIcon.classList.contains('liked') && !hiddenThumbs.has(thumb)) {
                thumb.style.display = 'none'; // Скрываем карточки, если нет класса 'liked'
            }
        });
    });

    likeTop.addEventListener('mouseup', function() {
        const thumbs = document.querySelectorAll('.thumb');
        thumbs.forEach(thumb => {
            if (!hiddenThumbs.has(thumb)) {
                thumb.style.display = ''; // Показываем все карточки снова, кроме скрытых
            }
        });
    });

    // Чтобы работать на мобильных устройствах
    likeTop.addEventListener('touchstart', function() {
        const thumbs = document.querySelectorAll('.thumb');
        thumbs.forEach(thumb => {
            const likeIcon = thumb.querySelector('.like-icon');
            if (likeIcon && !likeIcon.classList.contains('liked') && !hiddenThumbs.has(thumb)) {
                thumb.style.display = 'none'; // Скрываем карточки, если нет класса 'liked'
            }
        });
    });

    likeTop.addEventListener('touchend', function() {
        const thumbs = document.querySelectorAll('.thumb');
        thumbs.forEach(thumb => {
            if (!hiddenThumbs.has(thumb)) {
                thumb.style.display = ''; // Показываем все карточки снова, кроме скрытых
            }
        });
    });

    // Получаем элемент с классом "popup-content"
    const popupContent = document.querySelector('.popup-content');

    // Получаем все карточки
    const thumbs = document.querySelectorAll('.thumb');

    // Обработчик клика на карточки
    thumbs.forEach(thumb => {
        thumb.addEventListener('click', function() {
            // Получаем номер карточки из класса
            const thumbClass = this.classList[1]; // thumb_1, thumb_2 и т.д.
            const thumbNumber = thumbClass.split('_')[1]; // Извлекаем номер

            // Меняем стиль display на flex
            popupContent.style.display = 'flex';

            // Меняем фоновое изображение
            popupContent.style.background = `url('../images/fulls/0${thumbNumber}.jpg')`;
            popupContent.style.backgroundSize = 'cover'; // Опционально: чтобы изображение полностью заполняло элемент
        });
    });
});

