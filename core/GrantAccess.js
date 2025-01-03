class GrantAccess {
  constructor(ac, role) {
    this._ac = ac;
    this._grants = ac._grants;

    if (typeof role === "string" || Array.isArray(role)) {
      this.role(role);
    } else if (typeof role === "object") {
      throw new Error("invalid role info");
    }
  }

  role(role) {
    
  }
}
