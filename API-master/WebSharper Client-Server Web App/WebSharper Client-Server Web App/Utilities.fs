namespace WebSharper_Client_Server_Web_App

open FSharp.Data

module Json = 
    type Sample = JsonProvider<""" {"currencyId": 1, "currencyCode": "AUD", "value": 0.98542} """>