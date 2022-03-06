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