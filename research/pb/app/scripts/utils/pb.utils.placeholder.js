pb.namespace('utils.placeholder');

pb.utils.placeholder = (function() {

  var $input = null;

  function init(inputEl) {

    $input = inputEl;
    var default_val = $input.val();

    clearInputField();

    setDefaultValue();

  }

  function clearInputField() {
    $input.focus(function() {
      if ($input.val() == default_val) {
        $input.val('');
      }
    });
  }

  function setDefaultValue() {
    $input.blur(function() {
      if ($input.val().length == 0) {
        $input.val(default_val);
      }
    });
  }

  return{
    init: init
  };

}());
