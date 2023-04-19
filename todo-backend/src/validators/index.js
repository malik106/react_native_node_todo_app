const Joi = require('joi');

exports.validateTodoToBeAdded = async (req, res, next) => {
  const packet = {
    ...req.body,
  };
  const schema = Joi.object({
    text: Joi.string().required(),
  });

  try {
    const value = await schema.validateAsync(packet);
    if (value){
      next();
    }
  } catch (error) {
    return res.status(400)
      .json({
        errorType: 'VALIDATION_ERROR',
        errorMessage: error.details[0].message,
      });
  }
};

exports.validateTodoToBeUpdated = async (req, res, next) => {
  const packet = {
    ...req.body,
  };
  const schema = Joi.object({
    text: Joi.string().required(),
    isCompleted: Joi.boolean().required(),
  });

  try {
    const value = await schema.validateAsync(packet);
    if (value){
      next();
    }
  } catch (error) {
    console.log(error);
    return res.status(400)
      .json({
        errorType: 'VALIDATION_ERROR',
        errorMessage: error.details[0].message,
      });
  }
};
