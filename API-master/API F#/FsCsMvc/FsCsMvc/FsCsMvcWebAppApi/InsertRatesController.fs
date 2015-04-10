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

type InsertRatesController() =
    inherit ApiController()
   
    //Post /api/insertrates
    member x.Post ([<FromBody>] rate: DataModel) =

        let conn = DatabaseUtilities.openConnection
        conn.Open() 

        try
            let rowsEffected = Database.executeNonQuery <| conn <| DatabaseUtilities.insertRateQuery (rate.CurrencyId, rate.CurrencyCode, rate.Value)

            let validUpdate value = 
               match value with
                    | 1 -> { CurrencyId = rate.CurrencyId; CurrencyCode = rate.CurrencyCode; Value = rate.Value} 
                    | _ -> { CurrencyId = 0; CurrencyCode = "---"; Value = 0.0M}

            validUpdate rowsEffected

        finally
            conn.Close()