//J Query code for To-Do-List

$(document).on('click', .item, function(){
  $('#button').click(function(){
    var toAdd = $('input[name=checkListItem]').val();
    $('.list').append("<div class='item'> " + toAdd + "</div");
  });
    $('.item').click(function() {
    $(this).remove();
  });
});