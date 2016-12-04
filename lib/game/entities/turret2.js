ig.module(
'game.entities.turret2'
)
.requires(
	'impact.entity',
	'game.entities.bullet2',
	'game.entities.turret'
)
.defines(function(){
	EntityTurret2 = EntityTurret.extend({
		
		animSheet: new ig.AnimationSheet('media/negawizard.png', 16, 16),
	
		spawns:  'EntityBullet2'
	
	});

});