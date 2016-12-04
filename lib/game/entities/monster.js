ig.module(
	'game.entities.monster'
)
.requires(
	'impact.entity'
)
.defines(function(){
	
	EntityMonster = ig.Entity.extend({
		animSheet: new ig.AnimationSheet('media/goblin.png', 16, 16),
		size: {x: 8, y:14},
		offset: {x: 4, y: 2},
		maxVel: {x: 100, y: 100},
		flip: false,
		yflip: false,
		friction: {x: 150, y: 0},
		speed: 14,
		ymod: .5,
		bounciness: .4,
		minBounceVelocity: 0,
		
		//collision info
		type: ig.Entity.TYPE.A,
		checkAgainst: ig.Entity.TYPE.B,
		collides: ig.Entity.COLLIDES.ACTIVE,
		
		//runs into another monster, turn around
		check: function(other)
		{
			this.flip = !this.flip;
			this.yflip = !this.yflip;
		},
		
		
		init: function( x, y, settings ) {
			this.parent( x, y, settings );
			this.addAnim('walk', .1, [4,5]);
			//add variation by making their vertical trajectory semi random
			this.ymod += Math.random();
			//accelleration down and right helps them move toward the goal easier
			this.accel.y = 10;
			this.accel.x = 5;
		},
	
	    update: function() {
		
			var xdir = 1;
			var ydir = 1;
			if (this.flip) {xdir = -1};
			if (this.yflip) {ydir = -1};
			this.vel.x = this.speed * xdir;
			this.vel.y = this.speed * ydir * this.ymod;
			this.currentAnim.flip.x = this.flip;
			this.parent();
		},
		handleMovementTrace: function( res ) {
			this.parent( res );
			// collision with a wall causes reflection
			if( res.collision.x ) {
				this.flip = !this.flip;
			}
			if( res.collision.y ){ this.yflip = !this.yflip;}
			
		},
		});
	}); 