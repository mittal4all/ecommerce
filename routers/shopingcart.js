const express = require("express");
const router = express.Router();
const ShopingCart = require("../models/ShopingCart");
const Cart=require("../models/Carts");

//var arr=[];

router.get("/getData", (req, res) =>
  ShopingCart.findAll().then((result) => res.json(result))
);

router.get("/getData/:id", (req, res) => {
  console.log(req.params);
  ShopingCart.findByPk(req.params.id).then((result) => res.json(result));
});

router.post("/addtocart/:id",async(req,res)=>{
      var Product_id=req.params.id;
      const user = await ShopingCart.findAll({
        where: {
          id: Product_id,
        },
      })
      Cart.save(user[0].dataValues);
      res.json("added successfully");
}); 

router.delete("/deleteCart/:id",async(req,res)=>{
  Cart.delete(req.params.id);
  res.json(Cart.getCart());
})

router.get("/getCart",(req,res)=>{
  const newCart=Cart.getCart();
  res.json(newCart);
})

router.post("/adddata", (req, res) => {
  //console.log(req.body);
  var newdata = req.files.product_image;
  //console.log(newdata);
  newdata.mv("public/images/" + newdata.name, function (err) {
    if (err) {
      res.json({ status: "file not uploades" });
    } else {
      var newObj = {
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        product_description: req.body.product_description,
        product_image: `http://localhost:5000/images/${newdata.name}`
      };
      console.log(newObj);
      ShopingCart.create(newObj).then((result) => res.json(result));
    }
  });
});

router.delete("/delete/:id", (req, res) =>
  ShopingCart.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => res.json(result))
);

module.exports = router;

// const storage = multer.diskStorage({
//   destination: "./upload/images",
//   filename: (req, file, callback) => {
//     return callback(
//       null,
//       `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
//     );
//   }
// });

// const upload = multer({
//   storage
// });

//get list
// router.get("/findAllData",(res, req) => {
//   ShopingCart.findAll()
//     .then((ele) => {
//       console.log(ele);
//     })
//     .catch((err) => res.json(err));
// });
