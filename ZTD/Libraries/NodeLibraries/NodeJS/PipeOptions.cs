using System;
using System.Runtime.CompilerServices;

namespace NodeLibraries.NodeJS
{
    [Serializable]
    [Imported]
    public class PipeOptions
    {
        public bool? End { get; set; }

        public PipeOptions()
        {
        }

        public PipeOptions(bool? end)
        {
        }
    }
}