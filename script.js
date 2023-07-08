(function() {
    const pictures = [
        '1',
        '2',
        '3',
        '4'
    ]; // images

    const buttons = document.querySelectorAll('.btn');
    const imgDiv = document.querySelector('.img-container');

    let count = 0; // start from 0

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            if (button.classList.contains('btn-left')) {
                count--;
                if (count < 0) {
                    count = pictures.length - 1;
                }
                imgDiv.style.background = `url('image/${pictures[count]}.jpg')`;
            }
            if (button.classList.contains('btn-right')) {
                count++;
                if (count > pictures.length - 1) {
                    count = 0;
                }
                imgDiv.style.background = `url('image/${pictures[count]}.jpg')`;
            }
        });
    });
})();
