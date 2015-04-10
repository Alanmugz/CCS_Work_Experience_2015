namespace WebShaarper_Examples

open WebSharper.Html.Server
open WebSharper
open WebSharper.Sitelets

type Action =
    | HelloWorld
    | Calculation
    | Calculator
    | Clock

module ControlHelloWorld =

    [<Sealed>]
    type EntryPoint() =
        inherit Web.Control()

        [<JavaScript>]
        override __.Body =
            Client.HelloWorld.Main() :> _

module ControlCalculation =

    [<Sealed>]
    type EntryPoint() =
        inherit Web.Control()

        [<JavaScript>]
        override __.Body =
            Client.Calculation.Main() :> _

module ControlCalculator =

    [<Sealed>]
    type EntryPoint() =
        inherit Web.Control()

        [<JavaScript>]
        override __.Body =
            Client.Calculator.Main() :> _

module ControlClock =

    [<Sealed>]
    type EntryPoint() =
        inherit Web.Control()

        [<JavaScript>]
        override __.Body =
            Client.CanvasAnimation.Main() :> _

module Skin =
    open System.Web

    type Page =
        {
            Title : string
            Body : list<Element>
        }

    let MainTemplate =
        Content.Template<Page>("~/Main.html")
            .With("title", fun x -> x.Title)
            .With("body", fun x -> x.Body)

    let WithTemplate title body : Content<Action> =
        Content.WithTemplate MainTemplate <| fun context ->
            {
                Title = title
                Body = body context
            }

module Site =

    let ( => ) text url =
        A [HRef url] -< [Text text]

    let Links (ctx: Context<Action>) =
        UL [
            LI ["HelloWorld" => ctx.Link HelloWorld]
            LI ["Calculation" => ctx.Link Calculation]
            LI ["Calculator" => ctx.Link Calculator]
            LI ["Clock" => ctx.Link Clock]
        ]

    let HelloWorldPage =
        Skin.WithTemplate "Hello World" <| fun ctx ->
            [
                Div [Text "Hello World"]
                Div [new ControlHelloWorld.EntryPoint()]
                Links ctx
            ]

    let CalculationPage =
        Skin.WithTemplate "Calculation" <| fun ctx ->
            [
                Div [Text "Calculation"]
                Div [new ControlCalculation.EntryPoint()]
                Links ctx
            ]

    let CalculatorPage =
        Skin.WithTemplate "Calculator" <| fun ctx ->
            [
                Div [Text "Calculator"]
                Div [new ControlCalculator.EntryPoint()]
                Links ctx
            ]

    let ClockPage =
        Skin.WithTemplate "Clock" <| fun ctx ->
            [
                Div [Text "Clock"]
                Div [new ControlClock.EntryPoint()]
                Links ctx
            ]


    let Main =
        Sitelet.Sum [
            Sitelet.Content "/" HelloWorld HelloWorldPage
            Sitelet.Content "/Calculation" Calculation CalculationPage
            Sitelet.Content "/Calculator" Calculator CalculatorPage
            Sitelet.Content "/Clock" Clock ClockPage
        ]

[<Sealed>]
type Website() =
    interface IWebsite<Action> with
        member this.Sitelet = Site.Main
        member this.Actions = [HelloWorld; Calculation; Calculator; Clock]

type Global() =
    inherit System.Web.HttpApplication()

    member g.Application_Start(sender: obj, args: System.EventArgs) =
        ()

[<assembly: Website(typeof<Website>)>]
do ()
