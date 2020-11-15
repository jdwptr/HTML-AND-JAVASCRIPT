// CREATE DATABASE
let dataProd = [
    {
        id : 1,
        name : 'iPhone 12',
        img : 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro-max-.jpg',
        harga : 23000000,
        stok : 12,
    },
    {
        id : 2,
        name : 'Samsung Note 20',
        img : 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note20-5g-r.jpg',
        harga : 2250000,
        stok : 20,
    },
    {
        id : 3,
        name : 'Google Pixel 5 5G',
        img : 'https://cdn.dxomark.com/wp-content/uploads/medias/post-53930/googlepixel5.jpg',
        harga : 8960000,
        stok : 5,
    },
    {
        id : 4,
        name : 'OnePlus 5T',
        img : 'https://fdn2.gsmarena.com/vv/bigpic/oneplus-5t.jpg',
        harga : 6578000,
        stok : 5,
    }
]

// REVIEW
    // CLASS BARU UNTUK CART
    let daftarCart = []

    
// NOTE
    // CLASS untuk new produk
    class Produk {
        constructor(id, name, img, harga, stok){
            this.id = id,
            this.name = name,
            this.img = img,
            this.harga = harga,
            this.stok = stok
        }
    }

    class Cart {
        constructor(id, name, img, harga, quantity){
            this.id = id,
            this.name = name,
            this.img = img,
            this.harga = harga,
            this.quantity = quantity
        }
        // method itung total, jgn dibikin di class cart krn bentrok
        total = function () {
            return this.quantity * this.harga
        }  
    }

