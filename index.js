/**
 *  Problem  1 - Analysis 
 * 
 * 
 *  Analisa [1]
 * 
 *  Penamaan dua buah class pada gambar diawali dengan huruf kecil , karena di javascript setiap nama class 
 *  harus di awali huruf besar .
 * 
 *  class User { };
 *  class UserService { };
 *
 *  -----------------------------------------------------------------------------------------------------------------------
 *
 *  Analisa [2]
 * 
 *  Di dalam class user terdapat deklarasi variabel yang mana jika ini dilakukan akan menyebabkan error , 
 *  seharusnya variabel tersebut di deklarasikan di dalam constructor function sebagai properti class dengan menggunakan 
 *  keyword this.
 * 
 * 
 *  constructor () {
 *      this.id;
 *      this.username;
 *      this.password;
 *  }
 *
 * 
 *  Namun jika kita ingin melakukan passing sebuah argumen ketika objek baru di inisialisasi dari class tersebut , 
 *  kita dapat meletakan parameter di function constructor 
 * 
 * 
 *  constructor (userID, _username, _password) {
 *      this.id = userID;
 *      this.username = _username;	
 *      this.password = _password;
 *  }
 *
 * -----------------------------------------------------------------------------------------------------------------------
 * 
 *  Analisa [3]
 * 
 *  Di dalam class userservice terdapat kesalahan dalam pendeklarasian variabel users , seharusnya variabel 
 *  tersebut dideklarasikan sebagai properti dengan keyword this dan berada di dalam constructor function.
 *  
 * 
 *  constructor () {
 *      this.users = [];
 *  }
 *
 * 
 *  Begitu juga dengan method  getallusers() getuserbyid() , kedua method tidak menerapkan standar penulisan pada javascript , 
 *  karena pada javascript untuk membuat nama function atau method harus menggunakan camel case  dan pada saat pendefinisian 
 *  method di dalam class hanya perlu menggunakan nama function saja.
 * 
 *  
 *  constructor () {
 *      this.users = [];
 *  }
 *
 *  getAllUsers () {
 *       . . .
 *  }
 *   
 *  getUserById () {
 *       . . .
 *  }
 * 
 * */ 






/* Problem 2 - Rewrite */


class Kendaraan {

    constructor(roda) {
        this.totalRoda = roda;
        this.kecepatanPerJam = 0;
    }

    tambahKecepatan(speed = 10) {
        this.kecepatanPerJam += speed;
        return this;
    }

    kurangiKecepatan(speed = 10){
        if(this.kecepatanPerJam >= speed) this.kecepatanPerJam -= speed;
        return this;
    }

    get kecepatan(){
        console.log(`${this.kecepatanPerJam} KM/H`);
    }

}

class Mobil extends Kendaraan{

    constructor(nama,tipe,roda){
        super(roda);
        this._nama = nama;
        this._tipe = tipe;
    }

    klakson(){
        console.log("Tin tin tin...")
    }

}



/* Instance */


const mobilCepat = new Mobil("Pajero Sport", "SUV", 4);

mobilCepat
.tambahKecepatan()
.tambahKecepatan()
.tambahKecepatan()


const mobilLamban = new Mobil("Suzuki SX4", "Crossover",4)

mobilLamban.tambahKecepatan()