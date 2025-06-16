export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(name) {
    if (this.members.has(name)) {
      throw new Error(`Персонаж ${name} уже присутствует в команде`);
    }
    this.members.add(name);
  }

  addAll(...names) {
  names.forEach((name) => {
    if (!this.members.has(name)) {
      this.members.add(name);
    }
  });
}

  toArray() {
    return Array.from(this.members);
  }
}
