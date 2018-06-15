<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <div id="app">
        <div class="header bg-dark">
            <div class="container">
                <div class="row">
                    <div class="col-md-5">
                        <!-- Logo -->
                        <div class="logo">
                            <h1>
                                <a class="link-unstyled text-white" href="index.html">Bootstrap Admin Theme</a>
                            </h1>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="input-group form">
                                    <input type="text" class="form-control" placeholder="Search...">
                                    <span class="input-group-btn">
                                        <button class="btn btn-primary" type="button">Search</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto list-unstyled-all text-white">
                                @guest
                                <li>
                                    <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                                </li>
                                <li>
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                                @else
                                <li class="nav-item dropdown">
                                    <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false" v-pre>
                                        {{ Auth::user()->name }}
                                        <span class="caret"></span>
                                    </a>

                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
																									document.getElementById('logout-form').submit();">
                                            {{ __('Logout') }}
                                        </a>

                                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                            @csrf
                                        </form>
                                    </div>
                                </li>
                                @endguest
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row container-fluid">
            <div class="col-md-2" style="padding: 0, margin: overflow: hidden">
                <div class="sidebar content-box">
                    <ul class="list-group list-unstyled list-unstyled-all">
                        <li class="current list-group-item">
                            <a href="/admin">
                                <i class="fa fa-home" aria-hidden="true"></i> Dashboard</a>
                        </li>
                        <li class="current list-group-item">
                            <a href="/admin/users">
                                <i class="fa fa-user" aria-hidden="true"></i> Users</a>
                        </li>
                        <li class="list-group-item">
                            <a href="/admin/page">
                                <i class="fa fa-list" aria-hidden="true"></i> Pages
                                <span class="caret pull-right"></span>
                            </a>
                            <ul class="list-unstyled">
                                <li>
                                    <a href="/admin/page/login">Login</a>
                                </li>
                                <li>
                                    <a href="/admin/page/register">Signup</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <main class="main-body col-md-10">
                @yield('content')
            </main>
        </div>
    </div>
</body>

</html>