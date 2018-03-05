$(document).ready(function(){
    showStartModal();
});

function showStartModal() {
    if(localStorage.getItem('modalYesBtn') != 1){
        //Запуск таймера на 3 секунды
        setTimeout(function(){
            /*Показать модальное окно*/
            $('#exampleModalCenter').modal('show');
            //При клике в частном случае на кнопку "Я согласен"
            $('#modal-yes-btn').on('click', function(){
                //Сохранить состояние в LocalStorage  и при повторном обновлении окно больше не покажеться
                localStorage.setItem('modalYesBtn', 1);
                //Закрыть модальное окно
                $('#exampleModalCenter').modal('hide');
            });
        }, 3000);
    }
}
