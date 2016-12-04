ig.module(
	'game.entities.spawner'
)
.requires(
	'impact.entity',
	'game.entities.skeleton',
	'game.entities.monster',
	'game.entities.cyclops'
)
.defines(function(){
	//an entity that persists and spaces out the spawning of a wave

	EntitySpawner = ig.Entity.extend({
		
		goblins: 2,
		skeletons: 2,
		cyclopses: 1,
		timer: 0,
		init: function(){
			console.log("spawner made");
		},
		update: function(){
			this.timer++;
			if (this.timer>100){
				if (this.cyclopses > 0){
					ig.game.spawnEntity(EntityCyclops, 16, 48);
					this.cyclopses --;
				}
				else if (this.skeletons > 0){
					ig.game.spawnEntity(EntitySkeleton, 16, 48);
					this.skeletons --;
				}
				else if (this.goblins >0){
				ig.game.spawnEntity(EntityMonster, 16, 48);
				this.goblins--;
				}
				this.timer =0;
			}
			if (this.goblins < 1){
				this.kill();
			}
			
		}
		
	});

});