<!DOCTYPE HTML>
<html>
	<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Education &mdash; Free Website Template, Free HTML5 Template by freehtml5.co</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="Free HTML5 Website Template by freehtml5.co" />
	<meta name="keywords" content="free website templates, free html5, free template, free bootstrap, free website template, html5, css3, mobile first, responsive" />
	<meta name="author" content="freehtml5.co" />

	<!-- 
	//////////////////////////////////////////////////////

	FREE HTML5 TEMPLATE 
	DESIGNED & DEVELOPED by FreeHTML5.co
		
	Website: 		http://freehtml5.co/
	Email: 			info@freehtml5.co
	Twitter: 		http://twitter.com/fh5co
	Facebook: 		https://www.facebook.com/fh5co

	//////////////////////////////////////////////////////
	 -->
  	<!-- Facebook and Twitter integration -->
	<meta property="og:title" content=""/>
	<meta property="og:image" content=""/>
	<meta property="og:url" content=""/>
	<meta property="og:site_name" content=""/>
	<meta property="og:description" content=""/>
	<meta name="twitter:title" content="" />
	<meta name="twitter:image" content="" />
	<meta name="twitter:url" content="" />
	<meta name="twitter:card" content="" />
	<meta name="csrf-token" content="{{ csrf_token() }}">

	<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Roboto+Slab:300,400" rel="stylesheet">
	
	<link rel="stylesheet" href="css/app.css">
	</head>
	<body>
		
	<div id="app"></div>
	<!-- <div id="app" class="fh5co-loader"></div> -->
	
	<div id="app"></div>
<!-- <div id="app" class="fh5co-loader"></div> -->
<div id="page">
    <nav class="fh5co-nav" role="navigation">
        <div class="top">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-right">
                        <p class="site">www.yourdomainname.com</p>
                        <p class="num">Call: +01 123 456 7890</p>
                        <ul class="fh5co-social">
                            <li><a href="#"><i class="fa fa-facebook"></i></a>
                            </li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a>
                            </li>
                            <li><a href="#"><i class="fa fa-github"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="top-menu">
            <div class="container">
                <div class="row">
                    <div class="col-2">
                        <div id="fh5co-logo"><a href="index.html"><i class="fa fa-drupal"></i>Educ<span>.</span></a>
                        </div>
                    </div>
                    <div class="col-10 text-right menu-1">
                        <ul>
                            <li class="active"><a href="/home">Home</a>
                            </li>
                            <li><a href="/courses">Courses</a>
                            </li>
                            <li><a href="/teachers">Teacher</a>
                            </li>
                            <li><a href="/about">About</a>
                            </li>
                            <li><a href="/pricing">Pricing</a>
                            </li>
                            <li class="has-dropdown">	<a href="/blog">Blog</a>
                                <ul class="dropdown">
                                    <li><a href="#">Web Design</a>
                                    </li>
                                    <li><a href="#">eCommerce</a>
                                    </li>
                                    <li><a href="#">Branding</a>
                                    </li>
                                    <li><a href="#">API</a>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a>
                            </li>
                            <li class="btn-cta"><a href="#"><span>Login</span></a>
                            </li>
                            <li class="btn-cta"><a href="#"><span>Create a Course</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    @yield('content')
</div>
<footer id="fh5co-footer" role="contentinfo" style="background-image: url(images/img_bg_4.jpg);">
    <div class="overlay"></div>
    <div class="container">
        <div class="row row-pb-md">
            <div class="col-lg-3 fh5co-widget">
                	<h3>About Education</h3>
                <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.
                    Eos cumque dicta adipisci architecto culpa amet.</p>
            </div>
            <div class="col-lg-2 col-md-4 col-6 order-md-2 fh5co-widget">
                	<h3>Learning</h3>
                <ul class="fh5co-footer-links">
                    <li><a href="#">Course</a>
                    </li>
                    <li><a href="#">Blog</a>
                    </li>
                    <li><a href="#">Contact</a>
                    </li>
                    <li><a href="#">Terms</a>
                    </li>
                    <li><a href="#">Meetups</a>
                    </li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-4 col-6 order-md-2 fh5co-widget">
                	<h3>Learn &amp; Grow</h3>
                <ul class="fh5co-footer-links">
                    <li><a href="#">Blog</a>
                    </li>
                    <li><a href="#">Privacy</a>
                    </li>
                    <li><a href="#">Testimonials</a>
                    </li>
                    <li><a href="#">Handbook</a>
                    </li>
                    <li><a href="#">Held Desk</a>
                    </li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-4 col-6 order-md-2 fh5co-widget">
                	<h3>Engage us</h3>
                <ul class="fh5co-footer-links">
                    <li><a href="#">Marketing</a>
                    </li>
                    <li><a href="#">Visual Assistant</a>
                    </li>
                    <li><a href="#">System Analysis</a>
                    </li>
                    <li><a href="#">Advertise</a>
                    </li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-4 col-6 order-md-2 fh5co-widget">
                	<h3>Legal</h3>
                <ul class="fh5co-footer-links">
                    <li><a href="#">Find Designers</a>
                    </li>
                    <li><a href="#">Find Developers</a>
                    </li>
                    <li><a href="#">Teams</a>
                    </li>
                    <li><a href="#">Advertise</a>
                    </li>
                    <li><a href="#">API</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row copyright">
            <div class="col-lg-12 text-center">
                <p>	<small class="block">&#xA9; 2016 Free HTML5. All Rights Reserved.</small> 
                    <small
                    class="block">Designed by <a href="http://freehtml5.co/" target="_blank">FreeHTML5.co</a> Demo
                        Images: <a href="http://unsplash.co/" target="_blank">Unsplash</a> &amp;
                        <a
                        href="https://www.pexels.com/" target="_blank">Pexels</a>
                            </small>
                </p>
            </div>
        </div>
    </div>
</footer>
<div class="gototop js-top">	<a href="#" class="js-gotop"><i class="fa fa-arrow-up"></i></a>
</div>

	
    <script src="js/app.js"></script>
    <script>
        $(document).ready(function() {
            fixFlexsliderHeight();
        });

        $(window).load(function() {
            fixFlexsliderHeight();
        });

        $(window).resize(function() {
            fixFlexsliderHeight();
        });

        function fixFlexsliderHeight() {
            // Set fixed height based on the tallest slide
            $('.flex-viewport').each(function(){
                $(this).height = '630px';
                // var sliderHeight = 0;
                // $(this).find('.slides > li').each(function(){
                //     slideHeight = $(this).height();
                //     if (sliderHeight < slideHeight) {
                //         sliderHeight = slideHeight;
                //     }
                // });
                // $(this).find('ul.slides').css({'height' : sliderHeight});
            });
        }
    </script>
	</body>
</html>
