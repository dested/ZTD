(function() {
	'use strict';
	var $asm = {};
	global.ZTD = global.ZTD || {};
	global.ZTD.Common = global.ZTD.Common || {};
	global.ZTD.Common.Data = global.ZTD.Common.Data || {};
	global.ZTD.Common.Model = global.ZTD.Common.Model || {};
	ss.initAssembly($asm, 'ZTD.Common');
	////////////////////////////////////////////////////////////////////////////////
	// ZTD.Common.Data.BoardData
	var $ZTD_Common_Data_BoardData = function() {
	};
	$ZTD_Common_Data_BoardData.__typeName = 'ZTD.Common.Data.BoardData';
	$ZTD_Common_Data_BoardData.createInstance = function() {
		return $ZTD_Common_Data_BoardData.$ctor();
	};
	$ZTD_Common_Data_BoardData.$ctor = function() {
		var $this = {};
		$this.bgTiles = null;
		$this.fgTiles = null;
		$this.sprites = null;
		$this.boardWidth = 0;
		$this.boardHeight = 0;
		$this.boardName = null;
		return $this;
	};
	global.ZTD.Common.Data.BoardData = $ZTD_Common_Data_BoardData;
	////////////////////////////////////////////////////////////////////////////////
	// ZTD.Common.Data.GameData
	var $ZTD_Common_Data_GameData = function() {
	};
	$ZTD_Common_Data_GameData.__typeName = 'ZTD.Common.Data.GameData';
	$ZTD_Common_Data_GameData.createInstance = function() {
		return $ZTD_Common_Data_GameData.$ctor();
	};
	$ZTD_Common_Data_GameData.$ctor = function() {
		var $this = {};
		$this.palette = null;
		$this.tiles = null;
		$this.boards = null;
		$this.sprites = null;
		$this.name = null;
		$this.tileWidth = 0;
		$this.tileHeight = 0;
		$this.init = null;
		$this.tick = null;
		return $this;
	};
	global.ZTD.Common.Data.GameData = $ZTD_Common_Data_GameData;
	////////////////////////////////////////////////////////////////////////////////
	// ZTD.Common.Data.SpriteData
	var $ZTD_Common_Data_SpriteData = function() {
	};
	$ZTD_Common_Data_SpriteData.__typeName = 'ZTD.Common.Data.SpriteData';
	$ZTD_Common_Data_SpriteData.createInstance = function() {
		return $ZTD_Common_Data_SpriteData.$ctor();
	};
	$ZTD_Common_Data_SpriteData.$ctor = function() {
		var $this = {};
		$this.palette = null;
		$this.ztDs = null;
		$this.originX = 0;
		$this.originY = 0;
		$this.spriteWidth = 0;
		$this.spriteHeight = 0;
		$this.init = null;
		$this.tick = null;
		$this.destroy = null;
		$this.offload = null;
		$this.collideWithSprite = null;
		$this.collideWithTile = null;
		return $this;
	};
	global.ZTD.Common.Data.SpriteData = $ZTD_Common_Data_SpriteData;
	////////////////////////////////////////////////////////////////////////////////
	// ZTD.Common.Data.SpriteInstanceData
	var $ZTD_Common_Data_SpriteInstanceData = function() {
	};
	$ZTD_Common_Data_SpriteInstanceData.__typeName = 'ZTD.Common.Data.SpriteInstanceData';
	$ZTD_Common_Data_SpriteInstanceData.createInstance = function() {
		return $ZTD_Common_Data_SpriteInstanceData.$ctor();
	};
	$ZTD_Common_Data_SpriteInstanceData.$ctor = function() {
		var $this = {};
		$this.startX = 0;
		$this.startY = 0;
		$this.index = 0;
		return $this;
	};
	global.ZTD.Common.Data.SpriteInstanceData = $ZTD_Common_Data_SpriteInstanceData;
	////////////////////////////////////////////////////////////////////////////////
	// ZTD.Common.Data.TileData
	var $ZTD_Common_Data_TileData = function() {
	};
	$ZTD_Common_Data_TileData.__typeName = 'ZTD.Common.Data.TileData';
	$ZTD_Common_Data_TileData.createInstance = function() {
		return $ZTD_Common_Data_TileData.$ctor();
	};
	$ZTD_Common_Data_TileData.$ctor = function() {
		var $this = {};
		$this.ztDs = null;
		return $this;
	};
	global.ZTD.Common.Data.TileData = $ZTD_Common_Data_TileData;
	////////////////////////////////////////////////////////////////////////////////
	// ZTD.Common.Model.BoardModel
	var $ZTD_Common_Model_BoardModel = function(boardData) {
		this.bgTiles = null;
		this.fgTiles = null;
		this.sprites = null;
		this.boardWidth = 0;
		this.boardHeight = 0;
		this.boardName = null;
		this.bgTiles = boardData.bgTiles;
		this.fgTiles = boardData.fgTiles;
		this.boardWidth = boardData.boardWidth;
		this.boardHeight = boardData.boardHeight;
		this.boardName = boardData.boardName;
	};
	$ZTD_Common_Model_BoardModel.__typeName = 'ZTD.Common.Model.BoardModel';
	global.ZTD.Common.Model.BoardModel = $ZTD_Common_Model_BoardModel;
	////////////////////////////////////////////////////////////////////////////////
	// ZTD.Common.Model.GameModel
	var $ZTD_Common_Model_GameModel = function(gameData) {
		this.palette = null;
		this.tiles = null;
		this.boards = null;
		this.sprites = null;
		this.name = null;
		this.tileWidth = 0;
		this.tileHeight = 0;
		this.init = null;
		this.tick = null;
		this.name = gameData.name;
		this.palette = gameData.palette;
		this.tileWidth = gameData.tileWidth;
		this.tileHeight = gameData.tileHeight;
		this.init = ss.cast(eval(Common.StringExtensions.formatMe(Common.Help.functionFormat, [gameData.init])), Function);
		this.tick = ss.cast(eval(Common.StringExtensions.formatMe(Common.Help.functionFormat, [gameData.tick])), Function);
	};
	$ZTD_Common_Model_GameModel.__typeName = 'ZTD.Common.Model.GameModel';
	global.ZTD.Common.Model.GameModel = $ZTD_Common_Model_GameModel;
	////////////////////////////////////////////////////////////////////////////////
	// ZTD.Common.Model.SpriteInstanceModel
	var $ZTD_Common_Model_SpriteInstanceModel = function(spriteInstanceData) {
		this.startX = 0;
		this.startY = 0;
		this.index = 0;
		this.startX = spriteInstanceData.startX;
		this.startY = spriteInstanceData.startY;
		this.index = spriteInstanceData.index;
	};
	$ZTD_Common_Model_SpriteInstanceModel.__typeName = 'ZTD.Common.Model.SpriteInstanceModel';
	global.ZTD.Common.Model.SpriteInstanceModel = $ZTD_Common_Model_SpriteInstanceModel;
	////////////////////////////////////////////////////////////////////////////////
	// ZTD.Common.Model.SpriteModel
	var $ZTD_Common_Model_SpriteModel = function(spriteData) {
		this.palette = null;
		this.ztDs = null;
		this.originX = 0;
		this.originY = 0;
		this.spriteWidth = 0;
		this.spriteHeight = 0;
		this.init = null;
		this.tick = null;
		this.destroy = null;
		this.offload = null;
		this.collideWithSprite = null;
		this.collideWithTile = null;
		this.palette = spriteData.palette;
		this.ztDs = spriteData.ztDs;
		this.originX = spriteData.originX;
		this.originY = spriteData.originY;
		this.spriteWidth = spriteData.spriteWidth;
		this.spriteHeight = spriteData.spriteHeight;
		this.init = ss.cast(eval(Common.StringExtensions.formatMe(Common.Help.functionFormat, [spriteData.init])), Function);
		this.tick = ss.cast(eval(Common.StringExtensions.formatMe(Common.Help.functionFormat, [spriteData.tick])), Function);
		this.destroy = ss.cast(eval(Common.StringExtensions.formatMe(Common.Help.functionFormat, [spriteData.destroy])), Function);
		this.offload = ss.cast(eval(Common.StringExtensions.formatMe(Common.Help.functionFormat, [spriteData.offload])), Function);
		this.collideWithSprite = ss.cast(eval(Common.StringExtensions.formatMe(Common.Help.functionFormat, [spriteData.collideWithSprite])), Function);
		this.collideWithTile = ss.cast(eval(Common.StringExtensions.formatMe(Common.Help.functionFormat, [spriteData.collideWithTile])), Function);
	};
	$ZTD_Common_Model_SpriteModel.__typeName = 'ZTD.Common.Model.SpriteModel';
	global.ZTD.Common.Model.SpriteModel = $ZTD_Common_Model_SpriteModel;
	////////////////////////////////////////////////////////////////////////////////
	// ZTD.Common.Model.TileModel
	var $ZTD_Common_Model_TileModel = function(tileData) {
		this.ztDs = null;
		this.ztDs = tileData.ztDs;
	};
	$ZTD_Common_Model_TileModel.__typeName = 'ZTD.Common.Model.TileModel';
	global.ZTD.Common.Model.TileModel = $ZTD_Common_Model_TileModel;
	ss.initClass($ZTD_Common_Data_BoardData, $asm, {});
	ss.initClass($ZTD_Common_Data_GameData, $asm, {});
	ss.initClass($ZTD_Common_Data_SpriteData, $asm, {});
	ss.initClass($ZTD_Common_Data_SpriteInstanceData, $asm, {});
	ss.initClass($ZTD_Common_Data_TileData, $asm, {});
	ss.initClass($ZTD_Common_Model_BoardModel, $asm, {});
	ss.initClass($ZTD_Common_Model_GameModel, $asm, {});
	ss.initClass($ZTD_Common_Model_SpriteInstanceModel, $asm, {});
	ss.initClass($ZTD_Common_Model_SpriteModel, $asm, {});
	ss.initClass($ZTD_Common_Model_TileModel, $asm, {});
})();
