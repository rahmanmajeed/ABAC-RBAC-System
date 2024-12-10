const roles = {
  admin: ["create:any", "read:any", "update:any", "delete:any"],
  editor: ["create:own", "read:any", "update:own", "delete:own"],
  viewer: ["read:any"],
  user: ["read:any"],
};

// const grantsObject = buildGrantsObject(grantList);

// console.log(grantsObject);
/*
{
    admin: {
        video: {
            'create:any': ['*', '!views'],
            'read:any': ['*'],
            'update:any': ['*', '!views'],
            'delete:any': ['*']
        }
    },
    user: {
        video: {
            'create:own': ['*', '!rating', '!views'],
            'read:any': ['*'],
            'update:own': ['*', '!rating', '!views'],
            'delete:own': ['*']
        }
    }
}
*/
const orgRoles  = {
  "roles": [
    {
      "id": "role_admin",
      "name": "Administrator",
      "slug": "admin",
      "description": "Has full access to all resources and permissions, including managing users and content.",
      "permissions": [
        {
          "resource": "video",
          "actions": [
            {
              "action": "create",
              "scope": "any",
              "attributes": [
                "*",
                "!views",
                "!rating",
                "!comments"
              ],
              "conditions": {
                "can_create_all_fields": true
              }
            },
            {
              "action": "read",
              "scope": "any",
              "attributes": [
                "*"
              ],
              "conditions": {
                "access_audit": true
              }
            },
            {
              "action": "update",
              "scope": "any",
              "attributes": [
                "*",
                "!views",
                "!rating",
                "!comments"
              ],
              "conditions": {
                "can_edit_any_video": true
              }
            },
            {
              "action": "delete",
              "scope": "any",
              "attributes": [
                "*"
              ],
              "conditions": {
                "requires_confirmation": true
              }
            },
            {
              "action": "archive",
              "scope": "any",
              "attributes": [
                "*"
              ]
            },
            {
              "action": "restore",
              "scope": "any",
              "attributes": [
                "*"
              ]
            }
          ]
        },
        {
          "resource": "user",
          "actions": [
            {
              "action": "create",
              "scope": "any",
              "attributes": [
                "*"
              ],
              "conditions": {
                "can_create_users": true
              }
            },
            {
              "action": "read",
              "scope": "any",
              "attributes": [
                "*"
              ],
              "conditions": {
                "view_sensitive_data": false
              }
            },
            {
              "action": "update",
              "scope": "any",
              "attributes": [
                "*"
              ]
            },
            {
              "action": "delete",
              "scope": "any",
              "attributes": [
                "*"
              ],
              "conditions": {
                "requires_admin_approval": true
              }
            }
          ]
        }
      ]
    },
    {
      "id": "role_user",
      "name": "User",
      "slug": "user",
      "description": "Can view and manage their own content, with restrictions on access to others' content.",
      "permissions": [
        {
          "resource": "video",
          "actions": [
            {
              "action": "create",
              "scope": "own",
              "attributes": [
                "*",
                "!rating",
                "!views",
                "!comments"
              ],
              "conditions": {
                "can_create_video": true,
                "is_own_video": true
              }
            },
            {
              "action": "read",
              "scope": "any",
              "attributes": [
                "*"
              ],
              "conditions": {
                "allow_public_viewing": true
              }
            },
            {
              "action": "update",
              "scope": "own",
              "attributes": [
                "*",
                "!rating",
                "!views",
                "!comments"
              ],
              "conditions": {
                "can_edit_own_video": true,
                "is_own_video": true
              }
            },
            {
              "action": "delete",
              "scope": "own",
              "attributes": [
                "*"
              ],
              "conditions": {
                "can_delete_own_video": true,
                "is_own_video": true
              }
            }
          ]
        },
        {
          "resource": "profile",
          "actions": [
            {
              "action": "read",
              "scope": "own",
              "attributes": [
                "id",
                "username",
                "full_name",
                "email"
              ]
            },
            {
              "action": "update",
              "scope": "own",
              "attributes": [
                "email",
                "full_name",
                "profile_picture"
              ]
            }
          ]
        }
      ]
    }
  ],
  "resources": [
    {
      "id": "video",
      "name": "Video",
      "description": "Represents a video resource in the system.",
      "attributes": [
        "id",
        "title",
        "description",
        "file_url",
        "rating",
        "views",
        "comments",
        "metadata",
        "tags",
        "thumbnail",
        "owner_id",
        "created_at",
        "updated_at"
      ]
    },
    {
      "id": "user",
      "name": "User",
      "description": "Represents a user in the system.",
      "attributes": [
        "id",
        "username",
        "email",
        "full_name",
        "role",
        "status",
        "created_at",
        "updated_at",
        "profile_picture"
      ]
    },
    {
      "id": "profile",
      "name": "User Profile",
      "description": "Represents a user profile, allowing users to view and update their details.",
      "attributes": [
        "id",
        "username",
        "full_name",
        "email",
        "profile_picture"
      ]
    }
  ],
  "actions": [
    {
      "id": "create",
      "name": "Create",
      "description": "Create a new resource."
    },
    {
      "id": "read",
      "name": "Read",
      "description": "Read access to a resource."
    },
    {
      "id": "update",
      "name": "Update",
      "description": "Modify an existing resource."
    },
    {
      "id": "delete",
      "name": "Delete",
      "description": "Remove a resource from the system."
    },
    {
      "id": "archive",
      "name": "Archive",
      "description": "Mark a resource as archived."
    },
    {
      "id": "restore",
      "name": "Restore",
      "description": "Restore an archived resource."
    }
  ]
}

module.exports = { roles };
