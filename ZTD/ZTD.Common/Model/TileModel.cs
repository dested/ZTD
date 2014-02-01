using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using ZTD.Common.Data;

namespace ZTD.Common.Model
{
    public abstract class TileModel
    {
        public TileModel(TileData tileData)
        {
            ZTDs = tileData.ZTDs;
        }
        [IntrinsicProperty]

        public List<int> ZTDs { get; set; }
    }
}