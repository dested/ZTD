﻿using System.Runtime.CompilerServices;

namespace Common
{
    public static class Help
    {
        public static string FunctionFormat = "(function(){{{0}}})";

        public static T CleanUp<T>(this T o)
        {
            return Json.Parse<T>(Json.Stringify(o, Sanitize));
        }

        public static object Sanitize(string name, object value)
        {
            if (isFunction(value)) return null;
            if ((name.IndexOf('_') != 0 || name == "_id") && name.ToLowerCase() != "socket" && name.ToLowerCase() != "fiber" && name.ToLowerCase() != "debuggingsocket") return value;
            return null;
        }

        [InlineCode("typeof value == 'function'")]
        private static bool isFunction(object value)
        {
            return false;
        }
    }
}