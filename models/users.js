const mongoose = require("mongoose");
const yup = require("yup");

//USER SCHEMA
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 40,
  },
  first_name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  last_name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
});

const validateUser = (user) => {
  const schema = yup.object().shape({
    userEmail: yup.string().required().email("Bad email format").min(3).max(40),
    userName: yup.string().required().min(3).max(20),
    userLastName: yup.string().required().min(3).max(20),
    jobTitle: yup.string().required().min(3).max(20),
  });

  return schema
    .validate(user)
    .then((user) => user)
    .catch((error) => {
      return {
        message: error.message,
      };
    });
};

exports.User = new mongoose.model("User", UserSchema);
exports.validateUser = validateUser;
