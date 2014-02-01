(function() {
	'use strict';
	var $asm = {};
	global.ZTD = global.ZTD || {};
	global.ZTD.Server = global.ZTD.Server || {};
	global.ZTD.Server.Model = global.ZTD.Server.Model || {};
	ss.initAssembly($asm, 'ZTD.Server');
	////////////////////////////////////////////////////////////////////////////////
	// ZTD.Server.Program
	var $ZTD_Server_$Program = function() {
	};
	$ZTD_Server_$Program.__typeName = 'ZTD.Server.$Program';
	$ZTD_Server_$Program.$main = function() {
	};
	////////////////////////////////////////////////////////////////////////////////
	// ZTD.Server.Model.ServerBoardModel
	var $ZTD_Server_Model_ServerBoardModel = function(boardData) {
		ZTD.Common.Model.BoardModel.call(this, boardData);
		this.sprites = Array.prototype.slice.call(Common.EnumerableExtensions.select(ZTD.Common.Data.SpriteInstanceData, $ZTD_Server_Model_ServerSpriteInstanceModel).call(null, boardData.sprites, function(s) {
			return new $ZTD_Server_Model_ServerSpriteInstanceModel(s);
		}));
	};
	$ZTD_Server_Model_ServerBoardModel.__typeName = 'ZTD.Server.Model.ServerBoardModel';
	global.ZTD.Server.Model.ServerBoardModel = $ZTD_Server_Model_ServerBoardModel;
	////////////////////////////////////////////////////////////////////////////////
	// ZTD.Server.Model.ServerGameModel
	var $ZTD_Server_Model_ServerGameModel = function(gameData) {
		ZTD.Common.Model.GameModel.call(this, gameData);
		this.tiles = Array.prototype.slice.call(Common.EnumerableExtensions.select(ZTD.Common.Data.TileData, $ZTD_Server_Model_ServerTileModel).call(null, gameData.tiles, function(t) {
			return new $ZTD_Server_Model_ServerTileModel(t);
		}));
		this.boards = Array.prototype.slice.call(Common.EnumerableExtensions.select(ZTD.Common.Data.BoardData, $ZTD_Server_Model_ServerBoardModel).call(null, gameData.boards, function(t1) {
			return new $ZTD_Server_Model_ServerBoardModel(t1);
		}));
		this.sprites = Array.prototype.slice.call(Common.EnumerableExtensions.select(ZTD.Common.Data.SpriteData, $ZTD_Server_Model_ServerSpriteModel).call(null, gameData.sprites, function(t2) {
			return new $ZTD_Server_Model_ServerSpriteModel(t2);
		}));
	};
	$ZTD_Server_Model_ServerGameModel.__typeName = 'ZTD.Server.Model.ServerGameModel';
	global.ZTD.Server.Model.ServerGameModel = $ZTD_Server_Model_ServerGameModel;
	////////////////////////////////////////////////////////////////////////////////
	// ZTD.Server.Model.ServerSpriteInstanceModel
	var $ZTD_Server_Model_ServerSpriteInstanceModel = function(spriteInstanceData) {
		ZTD.Common.Model.SpriteInstanceModel.call(this, spriteInstanceData);
	};
	$ZTD_Server_Model_ServerSpriteInstanceModel.__typeName = 'ZTD.Server.Model.ServerSpriteInstanceModel';
	global.ZTD.Server.Model.ServerSpriteInstanceModel = $ZTD_Server_Model_ServerSpriteInstanceModel;
	////////////////////////////////////////////////////////////////////////////////
	// ZTD.Server.Model.ServerSpriteModel
	var $ZTD_Server_Model_ServerSpriteModel = function(spriteData) {
		ZTD.Common.Model.SpriteModel.call(this, spriteData);
	};
	$ZTD_Server_Model_ServerSpriteModel.__typeName = 'ZTD.Server.Model.ServerSpriteModel';
	global.ZTD.Server.Model.ServerSpriteModel = $ZTD_Server_Model_ServerSpriteModel;
	////////////////////////////////////////////////////////////////////////////////
	// ZTD.Server.Model.ServerTileModel
	var $ZTD_Server_Model_ServerTileModel = function(tileData) {
		ZTD.Common.Model.TileModel.call(this, tileData);
	};
	$ZTD_Server_Model_ServerTileModel.__typeName = 'ZTD.Server.Model.ServerTileModel';
	global.ZTD.Server.Model.ServerTileModel = $ZTD_Server_Model_ServerTileModel;
	ss.initClass($ZTD_Server_$Program, $asm, {});
	ss.initClass($ZTD_Server_Model_ServerBoardModel, $asm, {}, ZTD.Common.Model.BoardModel);
	ss.initClass($ZTD_Server_Model_ServerGameModel, $asm, {}, ZTD.Common.Model.GameModel);
	ss.initClass($ZTD_Server_Model_ServerSpriteInstanceModel, $asm, {}, ZTD.Common.Model.SpriteInstanceModel);
	ss.initClass($ZTD_Server_Model_ServerSpriteModel, $asm, {}, ZTD.Common.Model.SpriteModel);
	ss.initClass($ZTD_Server_Model_ServerTileModel, $asm, {}, ZTD.Common.Model.TileModel);
	$ZTD_Server_$Program.$main();
})();
