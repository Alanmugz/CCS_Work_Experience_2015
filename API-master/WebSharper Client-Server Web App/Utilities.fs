namespace WebSharper_Client_Server_Web_App

open FSharp.Data

module Json = 
    type Sample = JsonProvider<""" {"CurrencyId@": 1, "CurrencyCode@": "AUD", "Value@": 0.98542} """>