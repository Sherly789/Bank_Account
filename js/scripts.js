//back
function Account(name, initialDeposit) {
  this.name = name;
  this.balance = initialDeposit;
}

Account.prototype.withdraw = function() {
  this.balance -= inputWithdraw;
}

Account.prototype.deposit = function() {
  this.balance += inputDeposit;
}

var userAccount;
var inputWithdraw;
var inputDeposit;

//front
$(document).ready(function() {
  $("#yourAccount").submit(function(event) {
    event.preventDefault();

    var inputName = $("input#name").val();
    var inputDeposit = parseInt($("input#initialDeposit").val());
    userAccount = new Account(inputName, inputDeposit);

    $("#balance").show();
    $("#balance").text("Your account has been created! Your initial balance is " + userAccount.balance + ".");
  });

  $("#deWi").submit(function(event) {
    event.preventDefault();

    inputWithdraw = parseInt($("input#withdraw").val());
    inputDeposit = parseInt($("input#deposit").val());

    userAccount.withdraw();
    userAccount.deposit();

    $("#balance").show();
    $("#balance").text("Your current account balance is " + userAccount.balance + ".");

  });
});
