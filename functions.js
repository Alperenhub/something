function addToCard(productName,quantity){
    console.log("Sepete eklendi :" + productName+"adet:"+quantity);
}

addToCard('karpuz',12);


let product1 ={productName:"Armut",quantity:6} //nesne oluşturduk
function addToCard3(product){
    console.log("ürün: "+product.productName)
}

let product2 ={productName:"Armut",quantity:6}
let product3 ={productName:"Armut",quantity:6}
product2 =product3
product2.productName="MESAJ"
console.log(product3.productName)



function add(...numbers){ //  rest operatörü ... dediğimde gönderilen parametleri bir arrayin içine koy
    let total = 0;
    for(let i=0;i<numbers.length;i++){
        total = total + numbers[i];
    }
    console.log(total)
}
add(20,30)

let numberss = [30,10,500,600,120]
console.log(Math.max(...numberss))    //sana max sayıyı bulur
//Math.max sayısı ayrı ayrı sayıları yazınca çalışıyo o yüzden "..." ifadesi lazım


let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] =[
    {name:"İç Anadolu",population:"20M"},
    {name:"Marmara",population:"30M"},
    {name:"Karadeniz",population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"]
    ]
]

console.log(icAnadolu);
console.log(icAnadolu.population);

let newProductName, newUnitPrice, newQuantity 
({productName:newProductName,unitPrice:newUnitPrice, quantity:newQuantity}
    ={productName:"Elma",unitPrice:10,quantity:5});

    console.log(newProductName);
    
