ig.module(
	'game.entities.skeleton'
)
.requires(
	'impact.entity',
	'game.entities.monster'
)
.defines(function(){
	EntitySkeleton = EntityMonster.extend({
		animSheet: new ig.AnimationSheet ('media/skeleton.png', 16, 16),
		speed: 20
	});
	
});