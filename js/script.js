$(function() {

   // $('.list').append('<div class="new">').('li:not(.title)').appendTo('.new');


      $('.list').on('click', function(){

         if ($('.new').is(':animated')) {
            return;
         }

         $(this).find('.new').slideToggle();
         
      });

      var sl = $('.list').filter(function(index) {
            return (this).find('li').length;
      });

   console.log(sl);

});