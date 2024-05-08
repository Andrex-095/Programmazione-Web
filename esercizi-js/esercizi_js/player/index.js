function Player() {
    let x = 0, y = 0;
    return {
        moveUp: function(){
            y += 1;
        },
        moveDown: function(){
            y -= 1;
        },
        moveLeft: function(){
            x -= 1;
        },
        moveRight: function(){
            x += 1;
        },
        getPosition: function() {
            return [x, y];
        }
    }
}
let player = Player();

player.moveUp();
player.moveUp();
player.moveLeft();