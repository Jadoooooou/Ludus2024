class Partie_terminee extends Phaser.Scene {
    constructor() {
        super({ key: "Partie_terminee" });
      }
    
    preload() {
        this.load.image("again","./assets/images/btn_finish.png");
        this.load.image("home","./assets/images/btn_finish.png");
    }

    create() {

        const again = this.add.image(config.width - 10, 10, "again")
        .setPosition(500, 200)
        .setScale(5.5)
        .setOrigin(1, 0);

        again.setInteractive();
        again.on("pointerdown", () => {
            this.scene.start("Jeu");
        });     

        const home = this.add.image(config.width - 10, 10, "home")
        .setPosition(500, 10)
        .setScale(5.5)
        .setOrigin(1, 0);
    
        home.setInteractive();
        home.on("pointerdown", () => {
            this.scene.start("Accueil");
        }); 
    }

    update() {

    }
}