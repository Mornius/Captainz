    // player ship
    function Ship(ship_sprite) {

        this.sprite = ship_sprite;
        this.body = this.sprite.body;
        this.body.collideWorldBounds = true;
        this.body.damping = 0.3;
        this.speed = 0;

        this.turn = function (direction) {
            switch (direction) {
                case 1:
                    this.body.rotateRight(20); break;
                case -1:
                    this.body.rotateLeft(20); break;
                default:
                    this.body.setZeroRotation();
            }
        }

        this.accelerate = function (increment) {
            switch (increment) {
                case 1:
                    this.body.thrust(60); break;
                case -1:
                    this.body.reverse(60); break;
                default:
            }
        }
        this.update = function () {
            this.speed = Math.sqrt((this.body.velocity.x * this.body.velocity.x) + (this.body.velocity.y * this.body.velocity.y));
        }

        debug ? d('Ship initialised..') : null;

    };