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
  console.log('hello')
  expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  return string.toLowerCase("I can't hear you!")
})
describe('sayHiToGrandma(string)',
function sayHiToGrandma(string) {
  console.log('HELLO')
  expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  return string.toUpperCase("YES INDEED!")
})
describe('sayHiToGrandma(string)',
function sayHiToGrandma(string) {
  console.log("I love you, Grandma.")
  return string("I love you, too.")
})
