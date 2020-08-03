
const router = require("express").Router();
const path = require("path");

// You will need html routes to display the following pages:
//         - index.html ( "/" )
router.get("/", (req, res) => {
    res.sendFile(path.join(dirname, "../public/index.html"));
});
//         - exercise.html ( "/exercise" )
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(dirname, "../public/exercise.html"));
});
//         - stats.html ( "/stats" )
router.get("/stats", (req, res) => {
    res.sendFile(path.join(dirname, "../public/stats.html"));
});

module.exports = router;