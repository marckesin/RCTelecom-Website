const express = require("express");
const _ = require("lodash");
const axios = require("axios");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "RCTelecom - Soluções Inteligentes" });
});

router.get("/empresa", (req, res) => {
  res.render("empresa", { title: "Empresa" });
});

router.get("/produtos", (req, res) => {
  res.render("produtos", { title: "Produtos" });
});

router.get("/produtos/:endpoint", (req, res) => {
  const title = _.startCase(req.params.endpoint);
  res.render(`produtos-${req.params.endpoint}`, { title: title });
});

router.get("/servicos", (req, res) => {
  res.render("servicos", { title: "Serviços", data: "" });
});

router.post("/servicos", async (req, res, next) => {
  await axios
    .get(
      `http://apilayer.net/api/validate?access_key=${process.env.NUMVERIFY_KEY}&country_code=BR&number=${req.body.telNumber}`
    )
    .then((response) => response)
    .then((data) => {
      const { carrier, location: estado } = data.data;
      const [operadora] = carrier.split(" ");
      res.render("servicos", {
        title: "Serviços",
        data: { operadora, estado },
      });
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/contato", (req, res) => {
  res.render("contato", { title: "Contato" });
});

router.post("/contato", (req, res) => {
  res.render("contato", { title: "Contato" });
});

module.exports = router;
