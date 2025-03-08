import Joi from "joi";

const registerSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),

  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),

  password: Joi.string()
    .pattern(new RegExp("^(?=.*[A-Z,a-z,0-9])(?=.*[!@#$%&_*])"))
    .required(),

  repeat_password: Joi.ref("password"),
});

export default registerSchema;
