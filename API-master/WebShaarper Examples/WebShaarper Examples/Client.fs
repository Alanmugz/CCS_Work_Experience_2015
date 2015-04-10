namespace WebShaarper_Examples

open WebSharper
open WebSharper.JavaScript
open WebSharper.Html.Client

module Client =

    [<JavaScript>]
    module HelloWorld =

        let Main () =
            let welcome = P [Text "Welcome"]
            Div [
                welcome
                Button [Text "Click Me!"]
                |>! OnClick (fun e args ->
                    welcome.Text <- "Hello, world!")
            ]

    [<JavaScript>]
    module Calculation =

        let rec Fact1 n =
            match n with
            | n when n < 2 -> 1
            | n -> n * Fact1 (n - 1)

        let Fact2 n = Array.fold ( * ) 1  [| 1 .. n |]

        let Main () =
            let input = Input [Attr.Type "text"]
            let output = Pre []
            let button =
                Input [Attr.Type "button"; Attr.Value "Factorial"]
                |>! OnClick (fun e args ->
                    let v = int input.Value
                    let msg =
                        "Fact1 = "
                        + string (Fact1 v)
                        + ". Fact2 = "
                        + string (Fact2 v)
                    output.Text <- msg)
            Div [
                input
                button
                output
            ]

    [<JavaScript>]
    module Calculator =

        let Main ()  =

            let (onum, num, op) =
                (ref 0, ref 0, ref None)

            let display = Input [Attr.Type "Text"; Attr.Value "0"]

            let updateDisplay () = display.Value <- string !num

            let D n =
                num := 10 * !num + n
                updateDisplay ()

            let C () =
                num := 0
                updateDisplay()

            let AC () =
                num  := 0
                onum := 0
                op   := None
                updateDisplay ()

            let N () =
                num := - !num
                updateDisplay ()

            let E () =
                match !op with
                | None ->
                    ()
                | Some f ->
                    num := f !onum !num
                    op  := None
                    updateDisplay ()

            let O o () =
                match !op with
                | None ->
                    ()
                | Some f ->
                    num := f !onum !num
                    updateDisplay ()
                onum := !num
                num  := 0
                op   := Some o

            let btn caption action =
                Button [Attr.Style "width:30px"] -< [Text caption]
                |>! OnClick (fun e _ -> action ())

            let digit n =
                btn (string n) (fun () -> D n)

            Div [
                display
                Br []
                Div [
                    digit 7; digit 8; digit 9; btn "/" (O ( / ))
                    Br []
                    digit 4; digit 5; digit 6; btn "*" (O ( * ))
                    Br []
                    digit 1; digit 2; digit 3; btn "-" (O ( - ))
                    Br []
                    digit 0; btn "C" C; btn "AC" AC; btn "+" (O ( + ));
                    Br []
                    btn "+/-" N; btn "=" E
                ]
            ]

    [<JavaScript>]
    module CanvasAnimation =

        // Since IE does not support canvas natively. Initialization of the 
        // canvas element is done through the excanvas.js library.
        [<Inline "G_vmlCanvasManager.initElement($elem)">]
        let Initialize (elem: CanvasElement) : unit = ()

        let AnimatedCanvas draw width height caption =
            let element = Canvas []
            let canvas  = As<CanvasElement> element.Dom
            // Conditional initialization for the case of IE.
            if (JS.Get "getContext" canvas = JS.Undefined) then
                Initialize canvas
            
            canvas.Width  <- width
            canvas.Height <- height
            let ctx = canvas.GetContext "2d"
            let rec loop =
                async {
                    do! Async.Sleep 1000
                    do draw ctx
                    return! loop
                }
            draw ctx
            Async.Start loop
            Div [ Width (string width); Attr.Style "float:left;"] -< [
                Div [ Attr.Style "float:center" ] -< [
                    element
                    P [Attr.Style "float:center; position:relative; top:-280px; left:163px; z-index:-1;"] -< [
                        I [Img [Src "data:image/png;base64,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"]]
                    ]
                ]
            ]

        let Main () =
            let example1 (ctx: CanvasRenderingContext2D) =
                let now = new Date()
                ctx.Save()
                ctx.ClearRect(0., 0., 1050., 1050.)
                ctx.Translate(300., 300.)
                ctx.Scale(1.9, 1.9)
                ctx.Rotate(- Math.PI / 2.)
                ctx.StrokeStyle <- "black"
                ctx.FillStyle <- "white"
                ctx.LineWidth <- 8.
                ctx.Save()

                // Hour marks
                for i in 1..12 do
                    ctx.BeginPath()
                    ctx.Rotate(Math.PI / 6.)
                    ctx.MoveTo(100., 0.)
                    ctx.LineTo(120., 0.)
                    ctx.Stroke()
                ctx.Restore()

                // Minute marks
                ctx.Save()
                ctx.LineWidth <- 5.
                for i in 0 .. 59 do
                    if (i % 5) <> 0 then
                        ctx.BeginPath()
                        ctx.MoveTo(117., 0.)
                        ctx.LineTo(120., 0.)
                        ctx.Stroke()
                    ctx.Rotate(System.Math.PI / 30.)
                ctx.Restore()

                let sec = now.GetSeconds()
                let min = now.GetMinutes()
                let hr  =
                    let hr = float (now.GetHours())
                    if hr >= 12. then hr - 12. else hr
                ctx.FillStyle <- "black"

                // Write Hours
                ctx.Save()
                Math.PI * (float hr / 6. + float min / 360. + float sec / 21600.)
                |> ctx.Rotate
                ctx.LineWidth <- 14.
                ctx.BeginPath()
                ctx.MoveTo(-20., 0.)
                ctx.LineTo(80., 0.)
                ctx.Stroke()
                ctx.Restore()

                // Write Minutes
                ctx.Save()
                ctx.Rotate(Math.PI * (float min / 30. + float sec / 1800.))
                ctx.LineWidth <- 10.
                ctx.BeginPath()
                ctx.MoveTo(-28., 0.)
                ctx.LineTo(112., 0.)
                ctx.Stroke()
                ctx.Restore()

                // Write Seconds
                ctx.Save()
                ctx.Rotate(float sec * Math.PI / 30.)
                ctx.StrokeStyle <- "#D40000"
                ctx.FillStyle <- "#D40000"
                ctx.LineWidth <- 6.
                ctx.BeginPath()
                ctx.MoveTo (-30., 0.)
                ctx.LineTo (83., 0.)
                ctx.Stroke()
                ctx.BeginPath()
                ctx.Arc(0., 0., 10., 0., Math.PI * 2., true)
                ctx.Fill()
                ctx.BeginPath()
                ctx.Arc(95., 0., 10., 0., Math.PI * 2., true) //Seconds hand
                ctx.Stroke()
                ctx.FillStyle <- "#555"
                ctx.Arc(0., 0., 3., 0., Math.PI * 2., true)
                ctx.Fill()
                ctx.Restore()

                ctx.BeginPath()
                ctx.LineWidth <- 14.
                ctx.StrokeStyle <- "#325FA2"
                ctx.Arc(0., 0., 142., 0., Math.PI * 2., true)
                ctx.Stroke()
                ctx.Restore()

            Div [
                AnimatedCanvas example1 612 612 "1"
                Div [Attr.Style "clear:both"]
            ]