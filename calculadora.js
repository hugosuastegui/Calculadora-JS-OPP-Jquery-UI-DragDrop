$(document).ready(function(){
  for (i=0; i < 10; i++){
    card = new Card(i);
    $("#cardPile").append(card.element)
  }

  $(".number").draggable({
     helper: "clone",
  });

  $("#cardSlots").droppable({
    accept: ".number", 
    drop: Drop
    });

  function Drop(event, ui){
    
    ui.draggable.clone().detach().appendTo($("#cardSlots"));
    var droppableValue = parseInt(ui.draggable.html());
    var sum = parseInt($("#total_sum").html());
    var total_sum = sum + droppableValue;
    var length = $("#cardSlots > div").length;
    $("#total_sum").html(total_sum);
    if (length == 10) {
      console.log("DENTRO DEL IF")
      console.log(ui.draggable);
      ui.draggable.removeClass();
    }
  }


});

var Card = function(number){
  this.element = "<div class='number'>" + number + "</div>"
}

var cardSlot = function(){
  this.card_array = []
}
