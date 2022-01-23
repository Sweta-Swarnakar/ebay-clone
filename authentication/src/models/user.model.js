 const mongoose = require("mongoose");
 const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// // salt => random string of characters

// // user = User.create(req.body), user = User.findOne(); user.email = "sdfgsdkf"; user.save()
// // user = User.findByIdAndUpdate(req.params.id, req.body) => password => different then the password in the db
userSchema.pre("save", function (next) {
  // either we are creating a user or we are updating a user
  if (!this.isModified("password")) return next();
  this.password = bcrypt.hashSync(this.password, 8,) 
      
      return next()
 
});

userSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

 module.exports = mongoose.model("user", userSchema);
