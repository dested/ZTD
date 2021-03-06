using System;

namespace Common
{
    public class TypeOrFunction<T>
    {
        public Action<T> FuncSet { get; set; }
        public Func<T> FuncGet { get; set; }
        public T TypeValue { get; set; }

        public TypeOrFunction(T type)
        {
            TypeValue = type;
        }

        public TypeOrFunction(Func<T> _get, Action<T> _set)
        {
            FuncGet = _get;
            FuncSet = _set;
        }

        public T GetValue()
        {
            if (TypeValue == null && (FuncGet == null && FuncSet == null))
                return default(T);
            if (TypeValue == null && FuncGet != null)
                return FuncGet();
            return TypeValue;
        }
    }
}