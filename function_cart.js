 // REVIEW
 function showCart () {
    let tablecart = document.getElementById("usercart")
    //console.log("tabel cart", tablecart)

    let tbodycart = tablecart.getElementsByTagName("tbody")[0]
    //console.log("tbodycart", tbodycart)

    let trcart = ""

    for (let i = 0; i < daftarCart.length; i++) {
        trcart += `
                <tr>
                <td>${i + 1}</td>
                <td>${daftarCart[i].name}</td>
                <td><img src = "${daftarCart[i].img}" width="60px"></td>
                <td>${daftarCart[i].harga}</td>
                <td>${daftarCart[i].quantity}</td>
                <td>${daftarCart[i].total()}</td>
                <td>
                    <button class="deletecart" onclick="OnBtnDelCart(${i})">DELETE ITEM FROM CART</button>
                </td>
                </tr>`
    }
    tbodycart.innerHTML = trcart
}

// ANCHOR
// UNTUK HAPUS ITEM DI CART
function OnBtnDelCart (index) {
console.log(`button ke ${index} del cart diklik`)

let cartTemp = {...daftarCart[index]}
console.log('cartTemp', cartTemp)

let qtyTemp = cartTemp.quantity
console.log('qtytemp', qtyTemp)

let nameTemp = cartTemp.name
console.log('qtytemp', qtyTemp)

// REVIEW : CODINGAN KAK ALI
// APUS ITEM PAKE daftarCart (ITEM KEHAPUS SATU SATU DI QUANTITY)
// INI CODINGAN KAK ALI

// CHECK apakah QTY prod di cart === 0
/*if (daftarCart[index].quantity === 1) {
    daftarCart.splice(index, 1)
} else {
    daftarCart.[index].quantity -= 1
}*/

// REVIEW
// BALIKIN STOK = KAK ALI
// dataProd[idxProduk].stok += 1

// CARI INDEX DR NAMA PRODUK YG ADA DI CART index ke-index 
// di daftar produk

// let idxProduk = dataProd.findIndex((item) => item.name === daftarCart[index].name)
// kalo udah pake .findIndex lg gausah pake for loop

// for let i = 0; i < daftarCart.length; i++) {
    // if (dataProd[i].name === daftarCart[index].name) {
        // idxProduk = i
        // break
    // }
// }

if (qtyTemp > 1) {
    daftarCart[index].quantity -= 1
} else {
    daftarCart.splice (index, 1)
}
console.log(`daftar cart dihapus`, daftarCart)

for (let i = 0; i < dataProd.length; i++) {
    if (dataProd[i].name == nameTemp) {
        dataProd[i].stok +=1
    }
}

// REVIEW
let cartIndex
// var CartIndex dipakai untuk menampung index dari dataProd yang sdh ada di Cart

// cari data yg sama di dalam daftarCart
for (let i = 0; i < dataProd.length; i++) {
    if (dataProd[i].name === nameTemp) {
        cartIndex = i // kalo ada, disimpan di cartIndex
    }
}
//console.log('cartindex', cartIndex)

// REVIEW
// DISABLE BUTTON CETAK KALAU CART KOSONG
let btnCetak = document.getElementById("cetak") 
console.log('cetak', btnCetak)

if (daftarCart.length === 0) {
    btnCetak.disabled = true
}

// tampilkan lagi showCart
showProd()
showCart()

// ANCHOR
// HOW TO REDUCE QUANTITIY KALO KLIK DELETE FROM CART? DONE
// KALO DI KLIK ADD TO CART, STOK KURANG
// KALO STOK 0, ALERT STOK HABIS
}