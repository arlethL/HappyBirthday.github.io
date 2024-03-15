$(document).ready(function(){
    $('.left-curtain').css('width', '0%');
    $('.right-curtain').css('width', '0%');

    
    function generateConfetti() {
        const colors = ['#ff69b4', '#00ff00', '#0000ff', '#800080', '#ffff00', '#ff0000', '#ffa500']; 

        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        const size = Math.floor(Math.random() * 10 + 5) + 'px'; 
        const bgColor = colors[Math.floor(Math.random() * colors.length)]; 

        confetti.style.width = size;
        confetti.style.height = size;
        confetti.style.backgroundColor = bgColor;

        const x = Math.random() * window.innerWidth;
        const y = window.innerHeight + 50; 
        confetti.style.left = x + 'px';
        confetti.style.top = y + 'px';

        confetti.animate([
            { transform: 'translateY(' + y + 'px)' },
            { transform: 'translateY(-100vh)' } 
        ], {
            duration: Math.random() * 3000 + 2000, 
            easing: 'ease-out',
            iterations: 1,
            fill: 'forwards'
        });

        document.body.appendChild(confetti);

        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }

    $('.valentines-day').click(function(){
        $('.envelope').css({'animation':'fall 3s linear 1', '-webkit-animation':'fall 3s linear 1'});
        $('.envelope').fadeOut(800, function() {
            $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();

            $('#card').css({'visibility':'visible', 'opacity': 0, 'transform': 'scale(0.1)'});
            $('#card').animate({'opacity': 1}, {duration: 1000, step: function(now, fx) {
                var scale = 1 + Math.sin(now * Math.PI) * 0.1; 
                $(this).css('transform', 'scale(' + scale + ')');
            }}); 

            for (let i = 0; i < 120; i++) {
                generateConfetti();
            }
        });
    });
});
