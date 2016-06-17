$(document).ready(function(){
	$(".o-que-e").click(function(){
	    // remove active 
	    var x = document.getElementsByClassName("active");
	    $(x).removeClass('active');
	    // load page
	    $('#artigo').load('pages/o-que-e.html');
	    // add active
	    $(".o-que-e").addClass('active');
	});
	$(".pra-que-serve").click(function(){
	    // remove active 
	    var x = document.getElementsByClassName("active");
	    $(x).removeClass('active');
	    // load page
	    $('#artigo').load('pages/pra-que-serve.html');
	    // add active
	    $(".pra-que-serve").addClass('active');
	});
	$(".contexto").click(function(){
	    // remove active 
	    var x = document.getElementsByClassName("active");
	    $(x).removeClass('active');
	    // load page
	    $('#artigo').load('pages/contexto.html');
	    // add active
	    $(".contexto").addClass('active');
	});
	 
	$(".criticas").click(function(){
	    // remove active 
	    var x = document.getElementsByClassName("active");
	    $(x).removeClass('active');
	    // load page
	    $('#artigo').load('pages/criticas.html');
	    // add active
	    $(".criticas").addClass('active');
	});
	$(".framework-metricas").click(function(){
	    // remove active 
	    var x = document.getElementsByClassName("active");
	    $(x).removeClass('active');
	    // load page
	    $('#artigo').load('pages/framework-metricas.html');
	    // add active
	    $(".framework-metricas").addClass('active');
	});
	$(".framework-avaliar").click(function(){
	    // remove active 
	    var x = document.getElementsByClassName("active");
	    $(x).removeClass('active');
	    // load page
	    $('#artigo').load('pages/framework-avaliar.html');
	    // add active
	    $(".framework-avaliar").addClass('active');
	});
	$(".tipos-de-metricas").click(function(){
	    // remove active 
	    var x = document.getElementsByClassName("active");
	    $(x).removeClass('active');
	    // load page
	    $('#artigo').load('pages/tipos-de-metricas.html');
	    // add active
	    $(".tipos-de-metricas").addClass('active');
	});
	$(".pesquisas-atuais").click(function(){
	    // remove active 
	    var x = document.getElementsByClassName("active");
	    $(x).removeClass('active');
	    // load page
	    $('#artigo').load('pages/pesquisas-atuais.html');
	    // add active
	    $(".pesquisas-atuais").addClass('active');
	});
	$(".software-package-metrics").click(function(){
	    // remove active 
	    var x = document.getElementsByClassName("active");
	    $(x).removeClass('active');
	    // load page
	    $('#artigo').load('pages/software-package-metrics.html');
	    // add active
	    $(".software-package-metrics").addClass('active');
	});
	$(".indice-qualidade").click(function(){
	    // remove active 
	    var x = document.getElementsByClassName("active");
	    $(x).removeClass('active');
	    // load page
	    $('#artigo').load('pages/indice-qualidade.html');
	    // add active
	    $(".indice-qualidade").addClass('active');
	});
	$(".sobre").click(function(){
	    // remove active
	    var x = document.getElementsByClassName("active");
	    $(x).removeClass('active'); 
	    // load page
	    $('#artigo').load('pages/sobre.html');
	    // add active
	});
	$(".referencias").click(function(){
	    // remove active 
	    var x = document.getElementsByClassName("active");
	    $(x).removeClass('active');
	    // load page
	    $('#artigo').load('pages/referencias.html');
	    // add active
	});
	$(".metricas-software").click(function(){
	    // remove active 
	    var x = document.getElementsByClassName("active");
	    $(x).removeClass('active');
	    // load page
	    $('#artigo').load('pages/contexto.html');
	    // add active
	    $(".contexto").addClass('active');                    
	});
	$(".equipe").click(function(){
	    var x = document.getElementsByClassName("active");
	    $(x).removeClass('active');
	    $('#artigo').load('pages/equipe.html');
	});
	 $(".definicao-medicao").click(function(){
	    // remove active 
	    var x = document.getElementsByClassName("active");
	    $(x).removeClass('active');
	    // load page
	    $('#artigo').load('pages/definicao-medicao.html');
	    // add active
	    $(".definicao-medicao").addClass('active');
	});
	 $(".desenvolvendo-metricas").click(function(){
	    // remove active 
	    var x = document.getElementsByClassName("active");
	    $(x).removeClass('active');
	    // load page
	    $('#artigo').load('pages/desenvolvendo-metricas.html');
	    // add active
	    $(".desenvolvendo-metricas").addClass('active');
	});
});