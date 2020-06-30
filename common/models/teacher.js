'use strict';

module.exports = function(Teacher) {
  Teacher.observe('after save', function setRoleMapping(ctx, next) {
    if (ctx.instance) {
      if (ctx.isNewInstance) {
        // look up role based on type
        //
        var Role = Teacher.app.models.Role;
        var RoleMapping = Teacher.app.models.RoleMapping;
        if (ctx.instance.isAdmin) {
          Role.find({where: {name: 'admin'}}, function(err, role) {
            if (err) {
              return console.log(err);
            }

            RoleMapping.create({
              principalType: 'USER',
              principalId: ctx.instance.id,
              roleId: role[0].id,
            }, function(err, roleMapping) {
              if (err) {
                return console.log(err);
              }
              console.log('User assigned RoleID ' + role[0].id + ' (' + ctx.instance.id + ')');
            });
          });
        }        else {
          Role.find({where: {name: 'teacher'}}, function(err, role) {
            if (err) {
              return console.log(err);
            }

            RoleMapping.create({
              principalType: 'USER',
              principalId: ctx.instance.id,
              roleId: role[0].id,
            }, function(err, roleMapping) {
              if (err) {
                return console.log(err);
              }
              console.log('User assigned RoleID ' + role[0].id + ' (' + ctx.instance.id + ')');
            });
          });
        }
      }
    }
    next();
  });
};
