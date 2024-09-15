class Jeu extends Phaser.Scene {
    constructor() {
        super({ key: "Jeu" });
      }
    
    preload() {
        this.load.image("quit","./assets/images/btn_quit.png");
    }

    create() {

        const quit = this.add.image(config.width - 10, 10, "quit")
        .setScale(1.5)
        .setOrigin(1, 0);

        quit.setInteractive();
        quit.on("pointerdown", () => {
            this.scene.start("Accueil");
    });
    }

    update() {

    }
}