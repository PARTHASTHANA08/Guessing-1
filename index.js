let word = [
   {
      "input" : 8,
      "category":"Marvel",
      "word":"avengers"
   },
   {
      "input":8,
      "category":"Sports",
      "word":"football"
   },
   {
      "input":5,
      "category":"Country",
      "word":"india"
   }
]
var gameOver = false
$(".clickable").click(function(){
   var correctGuess = false
   let id = $(this).attr("id")
   let life = parseInt($("#life").text())
   for(var i = 0; i< randomWord.word.length;i++){
      if(randomWord.word.charAt(i).toLowerCase()==id){
         if(life > 0 && ($(".fill_blanks").eq(i).html == "_" || $(".fill_blanks").eq(i).html == id)){
            $(".fill_blanks").eq(i).html(id)
            correctGuess = true;
            if($("#blanks").text() === randomWord.word.toLowerCase()){
               $("#result").text("You Win!!")
               correctGuess = true;
               gameOver = true;
            }
         }
      }
   }
})
