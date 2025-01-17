export const sendToken = (message, user, res, statusCode) => {
  const token = user.getJWTToken();
  console.log("hehe");

  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  console.log("hehe");

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });

  console.log("hehe");
};
