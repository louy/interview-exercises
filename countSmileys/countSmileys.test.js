const countSmileys = require('./countSmileys')

it('returns 0 for empty text', () => {
  expect(countSmileys(``)).toBe(0);
});

it('recognises simple smiley face', () => {
  expect(countSmileys(`hi there :-)`)).toBe(1);
});

it('recognises more complicated smileys', () => {
  expect(countSmileys(`
Lorem ipsum dolor sit amet ;) consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua :D
Ut enim ad minim veniam :/ quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat :-(
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur :[
Excepteur sint occaecat cupidatat non proident :| sunt in culpa qui officia deserunt mollit anim id est laborum ;~)
`)).toBe(3);
});

it('doesn\'t count valid smileys not surrounded by white space', () => {
  expect(countSmileys(`
This is not a valid smiley face >:)
Nor are these :)> :)) :):
`)).toBe(0);
});
