describe("pigLatin", function() {
  it("word starts with a vowel add 'ay' to it", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  });
});

// describe('pigLatin',function() {
//   it("returns true if the first letter of a word starts with vowels", function() {
//     expect(pigLatin("apple")).to.equal("appleay");
//   });
// });
