ig.module(
'game.entities.turretGhost2'
)
.requires(
	'impact.entity',
	'game.entities.turret2',
	'game.entities.turretGhost'
	
)
.defines(function(){
	EntityTurretGhost2 = EntityTurretGhost.extend({
		
		animSheet: new ig.AnimationSheet('media/negawizard.png', 16, 16),
	
		places: 'EntityTurret2'

	
	});

});