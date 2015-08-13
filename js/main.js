jQuery(function($) {

	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 10000,
			pause: false
		});
	});

	//Ajax contact
	var form = $('.contact-form');
	form.submit(function () {
		$this = $(this);
		$.post($(this).attr('action'), function(data) {
			$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
		},'json');
		return false;
	});

	//smooth scroll
	$('.navbar-nav > li').click(function(event) {
		event.preventDefault();
		var target = $(this).find('>a').prop('hash');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 500);
	});

	//scrollspy
	$('[data-spy="scroll"]').each(function () {
		var $spy = $(this).scrollspy('refresh')
	})

	//PrettyPhoto
	$("a.preview").prettyPhoto({
		social_tools: false
	});

	//Isotope
	$(window).load(function(){
		$portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : 'li',
			layoutMode : 'fitRows'
		});
		$portfolio_selectors = $('.portfolio-filter >li>a');
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});
	//Biografy
	$(".img-responsive.img-thumbnail.img-circle").click(function(){
		console.log('okay');

		$('#myModal').modal({
			show: true
		});
		var person = this.id;
		$('#h1modal').html(person);
		var biography = ''
		if(person === 'Jaime'){
			biography = "Soy ingeniero mecatronico de pregrado, pero de Sofware por pasión. Eh venido trabajando en diferentes tecnologias web; especialmente con lenguajes no compilados como 'php', 'python', 'Ruby' y ultimamente con 'NodeJS'. Profesionalmente, eh trabajado en empresa y actualmente estoy vinculado al grupo de investigación COLIVRI de la univerdidad de los andes como asistente graduado.";
		}
		else if(person === 'Francisco'){
			biography = '​Ingeniero de Sistemas especializado en el ciclo de vida de desarrollo de software, primordialmente en la plataforma Microsoft. Arquitecto de soluciones de software orientadas a implementar y estandarizar los procesos y oportunidades de negocio de clientes y empresas. Director de arquitectura de software especializado en administrar portafolios de proyectos, emplear múltiples plataformas tecnológicas para proponer soluciones, liderar equipos multidisciplinarios de desarrollo, y conseguir los objetivos de tiempo, costo, funcionalidad y calidad de los proyectos a cargo.';
		}
		else if(person === 'JuanC'){
			biography = '';
		}
		else if(person === 'Lina'){
			biography = '';
		}
		else if(person === 'JuanD'){
			biography = 'Ingeniero de sistemas de la Escuela Colombiana de Ingeniería con tres años de experiencia en desarrollo de aplicaciones web sobre Java (JEE) en una empresa especializada en soluciones a la medida, actualmente trabajo en proyectos para entidades financieras y movilidad empresarial (Modelo de negocio) y soy estudiante de primer semestre de Maestría en Ingeniería en la Universidad de los Andes';
		}
		$('#pmodal').html(biography);
	})
});
