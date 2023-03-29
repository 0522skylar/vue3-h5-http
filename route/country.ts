import { Router } from "express";
// import { CountryModel, ICountry } from "../models/country";

const routes = Router();

routes.get("/", async (req, res) => {
  try {
    const countries = [
      {
        name: '11111',
        label: '222222222'
      }
    ]
    return res.json(countries);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Sorry, something went wrong :/" });
  }
});

routes.post("/", async (req, res) => {
  try {
    // const country: ICountry = req.body;

    // const countryExists = await CountryModel.findOne({
    //   name: country.name,
    // }).exec();

    // if (countryExists) {
    //   return res
    //     .status(409)
    //     .json({ error: "There is already another country with this name" });
    // }

    // const newCountry = await CountryModel.create(country);
    const newCountry = [
      {
        name: '广州',
        label: 'guangzhou'
      }
    ]
    return res.status(200).json(newCountry);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Sorry, something went wrong :/" });
  }
});

export default routes;
