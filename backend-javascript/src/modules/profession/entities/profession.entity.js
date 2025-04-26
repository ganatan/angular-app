export default class Entity {
  constructor({ id = null, name }) {
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      throw new Error('Invalid profession name');
    }

    this.id = id;
    this.name = name.trim();
  }

  rename(newName) {
    if (!newName || typeof newName !== 'string' || newName.trim().length < 2) {
      throw new Error('Invalid new name');
    }

    this.name = newName.trim();
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
