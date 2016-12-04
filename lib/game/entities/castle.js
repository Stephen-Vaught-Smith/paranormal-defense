ig.module(
	'game.entities.castle'
)
.requires(
	'impact.entity'
)
.defines(function(){
//invisible box at end of level that detects when a monster gets past the player
    EntityCastle = ig.Entity.extend({
        _wmDrawBox: true,
        _wmBoxColor: 'rgba(0, 0, 255, 0.7)',
        size: {x: 8, y: 48},
        level: null,
        checkAgainst: ig.Entity.TYPE.BOTH,
        update: function(){}, // it just sits there
        check: function( other ) {
        	if(other instanceof EntityMonster)
			{
        		other.kill();
        	}
        }
    });
});
