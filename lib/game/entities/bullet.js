ig.module(
'game.entities.bullet'
)
.requires(
	'impact.entity'
)
.defines(function(){
	EntityBullet = ig.Entity.extend({
		
		animSheet: new ig.AnimationSheet('media/bullet.png', 7,7),
		timer:200,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.ACTIVE,
		
		init: function(x,y,settings){
			this.parent(x,y,settings);
			this.addAnim('idle', 1, [0]);
			this.accel.x = -20;
			this.accel.y = (Math.random()-.5)*10;
			
			
		},
		
		update: function(){
			
			if(this.timer < 1)
			{
				this.kill();
			}
			this.timer--;
			
			
			this.parent();
		
		},
		
		check: function(other){
			other.receiveDamage(10, this);
			this.kill();
		}
	
	});

});