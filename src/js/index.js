import 'loading-attribute-polyfill';
import WOW from 'wow.js';
import $ from 'jquery';
import 'slick-carousel';
import { createFocusTrap } from 'focus-trap';


window.addEventListener('DOMContentLoaded', () => {

    
    //burger menu
    const burger = document.querySelector('.header__burger'),
          burgerMenu = document.querySelector('.header__menu'),
          burgerList = document.querySelectorAll('.header__link[data-goto]'),
          mobileMenu = createFocusTrap('.header__body');
          

          
          
          function closeBurgerMenu(){
              mobileMenu.deactivate();
              burger.classList.remove('active');
              burgerMenu.classList.remove('active');
              document.body.classList.remove('lock');
            }

          function openBuger(){
                  burger.classList.toggle('active');
                  burgerMenu.classList.toggle('active');
                  document.body.classList.toggle('lock');
                  mobileMenu.activate();
            }

            burger.addEventListener('click', () =>{
                openBuger();
            });

            burger.addEventListener('keydown', (e) =>{
                if(e.code ==='Enter'){
                    openBuger();
                }
            });
    
            burgerList.forEach(item =>{
                item.addEventListener('click', () => {
                    closeBurgerMenu(item);   
                });  
            });

            burgerMenu.addEventListener('click',(e)=>{
                closeBurgerMenu(e);
            });

            document.addEventListener('keydown', (e) => {
                if (e.code === 'Escape' && burgerMenu.classList.contains('active')) {
                    closeBurgerMenu();  
                }
            });


         // Slider js


    // const slides = document.querySelectorAll('.article-slider__slide'),
    // prev = document.querySelector('.article-slider__btn_prev'),
    // next = document.querySelector('.article-slider__btn_next');

    // let slideIndex = 1;
    // showSlides(slideIndex);


    // function showSlides(n){
    //     if (n > slides.length) {
    //          slideIndex = 1;
    //     }

    //     if (n < 1 ){
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach(item => item.style.display = 'none');
    //     slides[slideIndex -1].style.display = 'block';
     

    // }
    
    // function plusSlides(n) {
    //     showSlides(slideIndex += n);
    // }
    
    // prev.addEventListener('click', () =>{
    //     plusSlides(-1);
    // });
    
    // next.addEventListener('click', () =>{
    //     plusSlides(1);
    // });
    




    // Slider slick-carousel
    $('.article-slider__container').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '.article-slider__btn_prev',
        nextArrow: '.article-slider__btn_next'
    });

    

    
    //Tabs
    const tabsBtn = document.querySelectorAll('.tabs__item');
    const tabsItems = document.querySelectorAll('.tabs-content__section');


        tabsBtn.forEach(onTabClick);

        function onTabClick(item){

            item.addEventListener('click', () =>{
                let currentBtn = item;
                let tabId = currentBtn.getAttribute("data-tab");
                let currentTab = document.querySelector(tabId);

                if( ! currentBtn.classList.contains('active') ) {

                    tabsBtn.forEach((item) =>{
                        item.classList.remove('active');
                        item.classList.remove('animate__animated');
                    

                    });
    
                    tabsItems.forEach((item) =>{
                        item.classList.remove('active');
                        item.classList.remove('animate__animated');
                    
                    });
    
                    
    
                    currentBtn.classList.add('active');
                    currentBtn.classList.add('animate__animated');
                    currentBtn.focus();
                    currentTab.setAttribute('tabindex', 0);
                
                    currentTab.classList.add('active');
                    currentTab.classList.add('animate__animated');
                    currentTab.focus();
                    currentTab.setAttribute('tabindex', 0);
                
                }
                
            });
        }
        document.querySelector('.tabs__item').click();


        
        // modal
        
 const modalTrigger = document.querySelectorAll('[data-btn]'),
        modalOverlay = document.querySelector('.modal-overlay'),
        modal = document.querySelector('.modal-form'),
        modalCloseBtn = document.querySelector('.modal-overlay__close'),
        thanksModal = document.querySelector('.modal-alert'),
        

             focusTrap = createFocusTrap(modalOverlay, {
             initialFocus: '.modal-form.active'
       });
        
        function openModal(){
            modalOverlay.classList.add('active');
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            focusTrap.activate();

        }
       
        function closeModal(){
            focusTrap.deactivate();
            modalOverlay.classList.remove('active');
            modal.classList.remove('active');
            thanksModal.classList.remove('active');
            document.body.style.overflow = '';
        }

        function openVideoForm(){
            modalVideoBtn.classList.add('active');
            modalOverlay.classList.add('active');
            modalVideoForm.classList.add('active');
            modalVideoForm.setAttribute('tabindex', 0);
            document.body.style.overflow = 'hidden';
            modalVideoForm.insertAdjacentHTML('afterbegin','<iframe data-video ="videoForm" class="modal-video vid" width="760" height="427" src="https://www.youtube.com/embed/An6LvWQuj_8?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy" allowfullscreen></iframe>');
            focusTrap.activate();

        }
        
        function closeVideoForm(){
            focusTrap.deactivate();
            modalVideoForm.classList.remove('active');
            modalVideoForm.removeChild(document.querySelector('.vid'));
            modalVideoForm.removeAttribute('tabindex');

        }

        modalTrigger.forEach(btn => {
            btn.addEventListener('click', () => {
                openModal();    
            });
       });


        modalCloseBtn.addEventListener('click', closeModal);
    

        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay){
                closeModal();
                closeVideoForm();   
            }
       });


        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && modalOverlay.classList.contains('active') &&  modal.classList.contains('active')) {
                closeModal();
            }
      });

      
      
      
    //   video modal
      
      const modalVideoBtn = document.querySelector('.banner__btn_trans'),
            modalVideoForm = document.querySelector('.modal-video');

        modalVideoBtn.addEventListener('click', () => {
            openVideoForm();
            
      });

    
        modalCloseBtn.addEventListener('click', () =>{
            closeModal();
            closeVideoForm();
            
      });
            
            
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && modalOverlay.classList.contains('active') && modalVideoForm.classList.contains('active')){
            closeModal();
            closeVideoForm();
    
           }
      });
        
        

        //Form POST

const forms = document.querySelector('.modal-form__f');

      const message = {
            loading: 'loading...',
            success: 'Thanks!',
            failur: 'Sorry something went wrong!'
        };

      const textModal = {
            textloading: 'Loading...',
            textSuccess: 'We will contact you as soon as possible',
            textFailur: 'You can also book a table by phone. Please call us +1 253 867-54-13'
        };
        
      const imgModal = { 
            imageSuccess:'img/icons/ico-ok.svg',
            imageLoading:'img/icons/ico-ok.svg',
            imageFailur:'img/icons/sad.svg'
        };
           
        

        
        PostData(forms);
        
        
        function PostData(form){
            form.addEventListener('submit', (e) => {
                e.preventDefault();

            
                

                
                
                const formData = new FormData(form);
                
                
                const objeckForJson = {};
                formData.forEach((value, key) => {
                    objeckForJson[key] = value;
                });
                
                
                fetch('server.php', {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(objeckForJson)
                })
                .then(data => data.text())
                .then(data => {

                    console.log(data);
                    showThanksModal(message.success, textModal.textSuccess, imgModal.imageSuccess);
                    
                    
                }).catch(() => {
                    
                    showThanksModal(message.failur, textModal.textFailur, imgModal.imageFailur);
                    
                })
                .finally(() => {
                    form.reset();
                });
                
                
                
            });
        }
        

        function showThanksModal(message, textModal, imgModal){
            const thanksModal = document.querySelector('.modal-alert'),
              titleThanksModal = document.querySelector('.modal-alert__h2'),
              textThanksModal = document.querySelector('.modal-alert__p'),
              imgThanksModal = document.querySelector('.modal-alert__ok');
              
              
              thanksModal.classList.add('active');
                
                imgThanksModal.setAttribute('src', imgModal);
                titleThanksModal.textContent = message;
                textThanksModal.textContent = textModal;
                
                
                setTimeout(() => {
                    thanksModal.classList.remove('active');
                        closeModal();
                    }, 4000);
                       
                    
                }

                // Animation
                let wow = new WOW(
                    {
                        boxClass:     'animate', 
                        animateClass: 'animate__animated'
                    }
                );

                wow.init();


                //scroll header
                let header = document.querySelector('.header__body');

                function stickyHeader(){
                    if( window.scrollY > 500){
                        header.classList.add('scrolled');
                    } else {
                        header.classList.remove('scrolled');
                    }
                }

                function throttle(func, time){
                    let isThrottled = false;
                    return function(){
                        if(isThrottled) return;
                        let ctx = this;
                        let args = arguments;
                        func.apply(ctx,args);
                        isThrottled = true;
                        setTimeout(() => {
                            isThrottled = false;
                        }, time);
                    };
                }

                window.addEventListener('scroll', throttle(stickyHeader, 300), {passive: true});

            
        //     // PRELOADEr
            
        //     let preloader = document.querySelector('.preloader');
        //     function startPreloader(){
        //         preloader.style.display = 'block';
        //         setTimeout(() => {
        //             preloader.style.display = 'none';
        //             document.body.classList.remove('ov-h');   
        //         }, 5000 );
        //     }
            
            
        //     window.addEventListener("DOMContentLoaded", shortThrottle(startPreloader));

            
            
        //     function shortThrottle(func){
        //         let isThrottled = false;
        //         return function(){
        //             if(isThrottled) return;
        //             let ctx = this;
        //             let args = arguments;
        //             func.apply(ctx,args);
        //             isThrottled = true;
        //     };
        // }




        
            
                
            });