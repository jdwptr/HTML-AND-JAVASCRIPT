// NOTE
// Menampilkan data ke tabel, akses datanya

function showProd (idx) {
    let table = document.getElementById("daftarprod")
    console.log(table)

    let tbody = table.getElementsByTagName("tbody")[0]
    console.log(tbody)

    let tr = "" 

    // LOOPING UNTUK DAPET DATA SATU SATU
        for (let i = 0; i < dataProd.length; i++) {
            if (idx === i) {
                tr += `<tr>
                    <td></td>
                    <td>
                        <input id="namabaru" type="text" value="${dataProd[i].name}"></td>
                    <td>
                        <input id="imagebaru" type="text" value="${dataProd[i].img}"></td>
                    <td>
                        <input id="hargabaru" type="number" value="${dataProd[i].harga}"></td>
                    <td>
                        <input id="stokbaru" type="number" value="${dataProd[i].stok}"></td>
                    <td>
                        <button onclick=OnBtnSave(${i})>SAVE</button>
                        <button onclick=OnBtnCancel()>CANCEL</button></td>
                </tr>`
            } else {
                tr +=`<tr>
                    <td>${i + 1}</td>
                    <td>${dataProd[i].name}</td>
                    <td>
                        <img src = "${dataProd[i].img}" width="60px">
                    </td>
                    <td>${dataProd[i].harga}</td>
                    <td>${dataProd[i].stok}</td>
                    <td><button onclick=OnBtnDel(${i})>DELETE ITEM</button>
                        <button onclick=OnBtnEdit(${i})>EDIT ITEM</button>
                        <button class="btnAddCart" onclick=OnBtnCart(${i})>ADD ITEM TO CART</button></td>
                </tr>`
            }
        }
        tbody.innerHTML = tr
    }
    showProd()

    // NOTE
    // INGIN MENAMPILKAN DATA BARU ? HOW
    // KALAU INI KAN MANUAL, REPOT
    // 
    // dataProd.push(new Produk(dataProd.length + 1, "Samsung Galaxy Fold 2", "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold2-5g.jpg", 29000000, 2))
    // console.log('dataprodbaru', dataProd)
    // showProd()

    // REVIEW
    // ADD PRODUK SAAT BUTTON DI KLIK 
    function OnBtnClick (event) {
        event.preventDefault()
        console.log('add button di klik')

        // get input value nya? 
        let form = document.getElementById("produkbaru")
        console.log('form', form)
        console.log(form["nama"].value)

        // REVIEW
        // ANCHOR
        // check nama input value => tidak blh ada value yg kosong
        // check value dari harga dan stok tidak boleh kurang dari 0 atau negatif
        let nama = form["nama"].value
        let image = form["img"].value
        let harga = form["harga"].value
        let stok = form["stok"].value

        if (nama === "" || image === "" || harga === "" || stok === "") {
            alert("INPUT TIDAK BOLEH KOSONG")
        } else if (harga <= 0 || stok <= 0) {
            alert('INPUT TIDAK BOLEH 0 DAN NEGATIF')
        } else {
            // masukkan semua value ke dlm daftarprod dlm bentuk object
                dataProd.push(new Produk(
                    dataProd.length + 1, 
                    form["nama"].value, 
                    form["img"].value,
                    parseInt(form["harga"].value),
                    parseInt(form["stok"].value)
                    ))
                    console.log(dataProd)
                    
                    // tampilkan ulang produk
                    showProd()

                    // RESET VALUE DI FORM BIAR TIAP ABIS DI KLIK ADD ILANG
                    form['nama'].value = ''
                    form['img'].value = ''
                    form['harga'].value = ''
                    form['stok'].value = ''
        }   

    }

    // REVIEW
    // BAGAIMANA KALAU MAU DELETE PRODUK?
    // MANUAL
    // dataProd.splice(2, 1)
    // console.log('data kurang', dataProd)

    // showProd()

    function OnBtnDel (index) {
        console.log(`button index ke ${index} di klik`)

        // HAPUS PRODUK
        dataProd.splice(index, 1)

        // panggil function showProd()
        showProd()
    }

    // REVIEW
    // SAYA MAU EDIT PRODUK
    function OnBtnEdit (index) {
        console.log(`button edit index ke ${index} di klik`)

        // TAMBAH PROD ABIS DI KLIK TOMBOL EDIT, JADI INPUT DI KOLOM ISI ISI NYA
        // TAMPILKAN ULANG TABELNYA
        showProd(index)
    }

    // REVIEW
    // UNTUK SAVE NEW PRODUK
    function OnBtnSave (index) {
        console.log('save di klik')

        // klik save, get value dari input data yang baru
        // akses namabaru dll
        let namaBaru = document.getElementById("namabaru").value
        let imageBaru = document.getElementById("imagebaru").value
        let hargaBaru = parseInt(document.getElementById("hargabaru").value)
        let stokBaru = parseInt(document.getElementById("stokbaru").value)
        console.log(namaBaru)
        console.log(imageBaru)
        console.log(hargaBaru)
        console.log(stokBaru)
        
        // EDIT DAFTAR PRODUK DENGAN VALUE YG BARU
        dataProd[index].name = namaBaru
        dataProd[index].img = imageBaru
        dataProd[index].harga = hargaBaru
        dataProd[index].stok = stokBaru

        // tampilkan barang baru
        showProd()
    }

    // REVIEW
    // untuk cancel save
    function OnBtnCancel () {
        console.log('button cancel di klik')

        // tampilkan ulang produkya
        showProd()
    }

    
    // REVIEW
    function OnBtnCart (index) {
        console.log(`button onbtncart ke ${index} di klik`)
        console.log(`data yg mau dimasukan`, dataProd[index].name)

        if (dataProd[index].stok != 0) {
        let produk = {...dataProd[index]}
        // saya mau copy semua properties dari dataProd[index]
        console.log('dataProdCopy', produk)

        let cartIndex
        // var CartIndex dipakai untuk menampung index dari dataProd yang sdh ada di Cart

        // cari data yg sama di dalam daftarCart
        for (let i = 0; i < daftarCart.length; i++) {
            if (daftarCart[i].name === produk.name) {
                cartIndex = i // kalo ada, disimpan di cartIndex
            }
        }
        console.log('cartindex', cartIndex)
        
        // REVIEW
        // add produk to cart
        if (cartIndex !== undefined) {  // cart sudah ada barang yg sama
            daftarCart[index].quantity += 1
            dataProd[index].stok--
        } else {
            daftarCart.push(new Cart(
                daftarCart.length + 1,
                    dataProd[index].name,
                    dataProd[index].img,
                    dataProd[index].harga,
                    1
                )
            )
            dataProd[index].stok--
        }

            // REVIEW
            // ENABLE BUTTON CETAK
            let btnCetak = document.getElementById("cetak")
            if (btnCetak.disabled === true) {
                btnCetak.disabled = false
            }

        
        // abis di klik add to cart kurangi stok
        showProd()
        showCart()
        
        
    } else if (dataProd[index].stok == 0) {
        alert("STOK KOSONG")
    }

    }
    
    // REVIEW        
    // SORT UNUTK BARANG
    function OnBtnSort () {
        console.log('sort di klik')

        // get value dari select option
        let select = document.body.getElementsByTagName('select')[0]
        //console.log('select', select)
        
        // NOTE
        // KALAU AMBIL VALUE DI SELECT OPTION GAUSAH DIZTEMBAK
        let valueHarga = select.value
       // console.log('asc harga', valueHarga)

        // NOTE
        // sorting data
        // method sort akan jalan yg array isinya number

        // untuk sorting by harga
        // callback funtion, untuk sorting by price
        // krn dia object, pakai custom function
        // kalo array gausah pake ini
        // [1, 2, 3, 2, 1]

        // function sortingAsc (a, b) {
        //     if (a.harga > b.harga) {
        //         return 1
        //     }

        //     if (a.harga < b.harga) {
        //         return -1
        //     }
        //     return 0
        // }

        // function sortingDsc (a, b) {
        //     if (a.harga > b.harga) {
        //         return -1
        //     }

        //     if (a.harga < b.harga) {
        //         return 1
        //     }
        //     return 0
        // }

        // NOTE
        // BUAT CUSTOM CALLBACK FUNCTION CARA LAIN
        // PAKAI TERNARY OPERATOR
        function Sorting (a, b) {
            if (a.harga > b.harga) {
                return select.value === 'hargakeatas' ? 1 : -1
            }
            if (a.harga < b.harga) {
                return select.value === 'hargakeatas' ? -1 : 1
            }
        }

        if (valueHarga === 'hargakeatas') {
            console.log('asc')
            dataProd.sort(Sorting)
        } else {
            console.log('dsc')
            dataProd.sort(Sorting)
        } 

        // tampilkan ulang produk
        showProd()
    }

    // REVIEW
    function OnBtnSearch () {
        console.log('button search di klik')

        
        // NOTE get value dari input type='search'
        // bisa kyk gini
        // kolomCari = document.getElementById("cari").value
        let kolomCari = document.getElementById("cari").value
        //let valueCari = kolomCari.value
        console.log('value', kolomCari)

        // LAKAI RegEXP == Spy SAAT USER CARI iphone => sudah ada dan ketik ga hrs sm persis kyk yg kita ketik
        /*CARA 1*/ //let reg = new RegExp(`${kolomCari}`, gi)
        /*CARA 2*/ let reg = new RegExp(`${kolomCari}`, 'gi')
        console.log('cari regex', reg)

        // TEST REGEXP
        //console.log(reg.test(dataProd[0].name)) // true kalo keltik ipho lah, iph lah dll karena ada

        // FOR LOOP BUAT REGEXP
        let tabelHasilCari = []
        for (let i = 0; i< dataProd.length; i++) {
            console.log(dataProd[i].name)

            let regresult = reg.test(dataProd[i].name)
            console.log(regresult)
            
            if (regresult) {
                tabelHasilCari.push(dataProd[i])
            }
            console.log('regresult', tabelHasilCari)
        }

        // for (let i = 0; i < dataProd.length; i++) {
        //     if (kolomCari.toLowerCase() === dataProd[i].name.toLowerCase()) {
        //         //console.log('ada nama yg sama')
        //         tabelHasilCari.push(dataProd[i]) //= `
        //         console.log(tabelHasilCari)
        //     } 
        // }
        
        // tampilkan
        let table = document.getElementById("daftarprod")
        //console.log(table)

        let tbody = table.getElementsByTagName("tbody")[0]
        //console.log('tbody', tbody)
        
        let tr = ""
        for (let i = 0; i < tabelHasilCari.length; i++) {
            tr += `<tr>
                <td>${i + 1}</td>
                <td>${tabelHasilCari[i].name}</td>
                <td>
                    <img src = ${tabelHasilCari[i].img} width="60px">
                 </td>
                <td>${tabelHasilCari[i].harga}</td>
                <td>${tabelHasilCari[i].stok}</td>
                <td>
                    
                </td>
             </tr>`
        }

        tbody.innerHTML = tr
        //console.log('tbodyinner', tbody)
    }