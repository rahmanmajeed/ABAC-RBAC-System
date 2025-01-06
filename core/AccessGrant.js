const { utils } = require("../utils");

class AccessGrant {
  #_ac;
  #_ag;
  #_grants;
  constructor(ac, role) {
    this.#_ac = ac;
    this.#_grants = ac._grants;

    if (typeof role === "string" || Array.isArray(role)) {
      this.role(role);
    } else if (typeof role === "object") {
      throw new Error("invalid role info");
    }
  }

  role(role) {
    utils.grantRoles(this.#_grants, role);
    // console.log(this.#_grants, 'object');
    return this;
  }

  resource(value) {
    this.#_ag.resource = value;
    return this;
  }

  attributes(value) {
    this.#_ag.attributes = value;
    return this;
  }

  createOwn(resource, attributes) {
    return 
  }
}

module.exports = AccessGrant;
