using System.Html.Media.Graphics;
using ZTD.Common.Data;
using ZTD.Common.Model;

namespace ZTD.Client.Model
{
    public class RenderTileModel : TileModel
    {
        public RenderTileModel(TileData tileData) : base(tileData)
        {
        }

        public void Render(GameModel gameModel,BoardModel boardModel, CanvasRenderingContext2D canvas)
        {

            canvas.FillRect();
        }
    }
}