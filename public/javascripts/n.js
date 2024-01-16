
var c = 0; //coke qty
var d = 0; //dew qty
var j = 0; //juice qty
var l = 0; //lemon qty
$("#textbox1").prop("readonly", true);
$("#textbox2").prop("readonly", true);
$("#textbox3").prop("readonly", true);
$("#textbox4").prop("readonly", true);
$("#textbox5").prop("readonly", true);

$(document).ready(function () {
    $('#pay').on('submit', function (e) {
        e.preventDefault();
        var len = $('#textbox5').val();
        if (len !== "") {
            this.submit();
        }
    });
});

var buttons = document.querySelectorAll(".card").length;
var x = document.querySelectorAll(".card");
for (var i = 0; i < buttons; i++) {
    x[i].addEventListener("click", function (e) {

        if (e.target.innerText == '+') {
            if (this.id == 'coke') {
                c++;
                $('#textbox1').val(c);
            }
            if (this.id == 'dew') {
                d++;
                $('#textbox3').val(d);
            }
            if (this.id == 'lemonade') {
                l++;
                $('#textbox2').val(l);
            }
            if (this.id == 'juice') {
                j++;
                $('#textbox4').val(j);
            }
        }
        if (e.target.innerText == '-') {
            if (this.id == 'coke' && c > 0) {
                c--;
                $('#textbox1').val(c);
            }
            if (this.id == 'dew' && d > 0) {
                d--;
                $('#textbox3').val(d);
            }
            if (this.id == 'lemonade' && l > 0) {
                l--;
                $('#textbox2').val(l);
            }
            if (this.id == 'juice' && j > 0) {
                j--;
                $('#textbox4').val(j);
            }
        }
        var total = ((c + d + l + j) * 50);
        if (total == 0) $('#textbox5').val('');
        else
            $('#textbox5').val("Rs " + total);
    });
}
