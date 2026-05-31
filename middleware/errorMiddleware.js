
const errorHandler = (err,req,res,next) => {
      const statusCode = err.statusCode || 500;

      res.status(statusCode).json({
            sucess : false,
            message : err.message || "internal server Error"
      })
}
module.exports = errorHandler;