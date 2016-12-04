ig.module(
	'game.entities.cyclops'
)
.requires(
	'impact.entity',
	'game.entities.monster'
)
.defines(function(){
	EntityCyclops = EntityMonster.extend({
		animSheet: new ig.AnimationSheet ('media/cyclops.png', 16, 16),
		speed: 6,
		health: 20
	});
	
});