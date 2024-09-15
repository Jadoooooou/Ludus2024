class Credits extends Phaser.Scene {
    constructor() {
        super({ key: "Credits" });
      }
    
    preload() {
        this.load.image("close","./assets/images/close.png");
    }

    create() {

        const close = this.add.image(config.width - 10, 10, "close")
        .setScale(1.5)
        .setOrigin(1, 0);

        close.setInteractive();
        close.on("pointerdown", () => {
            this.scene.start("Accueil");
    });
    }

    update() {

    }
}