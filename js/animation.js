$(document).ready(function () {



function moveMenu(){
  if ($(window).width() < 768) {
         $(function(){ 

           
        })            
  } else{
         $(function(){ 

            
          $(document).ready(function() {
              setTimeout(function() {
                  $('.b-header-top').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInUp',
                    offset: 0
                  });
              }, 500); 
              setTimeout(function() {
                  $('.b-header-content').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInLeft',
                    offset: 0
                  });
              }, 1000); 
              setTimeout(function() {
                  $('.b-header-block').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInRight',
                    offset: 0
                  });
              }, 1500);                                        
              setTimeout(function() {
                  $('.b-title').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInUp',
                    offset: 0
                  });
              }, 1500);
              setTimeout(function() {
                  $('.b-programm-item').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInUp',
                    offset: 0
                  });
              }, 2000);

              setTimeout(function() {
                  $('.b-modules-item__1').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInLeft',
                    offset: 0
                  });
              }, 2000);
              setTimeout(function() {
                  $('.b-modules-content__col__left').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInLeft',
                    offset: 0
                  });
              }, 2000);               
              setTimeout(function() {
                  $('.b-modules-content__col__2').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInRight',
                    offset: 0
                  });
              }, 2000); 
              setTimeout(function() {
                  $('.b-modules-item__6').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInRight',
                    offset: 0
                  });
              }, 2000);                                           
              setTimeout(function() {
                  $('.b-modules-content__center').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInUp',
                    offset: 0
                  });
              }, 2000);
              setTimeout(function() {
                  $('.b-advantages-left').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInLeft',
                    offset: 0
                  });
              }, 2000); 
              setTimeout(function() {
                  $('.b-advantages-bottom').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInRight',
                    offset: 0
                  });
              }, 2000); 
              setTimeout(function() {
                  $('.b-solutions-item').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInUp',
                    offset: 0
                  });
              }, 2000);
              setTimeout(function() {
                  $('.b-options-content').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInLeft',
                    offset: 0
                  });
              }, 2000);               
              setTimeout(function() {
                  $('.b-options-bottom').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInRight',
                    offset: 0
                  });
              }, 2000);
              setTimeout(function() {
                  $('.b-partners-item').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInUp',
                    offset: 0
                  });
              }, 2000);
              setTimeout(function() {
                  $('.b-col__left').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInLeft',
                    offset: 0
                  });
              }, 2000);               
              setTimeout(function() {
                  $('.b-col__right').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInUp',
                    offset: 0
                  });
              }, 2000);

          });
           
     })        
  }
}
moveMenu();

$(window).resize(function(){
    moveMenu();
});


});



