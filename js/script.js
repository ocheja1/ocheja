AOS.init();

const blurredOverlay = document.querySelector('.blurred-overlay');
const scrollableContent = document.querySelector('.home');

scrollableContent.addEventListener('scroll', () => {
    const maxScroll = scrollableContent.scrollHeight - scrollableContent.clientHeight;
    const currentScroll = scrollableContent.scrollTop;

    const blurAmount = (currentScroll / maxScroll) * 10; /* Adjust the multiplier as needed */
    const opacity = currentScroll / maxScroll;

    blurredOverlay.style.backdropFilter = `blur(${blurAmount}px)`;
    blurredOverlay.style.opacity = opacity.toString();
});

