$(document).ready(function () {

    var vals = [];
    var entry = 0;
    var wins = 0;
    var losses = 0;

    

    function GemValues() {
        var target = (Math.floor(Math.random() * 200) + 50);
        $("#TargetNumberVal").html(target);
        var RedButton = (Math.floor(Math.random() * 20) + 1);
        var BlueButton = Math.floor(Math.random() * 20) + 1;
        var YellowButton = Math.floor(Math.random() * 20) + 1;
        var GreenButton = Math.floor(Math.random() * 20) + 1;
        var entry = 0;
        $("#currentCountVal").html(entry)
        
        return [target, RedButton, BlueButton, YellowButton, GreenButton, entry];
    }

    function statSet(outcome){
        
        if(outcome===true){
            wins = wins+1;
        }
        if(outcome===false){
            losses=losses+1;
        }
        $("#winstat").html( wins); 
        $("#lossstat").html( losses);
    }


    vals = GemValues();

    var target = vals[0];
    var RedButton = vals[1];
    var BlueButton = vals[2];
    var YellowButton = vals[3];
    var GreenButton = vals[4];
    var entry = vals[5];



    $("#RedButton").on("click", function () {


        $("#currentCountVal").html(entry = entry + RedButton);

        if (entry > target) {
            alert("You lose!")
            statSet(false)
            vals = GemValues();

             target = vals[0];
             RedButton = vals[1];
             BlueButton = vals[2];
             YellowButton = vals[3];
             GreenButton = vals[4];
             entry = vals[5];
        }
        if (entry === target) {
            alert("You win!")
            statSet(true)
            vals = GemValues();

             target = vals[0];
             RedButton = vals[1];
             BlueButton = vals[2];
             YellowButton = vals[3];
             GreenButton = vals[4];
             entry = vals[5];
        }
    })


    $("#BlueButton").on("click", function () {

        $("#currentCountVal").html(entry = entry + BlueButton);

        if (entry > target) {
            alert("You lose!")
            statSet(false)
            vals = GemValues();

             target = vals[0];
             RedButton = vals[1];
             BlueButton = vals[2];
             YellowButton = vals[3];
             GreenButton = vals[4];
             entry = vals[5];
        }
        if (entry === target) {
            alert("You win!")
            statSet(true)
            vals = GemValues();

             target = vals[0];
             RedButton = vals[1];
             BlueButton = vals[2];
             YellowButton = vals[3];
             GreenButton = vals[4];
             entry = vals[5];
        }

    })

    $("#YellowButton").on("click", function () {

        $("#currentCountVal").html(entry = entry + YellowButton);

        if (entry > target) {
            alert("You lose!")
            statSet(false)
            vals = GemValues();

             target = vals[0];
             RedButton = vals[1];
             BlueButton = vals[2];
             YellowButton = vals[3];
             GreenButton = vals[4];
             entry = vals[5];
        }
        if (entry === target) {
            alert("You win!")
            statSet(true)
            vals = GemValues();

             target = vals[0];
             RedButton = vals[1];
             BlueButton = vals[2];
             YellowButton = vals[3];
             GreenButton = vals[4];
             entry = vals[5];
        }

    })

    $("#GreenButton").on("click", function () {

        $("#currentCountVal").html(entry = entry + GreenButton);

        if (entry > target) {
            alert("You lose!")
            statSet(false)
            vals = GemValues();

             target = vals[0];
             RedButton = vals[1];
             BlueButton = vals[2];
             YellowButton = vals[3];
             GreenButton = vals[4];
             entry = vals[5];

        
        }
        if (entry === target) {
            alert("You win!")
            statSet(true)
            vals = GemValues();

             target = vals[0];
             RedButton = vals[1];
             BlueButton = vals[2];
             YellowButton = vals[3];
             GreenButton = vals[4];
             entry = vals[5];
        }
    })













})