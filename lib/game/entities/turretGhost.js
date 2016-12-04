ig.module(
'game.entities.turretGhost'
)
.requires(
	'impact.entity',
	'game.entities.turret'
)
.defines(function(){
	EntityTurretGhost = ig.Entity.extend({
		
		animSheet: new ig.AnimationSheet('media/wizard.png', 16, 16),
	
		places: 'EntityTurret',
		friction: {x: 1500, y: 1500},
		timer: 50,
		
		init: function(x,y,settings){
			this.parent(x,y,settings);
			this.addAnim('idle', 1, [0]);
			this.currentAnim.alpha = .5;
		},
		
		update: function(){
			if(ig.input.state('right')){this.vel.x = 100;}
			if(ig.input.state('left')){this.vel.x = -100;}
			if(ig.input.state('down')){this.vel.y = 100;}
			if(ig.input.state('up')){this.vel.y = -100;}
		
			//kill the placement ghost if another ghost is requested
			//the timer keeps the input state from killing the ghost right away
			if(this.timer < 1)
			{
				if(ig.input.pressed('turret1')||ig.input.pressed('turret2')||ig.input.pressed('turret3'))
				{this.kill();}
			}
			
			if(ig.input.pressed('place'))
			{
				ig.game.spawnEntity(this.places, this.pos.x, this.pos.y);
				this.kill();
			}
			
			
			this.timer --;
			this.parent();
		
		}
	
	});

});