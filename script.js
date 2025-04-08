
function onFocusHandler(event) {
    console.log('Image focused: ', event.target.alt);
    event.target.style.border = '3px solid #ff6600';
  }
  
 
  function onBlurHandler(event) {
    console.log('Image lost focus: ', event.target.alt);
    event.target.style.border = ''; 
  }
  

  function onMouseOverHandler(event) {
    console.log('Mouseover on image: ', event.target.alt);
    event.target.style.transform = 'scale(1.1)'; 
  }
  
 
  function onMouseLeaveHandler(event) {
    console.log('Mouse left image: ', event.target.alt);
    event.target.style.transform = 'scale(1)'; 
  }
  

  function onPageLoad() {
    console.log('Page loaded successfully!');
    addTabFocusAttribute();
  }
  
 
  function addTabFocusAttribute() {
    const images = document.querySelectorAll('.gallery img');
    images.forEach((image, index) => {
      image.setAttribute('tabindex', index + 1); 
    });
    console.log('Tabindex added to all images');
  }
  
 
  window.addEventListener('load', onPageLoad);
  
  const images = document.querySelectorAll('.gallery img');
  images.forEach(image => {
  
    image.addEventListener('mouseover', onMouseOverHandler);
    image.addEventListener('mouseleave', onMouseLeaveHandler);
    
 
    image.addEventListener('focus', onFocusHandler);
    image.addEventListener('blur', onBlurHandler);
  });
  console.log("Hello Reyan")