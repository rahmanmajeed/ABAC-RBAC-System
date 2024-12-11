class ActionQueryBuilder {
  /**
   * @param {Object} grants - The grants object containing all role-based permissions.
   * @param {string} role - The role for which the permissions are being queried.
   */
  constructor(grants, role) {
    this.grants = grants; // Grants object that stores permissions for roles
    this.role = role; // The role to check the permissions for
  }

  /**
   * Check if a role has a specific action permission on a resource.
   *
   * @param {string} action - The action being requested (e.g., 'create', 'read', 'update', 'delete').
   * @param {string} resource - The resource the action is being performed on.
   * @returns {boolean} - Returns true if the role has the permission for the specified action on the resource, false otherwise.
   */
  can(action, resource) {
    return Boolean(
      this.grants[this.role] && // Ensure the role exists in the grants object
        this.grants[this.role][resource] && // Ensure the resource exists under the role
        this.grants[this.role][resource][action] // Check if the action exists under the resource for the role
    );
  }

  /**
   * Check if a role can perform multiple actions on a resource.
   *
   * @param {Array} actions - A list of actions to check (e.g., ['create', 'read']).
   * @param {string} resource - The resource the actions are being performed on.
   * @returns {boolean} - Returns true if the role has all the specified actions for the resource, false otherwise.
   */
  canAll(actions, resource) {
    return actions.every((action) => this.can(action, resource)); // Check that all actions are permitted on the resource
  }

  /**
   * Check if a role can perform any of the provided actions on a resource.
   *
   * @param {Array} actions - A list of actions to check (e.g., ['create', 'update']).
   * @param {string} resource - The resource the actions are being performed on.
   * @returns {boolean} - Returns true if the role has at least one of the specified actions for the resource, false otherwise.
   */
  canAny(actions, resource) {
    return actions.some((action) => this.can(action, resource)); // Check if any action is allowed on the resource
  }

  /**
   * Check if a role has permission to perform all actions on a resource.
   *
   * @param {string} resource - The resource to check the permissions for.
   * @returns {boolean} - Returns true if the role has all possible actions (create, read, update, delete) for the resource.
   */
  canAllActions(resource) {
    const actions = ["create", "read", "update", "delete"]; // The full list of possible actions
    return this.canAll(actions, resource); // Check if all actions are allowed on the resource
  }

  /**
   * Check if a role can perform any action on a resource.
   *
   * @param {string} resource - The resource to check the permissions for.
   * @returns {boolean} - Returns true if the role has at least one action (create, read, update, delete) allowed on the resource.
   */
  canAnyAction(resource) {
    const actions = ["create", "read", "update", "delete"]; // The full list of possible actions
    return this.canAny(actions, resource); // Check if any action is allowed on the resource
  }

  /**
   * Return the permissions for a specific role on a specific resource.
   *
   * @param {string} resource - The resource to check the permissions for.
   * @returns {Object} - An object representing the actions allowed for the role on the resource.
   */
  getPermissionsForResource(resource) {
    if (this.grants[this.role] && this.grants[this.role][resource]) {
      return this.grants[this.role][resource]; // Return the actions granted for the resource under this role
    }
    return {}; // Return an empty object if no permissions are found
  }
}

module.exports = ActionQueryBuilder;
