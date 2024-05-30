export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(char) {
    if (this.members.has(char)) {
      throw new Error('This character is already in your team.');
    }
    this.members.add(char);
  }

  addAll(characters) {
    this.members = new Set([ ...this.members, ...characters ]);
  }

  toArray() {
    this.members = Array.from(this.members);
  }
}