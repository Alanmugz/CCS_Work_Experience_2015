namespace WebSharper_Client_Server_Web_App

open WebSharper
open WebSharper.JavaScript
open WebSharper.Html.Client

[<JavaScript>]
module Client =

    let GetRate currencyCode k =
        async {
            let! data = Remoting.getRates(currencyCode)
            return k data
        }
        |> Async.Start

    let InsertRate currencyId currencyCode currencyValue k =

        let data = (currencyId, currencyCode, currencyValue)

        async {
            let! data = Remoting.insertRate(data)
            return k data
        }
        |> Async.Start

    let UpdateRate currencyCode currencyValue k =

        let data = (currencyCode, currencyValue)

        async {
            let! data = Remoting.updateRate(data)
            return k data
        }
        |> Async.Start

    let Get () =
        let label = Div [Text "Please enter a currency code?"]
        let currencyCode = Input [Attr.Value ""]
        let returnedRate = Div [Text ""]

        Div [
            label
            currencyCode
            returnedRate

            Button [Text "Get Rate"]
            |>! OnClick (fun _ _ ->
                GetRate currencyCode.Value (fun out ->
                    returnedRate.Text <- out))
        ]

    let Insert () =
        let label1 = Div [Text "Please enter a new currency id?"]
        let label2 = Div [Text "Please enter a new currency code?"]
        let label3 = Div [Text "Please enter a new currency value?"]
        let currencyId = Input [Attr.Value ""]
        let currencyCode = Input [Attr.Value ""]
        let currencyValue = Input [Attr.Value ""]
        let returnedRate = Div [Text ""]
        Div [
            label1
            currencyId
            label2
            currencyCode
            label3
            currencyValue
            returnedRate

            Button [Text "Insert Rate"]
            |>! OnClick (fun _ _ ->
                InsertRate currencyId.Value currencyCode.Value currencyValue.Value (fun out ->
                    returnedRate.Text <- out))
        ]

    let Update () =
        let label1 = Div [Text "Please enter a new currency code?"]
        let label2 = Div [Text "Please enter a new currency value?"]
        let currencyCode = Input [Attr.Value ""]
        let currencyValue = Input [Attr.Value ""]
        let returnedRate = Div [Text ""]
        Div [
            label1
            currencyCode
            label2
            currencyValue
            returnedRate

            Button [Text "Update Rate"]
            |>! OnClick (fun _ _ ->
                UpdateRate currencyCode.Value currencyValue.Value (fun out ->
                    returnedRate.Text <- out))
        ]

