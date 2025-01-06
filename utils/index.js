// Utility functions
const utils = {
  toStringArray(value) {
    if (typeof value === "string") return [value];
    if (Array.isArray(value)) return value.map(String);
    throw new Error("Value must be a string or an array of strings.");
  },
  getInspectedGrants(grants) {
    if (typeof grants !== "object" || grants === null) {
      throw new Error("Invalid grants object.");
    }
    return JSON.parse(JSON.stringify(grants)); // Deep copy to avoid mutations
  },
  lockAC(instance) {
    if (!Object.isFrozen(instance._grants)) {
      Object.freeze(instance._grants);
    }
    instance._isLocked = true;
  },

  grantRoles(grants, roles) {
    if (typeof roles === "string") roles = this.toStringArray(roles);
    roles.forEach((role) => {
      grants[role] = {};
    });
  },
};

module.exports = { utils };
