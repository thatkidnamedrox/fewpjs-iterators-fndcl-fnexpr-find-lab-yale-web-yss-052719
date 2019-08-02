const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  return record.find(r => { return r.result === "W" }).year
}
