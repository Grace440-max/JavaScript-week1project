//bussness and customer information

const BusinessName= "Grace Dental Supplies";
const customerName="Ange";

//products
const product1="Toothbrush";
const product2="dental floss";


//price  
const Toothbrushprice=500;
const dentalflossprice=2500;

//quantity
let Toothbrushquantity=200;
let dentalflossquantity=50;

//delivery fees

const deliveryfees=1000;


//calculate the order cost

const Toothbrushsubtotal=Toothbrushprice*Toothbrushquantity;
const dentalflosssubtotal= dentalflossprice*dentalflossquantity

const subtotal=dentalflosssubtotal+Toothbrushsubtotal

const totalcost= subtotal+deliveryfees;

//receipt

console.log(`Business Name: ${BusinessName}

    customer Name: ${customerName}
    
    Product 1: ${product1}
    Quantity: ${Toothbrushquantity}
    Unit Price: ${Toothbrushprice}
    Subtotal: ${Toothbrushsubtotal}

    Product 2: ${product2}
    Quantity: ${dentalflossquantity}
    Unite Price: ${dentalflossprice}
    Subtotal: ${dentalflosssubtotal}


    Delivery Fees: ${deliveryfees}
    Total : ${totalcost}


Thank you for choosing Us!`);







