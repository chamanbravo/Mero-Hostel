const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  const extraDetails = err.extraDetails || " Error details not provided";
  return res.satuts(status).json({ message, extraDetails });
};

export default errorMiddleware;
