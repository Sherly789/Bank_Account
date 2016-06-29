//back
function Account(name, initialDeposit) {
  this.name = name;
  this.balance = initialDeposit;
}

Account.prototype.withdraw = function(inputWithdraw) {
  this.balance -= inputWithdraw;
}

Account.prototype.deposit = function(inputDeposit) {
  this.balance += inputDeposit;
}




//front
$(document).ready(function() {
  var userAccount;
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

    var inputWithdraw = parseInt($("input#withdraw").val());
    var inputDeposit = parseInt($("input#deposit").val());

    userAccount.withdraw(inputWithdraw);
    userAccount.deposit(inputDeposit);

    $("#balance").show();
    $("#balance").text("Your current account balance is " + userAccount.balance + ".");

  });
});
