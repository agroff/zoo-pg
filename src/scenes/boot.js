import Phaser from 'phaser';
import tilesAsset from '../assets/map/spritesheet.png';
import mapAsset from '../assets/map/map.json';
import playerAsset from '../assets/character.png';

const BootScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize: function BootScene() {
        Phaser.Scene.call(this, {
            key: 'BootScene',
        });
    },

    preload() {
        // map tiles
        this.load.image('tiles', tilesAsset);
        // this.load.image('tiles', 'assets/map/spritesheet.png');

        // map in json format
        this.load.tilemapTiledJSON('map', mapAsset);
        // this.load.tilemapTiledJSON('map', 'assets/map/map.json');

        // our two characters
        this.load.spritesheet('player', playerAsset, {
            // this.load.spritesheet('player', 'assets/character.png', {
            frameWidth: 16,
            frameHeight: 16,
        });
    },

    create() {
        this.scene.start('WorldScene');
    },
});

export default BootScene;
