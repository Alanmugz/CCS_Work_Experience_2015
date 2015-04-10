namespace TestSuite

open System
open NUnit.Framework
open Swensen.Unquote

[<TestFixture>]
type TestClass() =
    
//    [<Test>]
//    member this.``2+2 = 4``() =
//        test <@ 2 + 2 = 4 @>
//
//    [<Test>]
//    member this.``(1+2)/3 = 1`` () = 
//        test <@ (1+2)/3 = 2 @>
//
//    [<Test>]
//    member this.``Sequence {1 .. 10} Sum = 55`` () = 
//        let aSeq = {1 .. 10}
//        let expected = 55
//        let result = Example.Code.sumSeq aSeq
//
//        test <@ expected = result @>
//
//    [<Test>]
//    member this.``Sequence {1 .. 10} Sum = 55 Other`` () = 
//        let aSeq = {1 .. 10}
//
//        test <@ Example.Code.sumSeq aSeq = 54 @>
//
//    [<Test>]
//    member this.``demo Unquote 1`` () =
//        test <@ ([3; 2; 1; 0] |> List.map ((+) 1)) = [1 + 3..1 + 0] @>
//
//    [<Test>]
//    member this.``demo Unquote 2`` () =
//        raises<exn> <@ (null:string).Length @>
//
//    [<Test>]
//    member this.``demo Unquote 3`` () =
//        raises<NullReferenceException> <@ (null:string).Length @>
//        
//    [<Test>]
//    member this.``demo Unquote 4`` () =
//        raises<System.ArgumentException> <@ (null:string).Length @>
//        
//    [<Test>]
//    member this.``demo Unquote 5`` () =
//        raisesWith<System.NullReferenceException> <@ (null:string).Length @> (fun e -> <@ e.ToString() = null @>)
//        
//    [<Test>]
//    member this.``demo Unquote 6`` () =
//        let value = decompile <@ (1+2)/3 @>
//        printfn "%s" value
//        
//    [<Test>]
//    member this.``demo Unquote 7`` () =
//        let value = <@ (1+2)/3 @> |> reduce |> decompile
//        printfn "%s" value
//
//    member this.``demo Unquote 8`` () =
//        let value = decompile <@ (1+2)/3 @>
//        printfn "%s" value
//        
//    [<Test>]
//    member this.``demo Unquote 9`` () =
//        let value = <@ (1+2)/3 @> |> reduceFully |> List.map decompile
//        printfn "%s" (value.ToString())
//        
//    [<Test>]
//    member this.``demo Unquote 10`` () =
//        let value = unquote <@ (1+2)/3 @>
//        printfn "%O" value

    [<Test>]
    member this.``demo Unquote 11``() =
        let aList = [1;10;5]
        //test <@ Example.Code.sumAList aList = 6 @>
        let value = <@ List.reduce (fun acc elem -> acc * elem) aList = 50 @> |> reduceFully |> List.map decompile
        printfn "%O" value

    [<Test>]
    member this.``demo Unquote 12``() =
        let aList = [1]
        //test <@ Example.Code.sumAList aList = 6 @>
        let value = decompile<@ Example.Code.sumAList aList = 24 @>
        printfn "%O" value
