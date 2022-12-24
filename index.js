var express = require("express");
const HomeController = require("../controller/HomeController");
const authenticate = require("../middleware/authenticate");
var router = express.Router();

router.post("/login", HomeController.login);
/* GET home page. */
router.get("/profile", authenticate, HomeController.profile);
router.get("/users", authenticate, HomeController.index);

router.post("/users", HomeController.creatUser);

router.put("/update-account", authenticate, HomeController.updateUser);
router.delete("/remove-account", authenticate, HomeController.deleteUser);

router.post("/game/:userId", authenticate, HomeController.selectUser);
router.get(
  "/game-notification/",
  authenticate,
  HomeController.gameNotification
);
router.put("/inprocess/:userId", authenticate, HomeController.inprocesGame);
router.get("/getGameId/", authenticate, HomeController.getGameId);
router.get("/gameBoard/:gameId", authenticate, HomeController.getGameId);
router.put("/turnUpdate/:gameId", authenticate, HomeController.turnPlayer);
router.post("/turnPlayer/:gameId", authenticate, HomeController.turnPlayer);
router.get("/getAllValues/:gameId", authenticate, HomeController.getAllValues);
router.delete(
  "/getAllValues/:gameId",
  authenticate,
  HomeController.deleteAllValues
);
router.get("/checkWinner/:gameId", HomeController.checkWinner);

module.exports = router;
