function openModal(id){
    document.querySelector('.modal-back').classList.add("show");
    document.getElementById(id).classList.add("show");
}
document.querySelectorAll('.closeBtn').forEach(function(btn){
    btn.addEventListener('click', function(){
        document.querySelector('.modal-back').classList.remove('show');
        document.querySelectorAll('.modal').forEach(function(modal){
            modal.classList.remove('show');
        });
    });
});