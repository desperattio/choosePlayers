import Team from "..";

test('test add one character to team', () => {
  const characteristics = {
    'name': 'Han',
    'type': 'Magician',
    'health': 100,
    'level': 1
  }
  const newTeam = new Team();
  newTeam.add(characteristics);
  const members = new Set();
  members.add(characteristics);
  expect(newTeam.members).toEqual(members);
});

test('test add same character to team', () => {
  const characteristics = {
    'name': 'Han',
    'type': 'Magician',
    'health': 100,
    'level': 1
  }
  const newTeam = new Team();
  newTeam.add(characteristics);
  expect(() => {
    newTeam.add(characteristics);
  }).toThrow('This character is already in your team.');
});

test('test multiple characters to team', () => {
  const char1 = {
    'name': 'Han',
    'type': 'Magician',
    'health': 100,
    'level': 1
  };

  const char2 = {
    'name': 'Lee',
    'type': 'Daemon',
    'health': 100,
    'level': 1
  };
  const newTeam = new Team();
  newTeam.addAll([char1, char2]);
  const members = new Set();
  members.add(char1);
  members.add(char2);
  expect(newTeam.members).toEqual(members);
});

test('test make array of members', () => {
  const char1 = {
    'name': 'Han',
    'type': 'Magician',
    'health': 100,
    'level': 1
  };

  const char2 = {
    'name': 'Lee',
    'type': 'Daemon',
    'health': 100,
    'level': 1
  };
  const newTeam = new Team();
  newTeam.addAll([char1, char2]);
  newTeam.toArray();
  const members = [{'name': 'Han', 'type': 'Magician', 'health': 100, 'level': 1}, {'name': 'Lee', 'type': 'Daemon', 'health': 100, 'level': 1}];
  expect(newTeam.members).toEqual(members);
});

