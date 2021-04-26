const authController = require("../controllers/authController");
module.exports = (app) => {



  app.get("/auth/get-token", async (req, res) => {
    let token = await authController.getSessionToken();
    res.send({ token });
  });

  
  app.post("/auth/register", (req, res) => {
    authController.register(req, res);
  });
  app.post("/auth/login", (req, res) => {
    authController.login(req, res);
  });

   app.put("/feedback/:id", (req, res) => {
    authController.feedback(req, res);
  });
};
