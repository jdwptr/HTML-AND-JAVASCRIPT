// ANCHOR
    // CETAK RECEIPT
    function OnBtnPrint () {
        console.log('button cetak diklik')
        let receipt = document.getElementById("bon")

        // cetak receipt
        let output = "<h1>RECEIPT : </h1><br>"
        let total = 0
        for (let i = 0; i < daftarCart.length; i++) {
            output += `${i + 1}. ${daftarCart[i].name} X ${daftarCart[i].quantity} = ${daftarCart[i].total()}<br>`
            total += daftarCart[i].total()
        }

        output += `TOTAL BELANJA : Rp ${total},00` 

        // tampilkan di HTML
        receipt.innerHTML = output

        // disable button delete dan add to cart kalo udah di cetak
        let btnDel = document.getElementsByClassName("deletecart") // HTML COLL
        for (let i = 0; i < btnDel.length; i++) {
            btnDel[i].disabled = true
        }

        let btnCart = document.getElementsByClassName("btnAddCart") // html coll
        // brntuk looping kedua u/ html coll
        for (let item of btnCart) {
            item.disabled = true
        }

        // SHOW CHECKPUT karena di hidden pas awal loading page di hidden
        let money = document.getElementById("uang")
        let cekout = document.getElementById("cekout")
        money.hidden = false
        cekout.hidden = false
    }

    // REVIEW
    function OnBtnCekout () {
        console.log('cekout di klik')
        // get value dr input uang
        let money = document.getElementById("uang") //string
        let uangUser = parseInt(money.value)

        // hitung total belanja
        let totalSemua = 0 // supaya ga undefined, awalnya dikasih 0
        for (let item of daftarCart) {
            totalSemua += item.total()
        }

        // kemnbalian
        let kembali = uangUser - totalSemua

        // bandingkan total dengan uang dari user
        if (uangUser < totalSemua) {
            alert("UANG YANG DIMASUKAN KURANG")
        } else if (isNaN(uangUser)) {
            alert("MASUKAN UANG YANG AKAN DIBAYAR")
        } else if (kembali > 0) {
            alert(`TERIMA KASIH \n KEMBALIAN ANDA : Rp ${kembali},00`)
            reset()
        } else {
            alert('THANK YOU FOR SHOPPING')
            reset()
        }

        // setelah checkout
        // daftarCart = []
        uang.value = ""
    }

    // REVIEW
    function reset () {
        // kosongkan cart
        userCart = []    

        // button di reset
        let btnDel = document.getElementsByClassName("deletecart") // HTML COLL
        let btnCart = document.getElementsByClassName("btnAddCart") // html coll
        let btnCetak = document.getElementById("cetak") 
        btnCetak.disabled = true

        for (let item of btnDel) {
           item.disabled = false
        }

        // brntuk looping kedua u/ html coll
        for (let item of btnCart) {
            item.disabled = false
        }

        // HAPUS RECEIPT
        let receipt = document.getElementById('bon')
        receipt.textContent = 'Receipt :'

        // HIDDEN LAGI BUTTON CHECKOUT & INPUT
        let cekout = document.getElementById("cekout")
        let money = document.getElementById("uang") 
        money.hidden = true
        cekout.hidden = true

        // tampilkan ulang tabel
        showProd()
        showCart()
        
    }