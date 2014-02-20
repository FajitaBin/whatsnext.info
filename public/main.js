requirejs.config({
  paths: {jquery: 'jquery-2.1.0'}
});

define(['jquery', 'app', 'sammy'], function(jquery, app, sammy){
  window.app = app;
  jquery(document).ready(app.init);

  sammy(function(){
    this.get("#/about", function(){
      app.viewModel.activateLanguage(null);
    });

    this.get("#/:language", function(){
      jquery.getJSON('/repositories/' + this.params['language'], app.viewModel.repositories);
      app.viewModel.activateLanguage(this.params['language']);
    });
  }).run();

});

