using Common;
using ZTD.Common.Data;
using ZTD.Common.Model;

namespace ZTD.Server.Model
{
    public class ServerBoardModel : BoardModel
    {
        public ServerBoardModel(BoardData boardData)
            : base(boardData)
        {
            Sprites = boardData.Sprites.Select(s => new ServerSpriteInstanceModel(s)).ToArray();

        }
         
    }
}