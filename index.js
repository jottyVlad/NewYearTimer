$(document).snowfall({
        flakeCount: 300,
        minSize: 2,
        maxSize: 5,
        round: true,
        shadow: false,
});

// document.addEventListener('DOMContentLoaded', function() {
//     // конечная дата, например 1 июля 2021
//     const deadline = new Date(2024, 1, 1, 0, 35, 0);
//     // id таймера
//     let timerId = null;
//     // склонение числительных
//     function declensionNum(num, words) {
//         return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
//     }
//     // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
//     function countdownTimer() {
//         const diff = deadline.getTime() - (new Date()).getTime();
//         console.log(diff);
//         if (diff <= 0) {
//             $text.dataset.display = diff <= 0 ? "block" : "none";
//             $timer_items.dataset.display = diff > 0 ? "flex" : "none";
//             clearInterval(timerId);
//         }
//         const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
//         const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
//         const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
//
//         $text.dataset.display = diff <= 0 ? "block" : "none";
//         $timer_items.dataset.display = diff > 0 ? "flex" : "none";
//         $hours.textContent = hours < 10 ? '0' + hours : hours;
//         $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
//         $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
//         $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
//         $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
//         $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
//     }
//     // получаем элементы, содержащие компоненты даты
//     const $hours = document.querySelector('.timer__hours');
//     const $minutes = document.querySelector('.timer__minutes');
//     const $seconds = document.querySelector('.timer__seconds');
//     const $timer_items = document.querySelector('.timer__items');
//     const $text = document.querySelector('.congrats_text');
//     // вызываем функцию countdownTimer
//     countdownTimer();
//     // вызываем функцию countdownTimer каждую секунду
//     timerId = setInterval(countdownTimer, 1000);
// });