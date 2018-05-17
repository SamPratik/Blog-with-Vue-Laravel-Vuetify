<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Blog | Home</title>
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
  </head>
  <body>
    <div id="app">
      <v-app>
        <app-toolbar></app-toolbar>
        <router-view></router-view>
      </v-app>
    </div>
    <script src="{{asset('js/app.js')}}"></script>
  </body>
</html>
