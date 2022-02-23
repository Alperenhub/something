let cart =[
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:20},
    {id:4, productName:"Şarj Cihazı", quantity:2, unitPrice:100},
    {id:5, productName:"Kitap", quantity:3, unitPrice:30},
    {id:6, productName:"Pot", quantity:5, unitPrice:150},
]

cart.map(product=>{             //map arrayi tek tek dolaşmaya yarar
    console.log("<li>"+product.productName+ " : "+ product.unitPrice*quantity+"</li>" )
} )                               
     
console.log("</ul>")

let total = cart.reduce((acc,product)=>acc+ product.unitPrice*product.quantity,0) /**ürünün birim fiyatını akümülatora eklledik */
console.log(total)


 
let quantityOver2 = cart.filter(product=>product.quantity>2)  /** adı üstünde bir şeyleri filtreliyoz */

console.log(quantityOver2)



function addToCart(sepet){
    sepet.push({id:7, productName:"Ruhsat",quantity:1,unitPrice:300});
}


addToCart(cart)
console.log(cart);

// 7. cart sorunsuz eklenir çünkü referans tip

let sayi = 10;

function sayiTopla(number){
    number +=1
}
sayiTopla(sayi)
console.log(sayi)

// çıktı 10 olur çünkü değer tip ('sayi'a 10 değerini atadım ve artık sayiyla alakam kalmadı çünkü onun yerini 'sayi'nin karşılığında tuttum)