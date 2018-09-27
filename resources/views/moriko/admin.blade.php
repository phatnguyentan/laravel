<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>


    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">
    <link rel="icon" href="/storage/images/moriko/moriko.ico" type="image/x-icon"/>

    @if (config('app.env') == "local")
        <script src="{{ asset('js/moriko/admin.local.js') }}" defer></script>
        <link href="{{ asset('css/moriko/admin.local.css') }}" rel="stylesheet">
    @else
        <script src="{{ asset('js/moriko/admin.prod.js') }}" defer></script>
        <link href="{{ asset('css/moriko/admin.prod.css') }}" rel="stylesheet">
    @endif
</head>
<body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <div id="root" style="height: 100%; display: flex"></div>
</body>
</html>
