document.addEventListener('DOMContentLoaded', function(e) {
    var input = document.getElementById('input');
    input.value = sessionStorage.getItem('draft');
    input.addEventListener('change', saveKeyWords);
    function saveKeyWords() {
    sessionStorage.setItem('draft', input.value);
}
});






