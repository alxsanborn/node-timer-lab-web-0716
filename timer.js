process.argv.shift()
process.argv.shift()

process.argv.forEach(function timer(startTime){
  var num = Number(startTime.slice()[0])
  var unit = startTime.slice()[1]

  if (unit === "m") {
    console.log(`Left: 59s`)
  }
  else {
  for (var i = num - 1; i > 0; i--){
    var decrease = i.toString()
    console.log(`Left: ${decrease}s`)
  }
}
})
