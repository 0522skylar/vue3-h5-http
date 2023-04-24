import { Router } from "express";
// import { CountryModel, ICountry } from "../models/country";

const routes = Router();


routes.all("*", function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Methods", 'PUT, POST, GET, DELETE, OPTIONS');
  // res.header("Content-Type", 'application.json;charset=utf-8');
  // next();
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})
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

routes.get("/list", (req, res) => {
  const  { sort } = req.body
  let arr = [
    {
      name: 'zhangsan',
      sex: 'man',
      age: 23,
      city: 'shenzhen'
    },
    {
      name: 'lisi',
      age: 24,
      city: 'guangzhou',
      sex: 'woman'
    },
    {
      name: 'wangwu',
      age: 25,
      city: 'beijing',
      sex: 'man'
    },
    {
      name: 'zhaoliu',
      age: 26,
      city: 'shanghai',
      sex: 'man'
    }
  ];
  if(sort === 'asc') {
    return res.json({
      sortList: arr.reverse()
    })
  }
  else {
    return res.json({
      sortList: arr
    })
  }
})

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
