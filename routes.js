const { Router } = require("express");
const multer = require("multer");
const postFile = require("./controller");
const upload = multer({ dest: "uploads/" });

const router = Router();

router.post("/", upload.single("upfile"), postFile);

module.exports = router;
