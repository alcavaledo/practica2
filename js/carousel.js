    $(function() {

	//cogemos la prpiedad width y calculamos el valor a la izquierda
	var item_width = $('#slides li').outerWidth(); 
	var left_value = item_width * (-1); 
        
    //para ir al ultimo item en caso de que el usuario use el boton prev
	$('#slides li:first').before($('#slides li:last'));
	
	//para ver el item por defecto
	$('#slides ul').css({'left' : left_value});

    //si el usuario dio click al boton prev
	$('#prev').click(function() {

		//obtiene el valor a la derecha           
		var left_indent = parseInt($('#slides ul').css('left')) + item_width;

		//muestra el item
		$('#slides ul:not(:animated)').animate({'left' : left_indent}, 200,function(){    

            //pone el ultimo item de primero           	
			$('#slides li:first').before($('#slides li:last'));           

			//para ver el item actual
			$('#slides ul').css({'left' : left_value});
		
		});
          
		return false;
            
	});

 
    //si el usuario uso el boton next
	$('#next').click(function() {
		
		//obtiene el valor a la derecha
		var left_indent = parseInt($('#slides ul').css('left')) - item_width;
		
		//muestra el item
		$('#slides ul:not(:animated)').animate({'left' : left_indent}, 200, function () {
            
            //pone el primer item de ultimo
			$('#slides li:last').after($('#slides li:first'));                 	
			
			//para ver el item actual
			$('#slides ul').css({'left' : left_value});
		
		});
		         
		return false;
		
	});        

function rotate() {
	$('#next').click();
}
})(jQuery);
