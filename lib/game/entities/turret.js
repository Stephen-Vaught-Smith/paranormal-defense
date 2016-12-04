ig.module(
'game.entities.turret'
)
.requires(
	'impact.entity',
	'game.entities.bullet'
)
.defines(function(){
	EntityTurret = ig.Entity.extend({
		
		animSheet: new ig.AnimationSheet('media/wizard.png', 16, 16),
	
		cooldown: 300,
		timer: 0,
		checkAgainst: ig.Entity.TYPE.BOTH,
		spawns: 'EntityBullet',
		
		init: function(x,y,settings){
			this.parent(x,y,settings);
			this.addAnim('casting', .5, [0,1]);
			this.timer = this.cooldown;
			
		},
		
		update: function(){
			
			if(this.timer < 1)
			{
				this.currentAnim = this.anims.casting;
				this.timer = this.cooldown;
				ig.game.spawnEntity(this.spawns, this.pos.x, this.pos.y);
			}
			
			
			this.timer --;
			this.parent();
		
		},
		
		check: function(other){
			if(other instanceof EntityMonster){this.receiveDamage(10, other);}
		}
	
	});

});