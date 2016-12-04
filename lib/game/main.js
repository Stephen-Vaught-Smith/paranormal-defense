ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	'game.levels.maze',
	'impact.debug.debug',
	'game.entities.spawner',
	'game.entities.turretGhost',
	'game.entities.turretGhost2'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	frameCounter: 0,
	waveCounter: 0,
	waveConfig:
	[
		[4, 0, 0],
		[4, 1, 0],
		[4, 2, 0],
		[2, 2, 1],
		[4, 3, 1],
		[6, 4, 1],
		[4, 2, 2],
		[6, 3, 2],
		[8, 4, 2],
		[6, 2, 2]
	],

	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	
	
	init: function() {
		
		//keybindings
		ig.input.bind(ig.KEY.W, 'up' );
		ig.input.bind(ig.KEY.A, 'left' );
		ig.input.bind(ig.KEY.S, 'down' );
		ig.input.bind(ig.KEY.D, 'right' );
		
		ig.input.bind(ig.KEY.SPACE, 'place' );
		
		ig.input.bind(ig.KEY._1, 'turret1' );
		ig.input.bind(ig.KEY._2, 'turret2' );
		ig.input.bind(ig.KEY._3, 'turret3' );
		
		
		this.loadLevel( LevelMaze );
	
	},
	
	update: function() {
		//every 200 frames, check to see if we spawn the next wave
		this.frameCounter ++;
		if (this.frameCounter > 200)
		{
			this.frameCounter = 0;
			
			var alive = this.getEntitiesByType( EntityMonster);
			if (alive.length < 1)
			{
				if (this.waveCounter > 9)
				{
					
				}
				var whatmonster = this.waveConfig[this.waveCounter];
				this.waveCounter ++;
				var nextWave = ig.game.spawnEntity(EntitySpawner, 0, 0);
				nextWave.goblins = whatmonster[0];
				nextWave.skeletons = whatmonster[1];
				nextWave.cyclopses = whatmonster[2];
				console.log("spawning");
			}
		}
		
		if (ig.input.pressed('turret1')){ig.game.spawnEntity(EntityTurretGhost, 400, 240);}
		if (ig.input.pressed('turret2')){ig.game.spawnEntity(EntityTurretGhost2, 400, 240);}
	
		this.parent();
		
		
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		
		
		
	
		
	}
	
	
});


// Start the Game 
ig.main( '#canvas', MyGame, 60, 480, 320, 2 );

});
