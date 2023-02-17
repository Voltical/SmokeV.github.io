jQuery(function($) {
    console.log("start")
    $.get("/logos/static-imgs/.txt", function(wholeTextFile) {
      //  console.log(wholeTextFile)
      var lines = wholeTextFile.split(/\n/),
        randomIndex = Math.floor(Math.random() * lines.length),
        randomLine = lines[randomIndex];
      console.log(randomIndex, randomLine)
      $("#ajax").html(randomLine.replace(/#/g,"<br>"))
    })
  })