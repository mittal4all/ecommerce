const express = require("express");
const router = express.Router();
const ShopingCart = require("../models/ShopingCart");
const Cart=require("../models/Cards");

//var arr=[];

router.get("/getData", (req, res) =>
  ShopingCart.findAll().then((result) => res.json(result))
);

router.get("/getData/:id", (req, res) => {
  console.log(req.params);
  ShopingCart.findByPk(req.params.id).then((result) => res.json(result));
});

router.get("/addtocart/:id",async(req,res)=>{
      var Product_id=req.params.id;
      const result= await ShopingCart.findByPk(Product_id);
      //console.log(result);
    //  const result= await ShopingCart.findByPk(Product_id);
    //   //res.json(result);
    //   //console.log(result)
    //   console.log(arr.length);
    //   var arr=[];
    //   if(arr.length==0){
    //     arr.push(Product_id)
    //     var cart=new Cart({})
    //     var newCart=cart.add(result,Product_id);
    //     console.log("1st time",newCart);
    //   }
    //   else if((arr.length!=0)){
    //     for(let i=0;i<arr.length;i++){
    //       console.log(Product_id);
    //       if(arr[i]===Product_id){
    //         var cart=new Cart(newCart);
    //         console.log("inside cart",cart)
    //         var newCart=cart.add(result,Product_id);
    //         console.log("2nd time",newCart);
    //       }
    //       else{
    //         arr.push(Product_id)
    //         var cart=new Cart({})
    //         var newCart=cart.add(result,Product_id);
    //         console.log("3rd time",newCart);
    //       }
    //     }
    //   }
    var cart=new Cart({})
     var newCart=cart.add(result,Product_id);
      //console.log(">>>>>>>>>>>>>>new value",newCart);
      res.json(newCart);
    //console.log(cart.add(result,result.id));
      //ShopingCart.findByPk(req.params.id).then((result) => res.json(result));
}); 

router.post("/savecart",(req,res)=>{
  res.json(req.body);
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
