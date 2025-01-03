const ActionQueryBuilder = require("./ActionQueryBuilder");
const GrantBuilder = require("./GrantBuilder");

class AccessControl {
  // private _grants = {};
  constructor(grants) {
    if (arguments.length === 0) grants = {}; // set default grants value on initialization
    this._grants = null;
    this._isLocked = false;
    this.setGrants(grants);
  }

  /**
   * Get isLocked
   */
  get isLocked() {
    return this._isLocked && Object.isFrozen(this._grants);
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
    if (this.isLocked) throw new Error("AccessControl ERROR");
    this._grants = grants;
    return this;
  }

  /**
   * Reset the grants Object
   *
   */
  reset() {
    if (this.isLocked) throw new Error("AccessControl ERROR");
    this._grants = {};
    return this;
  }

  /**
   * Lock the current Instance of AccessControl
   *
   */
  lock() {
    utils.lockAC(this);
    return this;
  }
  /**
   * Grant permissions to a role
   * @param {string} role
   */
  grant(role) {
    if (this._isLocked) throw new Error("Grant Error");
    if (arguments.length !== 0 && role === undefined) {
      throw new Error("Invalid role(s): for grant");
    }
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
