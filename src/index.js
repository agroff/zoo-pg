import Phaser from 'phaser';
import WorldScene from './scenes/world';
import BootScene from './scenes/boot';

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',

    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0,
            },
        },
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 320,
        height: 240,
    },
    scene: [
        BootScene,
        WorldScene,
    ],
};

// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config);
