const config = {
    type: Phaser.AUTO,
    transparent: true,
    width: 800,
    height: 600,
    scene: [Accueil, Jeu, Comment_jouer, Credits, Partie_terminee, Victoire]
};
const game = new Phaser.Game(config);