@php
$config = [
    'appName' => config('app.name'),
    'locale' => $locale = app()->getLocale(),
    'locales' => config('app.locales'),
    'githubAuth' => config('services.github.client_id'),
    'tomorrow' => config('app.dateTomorrow') 
];
@endphp
<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head href="/">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>{{ config('app.name') }}</title>
  <link href="http://fonts.cdnfonts.com/css/fox-on-the-run" rel="stylesheet">
  <link rel="stylesheet" href="{{ mix('dist/css/app.css') }}">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/4.5.95/css/materialdesignicons.css">  
   
</head>
<body>
  <div id="app"> </div>   <div id="fb-root"></div>

<!-- Your Chat Plugin code -->
<div id="fb-customer-chat" class="fb-customerchat"></div>
  <script> window.config = <?php echo  json_encode($config); ?> </script>  
  <script src="{{ mix('dist/js/app.js') }}"></script>
  <script>
    var chatbox = document.getElementById("fb-customer-chat");
    chatbox.setAttribute("page_id", "119432017004061");
    chatbox.setAttribute("attribution", "biz_inbox");
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: "v14.0",
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
    </script>
</body>
</html>
