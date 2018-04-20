//js for main.handlebars
var game =require("./controllers/michaelsGame.js")
var id = 0
function chapter(id) {
$("#text").html(game[id].text)
$("#choice1").html(game[id].choice_array[0].name)
$("#choice1").attr("link",game[id].choice_array[0].data)
$("#choice2").html(game[id].choice_array[1].name)
$("#choice3").html(game[id].choice_array[2].name)
}
$("#choice1").on("click",function(){
    id = parseInt($(this).val("link"))
    chapter(id)
})
$("#choice2").on("click",function(){
    id = parseInt($(this).val("link"))
    chapter(id)
})
$("#choice3").on("click",function(){
    id = parseInt($(this).val("link"))
    chapter(id)
})
