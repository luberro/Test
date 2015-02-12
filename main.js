// JavaScript Document


function init(){

	document.getElementById('portfolio').innerHTML = renderPortfolioItem();

}

function renderPortfolioItem(){

 
 	 var html = '<section id="two" class="wrapper style2">';
	 
		 html += '<header class="major">'; 
		 html += '<ul class="actions">';
		 html += '<li><a href="#" class="button alt">PORTFOLIO</a></li>';
		 html += '</ul>';
		 html += '<h2>DANSEZ LE TANGO  PUBLICATIONS</h2></header>';
		 html += '<div class="container">';
		 html += '<div class="row">';
		 html += '<div class="6u">';
		 html += '<section class="special"><br/>';
		 html += '<ul class="actions">';
		 html += '<li><a href="#" class="button alt">SOUVENIR</a></li>';
		 html += '<li><a href="#" class="button alt">PARTENAIRES</a></li>';
		  html += '<li><a href="#" class="button alt">LINKS</a></li>';
		
		 html += '</ul>';
		 html += '<a href="#" class="image fit">';
		 html += '<img src="images/vol1.png" alt="" />';
		 html += '</a>';
		
		 
		 html += '</section>';
		 html += '</div>';
		 html += '<div class="6u">';
		 html += '<section class="special">';
		 html += '<a href="#" class="image fit"><img src="images/front11.jpg" alt="" /></a>';
		
		 html += '<h3> 24/24 RSS FOLLOW UP ON SPONSORED TEACHERS </h3>';
	     html += '<h3> ONLINE VIP FOR SPONSORED COUPONS </h3>';
		html += '<a href="#" class="image fit"><img src="images/coupons.gif" alt="" /></a>';
		  html += '<a href="#" class="image fit">';
		 html += '<img src="images/wellbeing.gif" alt="" />';
		 html += '</a>';
		 html += '</section>';
		
		 html += '</div>';
		 
		 html += '</div>';
		
		 html += '</div>';
		 html += '</section>';


	 
	return html;
}




	