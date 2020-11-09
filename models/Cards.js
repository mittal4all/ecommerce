module.exports=function Cart(oldCart){
    this.items=oldCart.items || {};//this is a object
    this.totalQty=oldCart.totalQty || 0;
    this.totalPrice=oldCart.totalPrice || 0;
    this.add= function(item,id){
        var storedItem=this.items[id];
        if(!storedItem){
            //console.log(`>>>>>>storedItem>>>>>item>>>${JSON.stringify(item)}`)
            //storedItem = this.items[id]={item:{id:item.id,product:item.product_name},qty:0,price:0};
            storedItem = this.items[id]={item:item,qty:0,price:0};
            //console.log(`>>>>>>storedItem>>>>>item>>>${JSON.stringify(storedItem)}`)

        }
        //console.log(`>>>>item>>${JSON.stringify(item)}`)

        
        storedItem.qty++;
        storedItem.price=item.product_price*storedItem.qty;
        this.totalQty++;
        this.totalPrice+=storedItem.item.product_price;
        return storedItem
    

    };
};