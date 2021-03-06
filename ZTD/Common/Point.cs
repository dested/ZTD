using System.Runtime.CompilerServices;

namespace Common
{
    public class Point
    {
        [IntrinsicProperty]
        public double X { get; set; }

        [IntrinsicProperty]
        public double Y { get; set; }

        public Point(double x, double y)
        {
            X = x;
            Y = y;
        }
    }
}