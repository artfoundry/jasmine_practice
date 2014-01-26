var battle = new Battle();

$(document).on("ready", function(){
  listen();
});

var listen = function() {
  $("#go").on("click", function(event) {
    event.preventDefault();
    var entries = [];
    entries[0] = $("#a").val();
    entries[1] = $("#b").val();
    battle.update(entries);
  });
  $("#clear").on("click", function() {
    clearForm();
    battle.wipe();
  });
};

var clearForm = function() {
  $("form")[0].reset();
};

var displayResult = function(text) {
  $("#result").append(text);
};

function Battle() {
  var result;
};

Battle.prototype.wipe = function() {
  this.result = "";
  console.log(this.result)
};

Battle.prototype.update = function(entries) {
  var winner;
  entries[0] > entries[1] ? winner = "A" : winner = "B";
  this.result = winner + " wins!";
  displayResult(this.result);
};