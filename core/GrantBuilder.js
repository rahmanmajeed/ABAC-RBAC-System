/**
 * Class for creating new permissions
 */
class GrantBuilder {
  
  constructor(accessControl, role) {
    this._accessControl = accessControl;
    this._role = role;
  }

  create(resource) {
    return this._addPermission('create', resource)
  }

  read(resource) {
    return this._addPermission('read', resource)
  }

  update(resource) {
    return this._addPermission('update', resource)
  }

  delete(resource) {
    return this._addPermission('delete', resource)
  }

  _addPermission(action, resource) {
    if(this._accessControl.getGrants()[this._role][resource]){}
  }
}
