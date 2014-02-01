using System;
using System.Collections.Generic;

namespace ZTD.Common.Data
{
    [Serializable]
    public class SpriteData
    {
        public string Palette { get; set; }
        public List<int> ZTDs { get; set; }
        public int OriginX { get; set; }
        public int OriginY { get; set; }
        public int SpriteWidth { get; set; }
        public int SpriteHeight { get; set; }
        public string Init { get; set; }
        public string Tick { get; set; }
        public string Destroy { get; set; }
        public string Offload { get; set; }
        public string CollideWithSprite { get; set; }
        public string CollideWithTile { get; set; }
    }
}