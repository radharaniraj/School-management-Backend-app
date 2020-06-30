module.exports = function(app) {
  // var Role = app.models.Role;
  // var RoleMapping = app.models.RoleMapping;
  //
  // var Student = app.models.Student;
  //
  // Student.find({}, function(err, students) {
  //   Role.find({'where': {
  //     name: 'student',
  //   }}, function(err, role) {
  //     if (err) {
  //       console.log(err);
  //     }          else {
  //       console.log('Created role:', role);
  //     }
  //
  //     students.forEach(function(student) {
  //       console.log(student.id, 'id shubham');
  //       role[0].principals.create({
  //         principalType: RoleMapping.USER,
  //         principalId: student.id,
  //       }, function(err, principal) {
  //         if (err) {
  //           console.log(err);
  //         }          else {
  //           console.log('Created principal:', principal);
  //         }
  //       });
  //     });
  //   });
  // });
//
//   var Teacher = app.models.Teacher;
//
//   Teacher.find({'where': {'isAdmin': false}}, function(err, teachers) {
//     Role.create({
//       name: 'teacher',
//     }, function(err, role) {
//       if (err) {
//         console.log(err);
//       }          else {
//         console.log('Created role:', role);
//       }
//
//       teachers.forEach(function(teacher) {
//         role.principals.create({
//           principalType: RoleMapping.USER,
//           principalId: teacher.id,
//         }, function(err, principal) {
//           if (err) {
//             console.log(err);
//           }          else {
//             console.log('Created principal:', principal);
//           }
//         });
//       });
//     });
//   });
//
//   Teacher.find({'where': {'isAdmin': true}}, function(err, teachers) {
//     Role.create({
//       name: 'admin',
//     }, function(err, role) {
//       if (err) {
//         console.log(err);
//       }          else {
//         console.log('Created role:', role);
//       }
//
//       teachers.forEach(function(teacher) {
//         role.principals.create({
//           principalType: RoleMapping.USER,
//           principalId: teacher.id,
//         }, function(err, principal) {
//           if (err) {
//             console.log(err);
//           }          else {
//             console.log('Created principal:', principal);
//           }
//         });
//       });
//     });
//   });
};
