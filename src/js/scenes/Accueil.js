class Accueil extends Phaser.Scene {
    constructor() {
        super({ key: "Accueil" });
      }
    
    preload() {
        this.load.image("start","./assets/images/btn_start.png");
        this.load.image("credits","./assets/images/btn_credits.png");
        this.load.image("how","./assets/images/btn_credits.png");
        this.load.image("sound","./assets/images/btn_sound.png");
    }

    create() {

        const start = this.add.image(config.width - 10, 10, "start")
        .setPosition(500, 200)
        .setScale(5.5)
        .setOrigin(1, 0);

        start.setInteractive();
        start.on("pointerdown", () => {
            this.scene.start("Jeu");
        });     

        const credits = this.add.image(config.width - 10, 10, "credits")
        .setPosition(700, 10)
        .setScale(2)
        .setOrigin(1, 0);
    
        credits.setInteractive();
        credits.on("pointerdown", () => {
            this.scene.start("Credits");
        });    

        const how = this.add.image(config.width - 10, 10, "how")
        .setPosition(600, 10)
        .setScale(2)
        .setOrigin(1, 0);
    
        how.setInteractive();
        how.on("pointerdown", () => {
            this.scene.start("Comment_jouer");
        });   
        
        const sound = this.add.image(config.width - 10, 10, "sound")
        .setPosition(100, 10)
        .setScale(5)
        .setOrigin(1, 0);
    
        //sound.setInteractive();
        //sound.on("pointerdown", () => {
        //    this.scene.start("");
        //});   
    }

    update() {

    }
}