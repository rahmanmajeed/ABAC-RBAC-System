const { roles } = require("../data/roles");

function hasPermission(role, action, resource, ownership = false) {
  const permissions = roles[role] || [];
  const permission = `${action}:${ownership ? "own" : "any"}`;
  return (
    permissions.includes(permission) || permissions.includes(`${action}:any`)
  );
}


function hasRoleAccess(role, action, resource, owner = false){
  const userRole = roles[role] || []; // match role with roles data
  const specificRolePermissions = `${action}:${resource}`;
  const generalPermissions = `${action}:${owner ? "own" : "any"}`;

  return userRole.includes(specificRolePermissions) || userRole.includes(generalPermissions)
}

module.exports = { hasPermission };
