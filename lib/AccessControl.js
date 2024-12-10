class AccessControl {
  constructor(grants ={}, policies ={}) {
    this.grants = grants; // Role-based access controls (RBAC)
    this.policies = policies; // Policy-based access controls (ABAC)
  }

  /**
   * Set policies dynamically, it's updating policies at runtime.
   * @param {Object} policies
   */

  setPolicies(policies) {
    this.policies = policies;
  }

  /**
   * Enforce the policies for the role, action, resource and attribute restrictions, etc.
   * global system-wide policies.
   * @param {string} role 
   * @param {string} action 
   * @param {string} resource 
   * @param {Array} attributes 
   */
  enforcePolicies(role, action, resource, attributes) {

  }

  /**
   * Start granting permissions to a role.
   * @param {string} role
   */
  grant(role) {
    
  }

}