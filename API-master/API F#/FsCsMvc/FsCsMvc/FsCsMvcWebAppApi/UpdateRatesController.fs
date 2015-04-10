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

type UpdateRatesController() =
    inherit ApiController()

    //Post /api/updaterates/AUD
    member x.Post (currencyCode: string)([<FromBody>] rate: DataModel) =

        let conn = DatabaseUtilities.openConnection
        conn.Open() 

        try
            let rowsEffected = Database.executeNonQuery <| conn <| DatabaseUtilities.updateRateQuery (currencyCode, rate.Value)

            let validUpdate value = 
               match value with
                    | 1 -> { CurrencyId = 0; CurrencyCode = currencyCode; Value = rate.Value} 
                    | _ -> { CurrencyId = 0; CurrencyCode = "---"; Value = 0.0M}

            validUpdate rowsEffected

        finally
            conn.Close()
