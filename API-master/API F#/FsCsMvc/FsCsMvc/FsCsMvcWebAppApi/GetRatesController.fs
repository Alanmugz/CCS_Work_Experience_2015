namespace FsWeb.Controllers

open System.Web
open System.Web.Mvc
open System.Net.Http
open System.Web.Http
open System.IO
open System.Runtime.Serialization.Json
open System.Collections.Generic
open System.Text
open System

type GetRatesController() =
    inherit ApiController()
    
    // GET /api/getrates/AUD
    member x.Get (id:string) = 
        let conn = DatabaseUtilities.openConnection
        conn.Open() 

        try
            let rates = Database.executeReader <| conn <| DatabaseUtilities.getRatesbyCurrencyCodeQuery id 

            let checkForEmptyList list = 
                match list with
                | [] -> { CurrencyId = 0; CurrencyCode = "---"; Value = 0.0M}
                | _ -> { CurrencyId = list.Head.CurrencyId; CurrencyCode = list.Head.CurrencyCode; Value = list.Head.Value}

            checkForEmptyList rates

        finally
            conn.Close()