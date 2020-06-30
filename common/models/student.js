'use strict';

module.exports = function(Student) {
  Student.observe('after save', function setRoleMapping(ctx, next) {
    if (ctx.instance) {
      if (ctx.isNewInstance) {
        // look up role based on type
        //
        var Role = Student.app.models.Role;
        var RoleMapping = Student.app.models.RoleMapping;
        Role.find({where: {name: 'student'}}, function(err, role) {
          if (err) { return console.log(err); }

          RoleMapping.create({
            principalType: 'USER',
            principalId: ctx.instance.id,
            roleId: role[0].id,
          }, function(err, roleMapping) {
            if (err) { return console.log(err); }
            console.log('User assigned RoleID ' + role[0].id + ' (' + ctx.instance.id + ')');
          });
        });
      }
    }
    next();
  });
};
