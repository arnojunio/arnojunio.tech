<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">

    <title>arnojunio</title>
    <meta name="description" content="description">
    <meta name="author" content="arnold">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.5/css/flag-icons.min.css" />
    <link href="https://unpkg.com/nprogress@0.2.0/nprogress.css" rel="stylesheet" />
    <script src="https://unpkg.com/nprogress@0.2.0/nprogress.js"></script>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}" />
</head>

<body>

    @if (Auth::check())
    @php
    $user_auth_data = [
    'isLoggedin' => true,
    'user' => Auth::user()
    ];
    @endphp
    @else
    @php
    $user_auth_data = [
    'isLoggedin' => false
    ];
    @endphp
    @endif


    <div id="app">
    </div>
    <script>
        window.Laravel = JSON.parse(atob('{{ base64_encode(json_encode($user_auth_data)) }}'));
    </script>
    <script src="{{ mix('js/app.js') }}" type="text/javascript"></script>
</body>

</html>