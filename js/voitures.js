 

class  vehicule{

	constructor(){
		this.name = " vehicule";		
	}
}

 class voiture extends vehicule {

	constructor(name,portes,puissance){ 
		super();		
		this.name = name;
		this.roues =  4;
		this.portes = portes;		
		this.moteur = {
			puissance : puissance,
			marche : false
		};
	}
	
	contact(){
		console.log("on allume le contact");
		this.allumerlesvoyants();	
	}	

	allumerlesvoyants(){
		console.log("les voyants s'allument");
	}

	demarre(){
		console.log("demarre le moteur");
		this.moteur.marche = true;
	}
	
	coupe(){
		console.log("on coupe le moteur");
		this.moteur.marche = false;	
	}

}


 class sportive extends voiture{
	
	constructor(name){
		super(name, 3, 450);
	}
}

class camion extends voiture{
	
	constructor(name,roues){
		super(name,2,200);
		this.roues = roues;

	}

}


class DeuxRoues extends vehicule{
	constructor(name){
		super();
		this.name = name;
		this.roues = 2;
		this.portes =0

	}
}

let energyTypeMoteur = {
	thermique: "thermique",
	electrique: "electrique",
	mecanique : "mecanique"
};

class Moteur extends DeuxRoues{
	constructor(name,energy){
		super(name);
		this.energy = energy;

	}


}


const test_voiture = () => {
	
	  console.log("test vehicule");
	
	 let mavoiture = new sportive("ferrari");
	
	 console.log(mavoiture.moteur);
	
	 mavoiture.contact();
	 mavoiture.demarre();



};

const test_scooter = () => {

	console.log("test scooter");
	
	let scooter = new Moteur("yamaha",energyTypeMoteur.thermique);
	console.log(scooter.energy);
	console.log(scooter);

}





 

