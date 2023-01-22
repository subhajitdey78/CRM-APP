exports.userResponse = (users) => {
    let usersResult = []
    users.forEach(user => {
      usersResult.push({
          name: user.name,
          userId : user.userId,
          email : user.email,
          userType : user.userType,
          userstatus: user.userstatus
    })
  });
  return usersResult
  }