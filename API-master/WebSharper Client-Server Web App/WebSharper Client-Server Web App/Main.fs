namespace WebSharper_Client_Server_Web_App

open WebSharper.Html.Server
open WebSharper
open WebSharper.Sitelets

type Action =
    | GetRates
    | InsertRates
    | UpdateRates

module ControlGetRate =

    [<Sealed>]
    type EntryPoint() =
        inherit Web.Control()

        [<JavaScript>]
        override this.Body =
            Client.Get() :> _

module ControlInsertRate =

    [<Sealed>]
    type EntryPoint() =
        inherit Web.Control()

        [<JavaScript>]
        override this.Body =
            Client.Insert() :> _

module ControlUpdateRate =

    [<Sealed>]
    type EntryPoint() =
        inherit Web.Control()

        [<JavaScript>]
        override this.Body =
            Client.Update() :> _

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
            LI ["Get Rates" => ctx.Link GetRates]
            LI ["Insert Rates" => ctx.Link InsertRates]
            LI ["Update Rates" => ctx.Link UpdateRates]
        ]

    let GetRatesPage =
        Skin.WithTemplate "GET RATE" <| fun ctx ->
            [
                Div [Text "GET RATE"]
                Links ctx
                
                Div [Attr.Class "class1"] -< [new ControlGetRate.EntryPoint()]

            ]

    let InsertRatesPage =
        Skin.WithTemplate "INSERT RATE" <| fun ctx ->
            [
                Div [Text "INSERT RATE"]
                Links ctx
               
                Div [Attr.Class "class1"] -< [new ControlInsertRate.EntryPoint()]

            ]

    let UpdateRatesPage =
        Skin.WithTemplate "UPDATE RATE" <| fun ctx ->
            [
                Div [Text "UPDATE RATE"]
                Links ctx                

                Div [Attr.Class "class1"] -< [new ControlUpdateRate.EntryPoint()]
            ]

    let Main =
        Sitelet.Sum [
            Sitelet.Content "/" GetRates GetRatesPage
            Sitelet.Content "/InsertRate" InsertRates InsertRatesPage
            Sitelet.Content "/UpdateRate" UpdateRates UpdateRatesPage
        ]

[<Sealed>]
type Website() =
    interface IWebsite<Action> with
        member this.Sitelet = Site.Main
        member this.Actions = [GetRates; InsertRates; UpdateRates]

type Global() =
    inherit System.Web.HttpApplication()

    member g.Application_Start(sender: obj, args: System.EventArgs) =
        ()

[<assembly: Website(typeof<Website>)>]
do ()
