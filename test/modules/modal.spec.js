describe("UI Modal", function() {

  $.fn.dimmer.settings.debug = false;

  moduleTests({
    module  : 'crowdin-modal',
    element : '.ui.crowdin-modal'
  });

});
