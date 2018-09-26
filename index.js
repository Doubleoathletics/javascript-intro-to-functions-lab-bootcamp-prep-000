function shout(string) {
 return string.toUpperCase()
  }
function whisper(string) {
  return string.toLowerCase()
} 
function logShout(string) {
  console.log('HELLO')
  return string.toUpperCase()
}
function logWhisper(string) {
  console.log('hello')
  return string.toLowerCase()
}
describe('sayHiToGrandma(string)', 
function sayHiToGrandma(string) {
  
  it('returns "I can't hear you!" if `string` is lowercase', 
function() {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  })

  it('returns "YES INDEED!" if `string` is uppercase', 
function() {
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
})



describe('sayHiToGrandma(hello)'
function sayHiToGrandma(string) {
  console.log('hello')
  return string.toLowerCase ("I can't hear you!")
function sayHiToGrandma(string) {
  console.log('HELLO')
  return string.toUpperCase ("YES INDEED!")
}
describe('sayHiToGrandma(hello)',
function(sayHiToGrandma(string) {
  console.log("I love you, Grandma.")
  return("I love you, too.")
}

