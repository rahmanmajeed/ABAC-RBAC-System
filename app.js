const AccessControl = require("./core/AccessControl");


const ac = new AccessControl();

// Define permissions for roles
ac.grant('admin')
    .create('product')
    .read('product')
    .update('product')
    .delete('product');

ac.grant('editor')
    .create('article')
    .read('article')
    .update('article');

ac.grant('user')
    .read('product')
    .read('article');

// Check permissions
console.log('Can admin create product?', ac.can('admin').can('create', 'product')); // true
console.log('Can editor delete article?', ac.can('editor').can('delete', 'article')); // false
console.log('Can user read article?', ac.can('user').can('read', 'article')); // true
