import Phaser from 'phaser';

const WorldScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize: function WorldScene() {
        Phaser.Scene.call(this, {
            key: 'WorldScene',
        });
    },

    preload() {

    },

    create() {
        const map = this.make.tilemap({
            key: 'map',
        });
        const tiles = map.addTilesetImage('spritesheet', 'tiles');


        // eslint-disable-next-line no-unused-vars
        const grass = map.createStaticLayer('Grass', tiles, 0, 0);
        const obstacles = map.createStaticLayer('Obstacles', tiles, 0, 0);
        obstacles.setCollisionByExclusion([-1]);

        this.player = this.physics.add.sprite(50, 100, 'player', 6);
        this.physics.world.bounds.width = map.widthInPixels;
        this.physics.world.bounds.height = map.heightInPixels;
        this.player.setCollideWorldBounds(true);

        this.cursors = this.input.keyboard.createCursorKeys();
    },

    // eslint-disable-next-line no-unused-vars
    update(time, delta) {
        this.player.body.setVelocity(0);

        // Horizontal movement
        if (this.cursors.left.isDown) {
            this.player.body.setVelocityX(-80);
        } else if (this.cursors.right.isDown) {
            this.player.body.setVelocityX(80);
        }

        // Vertical movement
        if (this.cursors.up.isDown) {
            this.player.body.setVelocityY(-80);
        } else if (this.cursors.down.isDown) {
            this.player.body.setVelocityY(80);
        }
    },

});

export default WorldScene;
