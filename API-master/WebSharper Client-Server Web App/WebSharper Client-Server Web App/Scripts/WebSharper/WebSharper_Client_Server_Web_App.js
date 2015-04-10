(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,List,Html,Client,Tags,Attr,WebSharper_Client_Server_Web_App,Client1,EventsPervasives,Remoting,AjaxRemotingProvider,Concurrency;
 Runtime.Define(Global,{
  WebSharper_Client_Server_Web_App:{
   Client:{
    Get:function()
    {
     var x,_this,label,x1,_this1,_this2,currencyCode,x2,_this3,returnedRate,x3,x4,_this4,x5,x6,_this5;
     x=List.ofArray([Tags.Tags().text("Please enter a currency code?")]);
     _this=Tags.Tags();
     label=_this.NewTag("div",x);
     _this1=Attr.Attr();
     x1=List.ofArray([_this1.NewAttr("value","")]);
     _this2=Tags.Tags();
     currencyCode=_this2.NewTag("input",x1);
     x2=List.ofArray([Tags.Tags().text("")]);
     _this3=Tags.Tags();
     returnedRate=_this3.NewTag("div",x2);
     x4=List.ofArray([Tags.Tags().text("Get Rate")]);
     _this4=Tags.Tags();
     x5=_this4.NewTag("button",x4);
     x6=function()
     {
      return function()
      {
       return Client1.GetRate(currencyCode.get_Value(),function(out)
       {
        return returnedRate.set_Text(out);
       });
      };
     };
     EventsPervasives.Events().OnClick(x6,x5);
     x3=List.ofArray([label,currencyCode,returnedRate,x5]);
     _this5=Tags.Tags();
     return _this5.NewTag("div",x3);
    },
    GetRate:function(currencyCode,k)
    {
     var f,arg00,t;
     f=function()
     {
      var x,f1;
      x=AjaxRemotingProvider.Async("WebSharper_Client_Server_Web_App:0",[currencyCode]);
      f1=function(_arg1)
      {
       var x1;
       x1=k(_arg1);
       return Concurrency.Return(x1);
      };
      return Concurrency.Bind(x,f1);
     };
     arg00=Concurrency.Delay(f);
     t={
      $:0
     };
     return Concurrency.Start(arg00,t);
    },
    Insert:function()
    {
     var x,_this,label1,x1,_this1,label2,x2,_this2,label3,x3,_this3,_this4,currencyId,x4,_this5,_this6,currencyCode,x5,_this7,_this8,currencyValue,x6,_this9,returnedRate,x7,x8,_thisa,x9,xa,_thisb;
     x=List.ofArray([Tags.Tags().text("Please enter a new currency id?")]);
     _this=Tags.Tags();
     label1=_this.NewTag("div",x);
     x1=List.ofArray([Tags.Tags().text("Please enter a new currency code?")]);
     _this1=Tags.Tags();
     label2=_this1.NewTag("div",x1);
     x2=List.ofArray([Tags.Tags().text("Please enter a new currency value?")]);
     _this2=Tags.Tags();
     label3=_this2.NewTag("div",x2);
     _this3=Attr.Attr();
     x3=List.ofArray([_this3.NewAttr("value","")]);
     _this4=Tags.Tags();
     currencyId=_this4.NewTag("input",x3);
     _this5=Attr.Attr();
     x4=List.ofArray([_this5.NewAttr("value","")]);
     _this6=Tags.Tags();
     currencyCode=_this6.NewTag("input",x4);
     _this7=Attr.Attr();
     x5=List.ofArray([_this7.NewAttr("value","")]);
     _this8=Tags.Tags();
     currencyValue=_this8.NewTag("input",x5);
     x6=List.ofArray([Tags.Tags().text("")]);
     _this9=Tags.Tags();
     returnedRate=_this9.NewTag("div",x6);
     x8=List.ofArray([Tags.Tags().text("Insert Rate")]);
     _thisa=Tags.Tags();
     x9=_thisa.NewTag("button",x8);
     xa=function()
     {
      return function()
      {
       return Client1.InsertRate(currencyId.get_Value(),currencyCode.get_Value(),currencyValue.get_Value(),function(out)
       {
        return returnedRate.set_Text(out);
       });
      };
     };
     EventsPervasives.Events().OnClick(xa,x9);
     x7=List.ofArray([label1,currencyId,label2,currencyCode,label3,currencyValue,returnedRate,x9]);
     _thisb=Tags.Tags();
     return _thisb.NewTag("div",x7);
    },
    InsertRate:function(currencyId,currencyCode,currencyValue,k)
    {
     var data,f,arg00,t;
     data=[currencyId,currencyCode,currencyValue];
     f=function()
     {
      var x,f1;
      x=AjaxRemotingProvider.Async("WebSharper_Client_Server_Web_App:1",[data[0],data[1],data[2]]);
      f1=function(_arg1)
      {
       var x1;
       x1=k(_arg1);
       return Concurrency.Return(x1);
      };
      return Concurrency.Bind(x,f1);
     };
     arg00=Concurrency.Delay(f);
     t={
      $:0
     };
     return Concurrency.Start(arg00,t);
    },
    Update:function()
    {
     var x,_this,label1,x1,_this1,label2,x2,_this2,_this3,currencyCode,x3,_this4,_this5,currencyValue,x4,_this6,returnedRate,x5,x6,_this7,x7,x8,_this8;
     x=List.ofArray([Tags.Tags().text("Please enter a new currency code?")]);
     _this=Tags.Tags();
     label1=_this.NewTag("div",x);
     x1=List.ofArray([Tags.Tags().text("Please enter a new currency value?")]);
     _this1=Tags.Tags();
     label2=_this1.NewTag("div",x1);
     _this2=Attr.Attr();
     x2=List.ofArray([_this2.NewAttr("value","")]);
     _this3=Tags.Tags();
     currencyCode=_this3.NewTag("input",x2);
     _this4=Attr.Attr();
     x3=List.ofArray([_this4.NewAttr("value","")]);
     _this5=Tags.Tags();
     currencyValue=_this5.NewTag("input",x3);
     x4=List.ofArray([Tags.Tags().text("")]);
     _this6=Tags.Tags();
     returnedRate=_this6.NewTag("div",x4);
     x6=List.ofArray([Tags.Tags().text("Update Rate")]);
     _this7=Tags.Tags();
     x7=_this7.NewTag("button",x6);
     x8=function()
     {
      return function()
      {
       return Client1.UpdateRate(currencyCode.get_Value(),currencyValue.get_Value(),function(out)
       {
        return returnedRate.set_Text(out);
       });
      };
     };
     EventsPervasives.Events().OnClick(x8,x7);
     x5=List.ofArray([label1,currencyCode,label2,currencyValue,returnedRate,x7]);
     _this8=Tags.Tags();
     return _this8.NewTag("div",x5);
    },
    UpdateRate:function(currencyCode,currencyValue,k)
    {
     var data,f,arg00,t;
     data=[currencyCode,currencyValue];
     f=function()
     {
      var x,f1;
      x=AjaxRemotingProvider.Async("WebSharper_Client_Server_Web_App:2",[data[0],data[1]]);
      f1=function(_arg1)
      {
       var x1;
       x1=k(_arg1);
       return Concurrency.Return(x1);
      };
      return Concurrency.Bind(x,f1);
     };
     arg00=Concurrency.Delay(f);
     t={
      $:0
     };
     return Concurrency.Start(arg00,t);
    }
   },
   ControlGetRate:{
    EntryPoint:Runtime.Class({
     get_Body:function()
     {
      return Client1.Get();
     }
    })
   },
   ControlInsertRate:{
    EntryPoint:Runtime.Class({
     get_Body:function()
     {
      return Client1.Insert();
     }
    })
   },
   ControlUpdateRate:{
    EntryPoint:Runtime.Class({
     get_Body:function()
     {
      return Client1.Update();
     }
    })
   }
  }
 });
 Runtime.OnInit(function()
 {
  List=Runtime.Safe(Global.WebSharper.List);
  Html=Runtime.Safe(Global.WebSharper.Html);
  Client=Runtime.Safe(Html.Client);
  Tags=Runtime.Safe(Client.Tags);
  Attr=Runtime.Safe(Client.Attr);
  WebSharper_Client_Server_Web_App=Runtime.Safe(Global.WebSharper_Client_Server_Web_App);
  Client1=Runtime.Safe(WebSharper_Client_Server_Web_App.Client);
  EventsPervasives=Runtime.Safe(Client.EventsPervasives);
  Remoting=Runtime.Safe(Global.WebSharper.Remoting);
  AjaxRemotingProvider=Runtime.Safe(Remoting.AjaxRemotingProvider);
  return Concurrency=Runtime.Safe(Global.WebSharper.Concurrency);
 });
 Runtime.OnLoad(function()
 {
  return;
 });
}());
