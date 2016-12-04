ig.module(
'game.entities.bullet2'
)
.requires(
	'impact.entity',
	'game.entities.bullet',
	'game.entities.turret'
)
.defines(function(){
	EntityBullet2 = EntityBullet.extend({
		
		animSheet: new ig.AnimationSheet('media/negabullet.png', 7, 7),
			init: function(x,y,settings){
			this.parent(x,y,settings);
			this.addAnim('idle', 1, [0]);
			this.accel.x = 20;
			this.accel.y = (Math.random()-.5)*10;
			
			
		},
	});

});