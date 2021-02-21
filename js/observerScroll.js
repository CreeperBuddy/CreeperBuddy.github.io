const faders = document.querySelectorAll('.fade-in');
const circles = document.querySelectorAll('.circle-in');

const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting)  {
          return;
      } else {
        entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
      }
    })
}, appearOptions);

faders.forEach(function (fader) {
    appearOnScroll.observe(fader);
})

const expandOnScroll = new IntersectionObserver(function (entries, expandOnScroll) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting)  {
          return;
      } else {
        entry.target.classList.add('expand');
        expandOnScroll.unobserve(entry.target);
      }
    })
}, appearOptions);

circles.forEach(function (circle) {
    expandOnScroll.observe(circle);
})

