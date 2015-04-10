namespace FsWeb.Controllers

open Npgsql
open System

[<CLIMutable>]
type DataModel = { CurrencyId: int; CurrencyCode: string; Value: decimal }

module Database =    

    let executeReader (connection: NpgsqlConnection) (queryString: string) =
      [ let command = new NpgsqlCommand(queryString, connection)
        let dataReader = command.ExecuteReader()
        
        while dataReader.Read() do
            let data = { CurrencyId = dataReader.GetInt32(0); CurrencyCode = dataReader.GetString(1); Value = Convert.ToDecimal(dataReader.GetDouble(2)) }
            yield data]

    let executeNonQuery (connection: NpgsqlConnection) (queryString: string) =
        let command = new NpgsqlCommand(queryString, connection)
        let rowsEffected = command.ExecuteNonQuery()
        rowsEffected

module DatabaseUtilities = 

     let private connectionString = "Server = localhost; Port = 5432; Database = WebApi; User Id = postgres; Password = y6j5atu5 ; CommandTimeout = 40;"

     let openConnection = new NpgsqlConnection(connectionString)

//     let getRatesbyCurrencyCodeQuery (currencyCode: string) =
//         String.Format("SELECT * FROM Rate WHERE CurrencyCode = '{0}'", currencyCode)

     let getRatesbyCurrencyCodeQuery (currencyCode: string) =
        "SELECT * FROM Rate WHERE CurrencyCode = '" + currencyCode + "'"

     let insertRateQuery (currencyId:int, currencyCode : string, rate : decimal) =
         String.Format("INSERT INTO Rate VALUES({0}, '{1}', {2})", currencyId, currencyCode, rate)

     let updateRateQuery (currencyCode : string, rate : decimal) =
         String.Format("UPDATE Rate SET ExchangeRate = {0} WHERE CurrencyCode = '{1}' ", rate, currencyCode)


