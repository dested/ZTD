using System.Runtime.CompilerServices;

namespace WebLibraries.UglifyJS
{
    [NamedValues]
    public enum NodeType
    {
        [PreserveCase] Statement,
        [PreserveCase] Debugger,
        [PreserveCase] Directive,
        [PreserveCase] SimpleStatement,
        [PreserveCase] Block,
        [PreserveCase] BlockStatement,
        [PreserveCase] Scope,
        [PreserveCase] Toplevel,
        [PreserveCase] Lambda,
        [PreserveCase] Accessor,
        [PreserveCase] Function,
        [PreserveCase] Defun,
        [PreserveCase] Switch,
        [PreserveCase] SwitchBranch,
        [PreserveCase] Default,
        [PreserveCase] Case,
        [PreserveCase] Try,
        [PreserveCase] Catch,
        [PreserveCase] Finally,
        [PreserveCase] EmptyStatement,
        [PreserveCase] StatementWithBody,
        [PreserveCase] LabeledStatement,
        [PreserveCase] DWLoop,
        [PreserveCase] Do,
        [PreserveCase] While,
        [PreserveCase] For,
        [PreserveCase] ForIn,
        [PreserveCase] With,
        [PreserveCase] If,
        [PreserveCase] Jump,
        [PreserveCase] Exit,
        [PreserveCase] Return,
        [PreserveCase] Throw,
        [PreserveCase] LoopControl,
        [PreserveCase] Break,
        [PreserveCase] Continue,
        [PreserveCase] Definitions,
        [PreserveCase] Var,
        [PreserveCase] Const,
        [PreserveCase] VarDef,
        [PreserveCase] Call,
        [PreserveCase] New,
        [PreserveCase] Seq,
        [PreserveCase] PropAccess,
        [PreserveCase] Dot,
        [PreserveCase] Sub,
        [PreserveCase] Unary,
        [PreserveCase] UnaryPrefix,
        [PreserveCase] UnaryPostfix,
        [PreserveCase] Binary,
        [PreserveCase] Assign,
        [PreserveCase] Conditional,
        [PreserveCase] Array,
        [PreserveCase] Object,
        [PreserveCase] ObjectProperty,
        [PreserveCase] ObjectKeyVal,
        [PreserveCase] ObjectSetter,
        [PreserveCase] ObjectGetter,
        [PreserveCase] Symbol,
        [PreserveCase] SymbolAccessor,
        [PreserveCase] SymbolDeclaration,
        [PreserveCase] SymbolVar,
        [PreserveCase] SymbolFunarg,
        [PreserveCase] SymbolConst,
        [PreserveCase] SymbolDefun,
        [PreserveCase] SymbolLambda,
        [PreserveCase] SymbolCatch,
        [PreserveCase] Label,
        [PreserveCase] SymbolRef,
        [PreserveCase] LabelRef,
        [PreserveCase] This,
        [PreserveCase] Constant,
        [PreserveCase] String,
        [PreserveCase] Number,
        [PreserveCase] RegExp,
        [PreserveCase] Atom,
        [PreserveCase] Null,
        [PreserveCase] NaN,
        [PreserveCase] Undefined,
        [PreserveCase] Hole,
        [PreserveCase] Infinity,
        [PreserveCase] Boolean,
        [PreserveCase] False,
        [PreserveCase] True,
    }
}