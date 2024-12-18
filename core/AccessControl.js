const ActionQueryBuilder = require("./ActionQueryBuilder");
const GrantBuilder = require("./GrantBuilder");

class AccessControl {
  // private _grants = {};
  constructor(grants = {}) {
    this._grants = grants;
  }
  /**
   * Get the current grants
   */

  getGrants() {
    return this._grants;
  }

  /**
   * Set the grants with the provided data
   * @param {Object} grants
   */
  setGrants(grants) {
    this._grants = grants;
  }

  /**
   * Grant permissions to a role
   * @param {string} role
   */
  grant(role) {
    if (!this._grants[role]) this._grants[role] = {};

    return new GrantBuilder(this, role);
  }

  /**
   * Check if a role has access to an action on a resource
   */
  can(role) {
    return new ActionQueryBuilder(this._grants, role);
  }
}

module.exports = AccessControl;
