const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  if (record.result === "N/A") {
    return null;
  } else {
    return record.find(r => { r.year === '1969' })
  }
}
