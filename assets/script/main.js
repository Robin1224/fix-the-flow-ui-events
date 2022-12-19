const animateOnEvent = (element, event, animationClass) => {
  const callbackFunction = () => {
    element.classList.toggle(animationClass)
  };

  element.addEventListener(event, callbackFunction);
  element.addEventListener('animationend', callbackFunction);
};

animateOnEvent(document.querySelector('a:nth-of-type(10)'),  'click', 'bounce');
animateOnEvent(document.querySelector('a:nth-of-type(11)'),  'click', 'shake');
animateOnEvent(document.querySelector('a:nth-of-type(12)'),  'click', 'jump');
