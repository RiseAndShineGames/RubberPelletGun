"use strict";

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
    ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
        var velocity = game.entities.get(entity, "velocity");
        var position = game.entities.get(entity, "position");
        var size = game.entities.get(entity, "size");
        if (position.x <= 0 || position.x + size.width >= game.canvas.width) {
            velocity.x = -velocity.x;
        }
        if (position.y <= 0 || position.y + size.height >= game.canvas.height) {
            velocity.y = -velocity.y;
        }
    }, "bullet");
};
