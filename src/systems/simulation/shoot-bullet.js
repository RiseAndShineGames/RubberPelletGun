"use strict";

function normalize(x, y, pos) {

    var d = Math.sqrt((pos.x - x) * (pos.x - x) + (pos.y - y) * (pos.y - y)); 
    return {
        "x": (x - pos.x) / d,
        "y": (y - pos.y) / d
    };

}

function getCenter(game, entity) {
    var pos = game.entities.get(entity, "position");
    var size = game.entities.get(entity, "size");
    return {
        "x": pos.x + size.width / 2,
        "y": pos.y + size.height / 2
    };
}

module.exports = function(ecs, game) { // eslint-disable-line no-unused-vars
    ecs.addEach(function(entity, elapsed) { // eslint-disable-line no-unused-vars
        if (game.inputs.buttonPressed("shoot")) {
            var bullet = game.instantiatePrefab("bullet");
            var center = getCenter(game,entity);
            var uv = normalize(game.inputs.axis("mouseX"), game.inputs.axis("mouseY"), center);
            var speed = game.entities.get(bullet, "speed");
            game.entities.set(bullet, "position", center);
            game.entities.set(bullet, "velocity", { "x": uv.x * speed, "y": uv.y * speed });
        }
    }, "player");
};
