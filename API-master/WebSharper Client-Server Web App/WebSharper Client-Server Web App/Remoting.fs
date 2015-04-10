namespace WebSharper_Client_Server_Web_App

open WebSharper
open FSharp.Data
open System
open FSharp.Data.HttpRequestHeaders

module Remoting =

    [<Remote>]
    let getRates input =
        async {
            let response = Json.Sample.Load("http://localhost:50442/api/getrates/" + input)

            return "Rate for: " + input + " = " + response.Value.ToString()
        }

    [<Remote>]
    let insertRate data  =
        async {
            let (id: string), (code: string), (value: string) = data
            let response = Http.RequestString("http://localhost:50442/api/insertrates", body = FormValues ["CurrencyId", id.ToString(); "CurrencyCode", code.ToString(); "value", value.ToString()], httpMethod = "POST")
            
            let json =  Json.Sample.Parse(response.ToString())

            return "Inserted: " + json.CurrencyCode + " - " + json.Value.ToString()
        }

    [<Remote>]
    let updateRate data =
        async {
            let (code: string), (value: string) = data

            let response = Http.RequestString("http://localhost:50442/api/updaterates/" + code, body = FormValues ["Value", value.ToString()], httpMethod = "POST")

            let json =  Json.Sample.Parse(response.ToString())

            return "Updated: " + json.CurrencyCode + " - " + json.Value.ToString()
        }