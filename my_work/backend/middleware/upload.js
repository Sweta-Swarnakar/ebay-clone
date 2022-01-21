const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + "-" + file.originalname);
  },
  // filename => 1641376861973-resume.png // akhil
  // filename => 1641376861980-resume.png // nikhil
});

const fileFilter = (req, file, callback) => {
  if (file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
    // To accept the file pass `true`, like so:
    callback(null, true);
  } else {
    // To reject this file pass `false`, like so:
    callback(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5, // 1024 Bytes = 1 KB * 1024 = 1 MB * 5 = 5MB
  },
});

const uploadSingle = (fieldName) => {
  return (req, res, next) => {
    const uploadItem = upload.single(fieldName);

    uploadItem(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        res.send({ message: err.message, errorType: "MulterError" });
      } else if (err) {
        // An unknown error occurred when uploading.
        res.send({ message: err.message, errorType: "NormalError" });
      }
      // Everything went fine.
      next();
    });
  };
};

const uploadMultiple = (fileCount, fieldName) => {
  return (req, res, next) => {
    const uploadItems = upload.array(fieldName, fileCount);

    uploadItems(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        return res
          .status(400)
          .send({ message: err.message, errorType: "MulterError" });
      } else if (err) {
        // An unknown error occurred when uploading.
        return res
          .status(400)
          .send({ message: err.message, errorType: "NormalError" });
      }
      // Everything went fine.
      next();
    });
  };
};

module.exports = { uploadSingle, uploadMultiple };
