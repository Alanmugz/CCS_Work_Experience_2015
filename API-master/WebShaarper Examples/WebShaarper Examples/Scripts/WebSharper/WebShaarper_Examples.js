(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,WebShaarper_Examples,Client,Calculation,Arrays,Seq,Operators,List,Html,Client1,Attr,Tags,T,EventsPervasives,Operators1,Unchecked,G_vmlCanvasManager,Concurrency,Lazy,CanvasAnimation,Date,Math,Number,Calculator,HelloWorld;
 Runtime.Define(Global,{
  WebShaarper_Examples:{
   Client:{
    Calculation:{
     Fact1:function(n)
     {
      return n<2?1:n*Calculation.Fact1(n-1);
     },
     Fact2:function(n)
     {
      return Arrays.fold(function(x)
      {
       return function(y)
       {
        return x*y;
       };
      },1,Seq.toArray(Operators.range(1,n)));
     },
     Main:function()
     {
      var x,_this,_this1,input,x1,_this2,output,x2,_this3,_this4,_this5,x3,x4,x5,_this6;
      _this=Attr.Attr();
      x=List.ofArray([_this.NewAttr("type","text")]);
      _this1=Tags.Tags();
      input=_this1.NewTag("input",x);
      x1=Runtime.New(T,{
       $:0
      });
      _this2=Tags.Tags();
      output=_this2.NewTag("pre",x1);
      _this3=Attr.Attr();
      _this4=Attr.Attr();
      x2=List.ofArray([_this3.NewAttr("type","button"),_this4.NewAttr("value","Factorial")]);
      _this5=Tags.Tags();
      x3=_this5.NewTag("input",x2);
      x4=function()
      {
       return function()
       {
        var v;
        v=input.get_Value()<<0;
        return output.set_Text("Fact1 = "+Global.String(Calculation.Fact1(v))+". Fact2 = "+Global.String(Calculation.Fact2(v)));
       };
      };
      EventsPervasives.Events().OnClick(x4,x3);
      x5=List.ofArray([input,x3,output]);
      _this6=Tags.Tags();
      return _this6.NewTag("div",x5);
     }
    },
    Calculator:{
     Main:function()
     {
      var patternInput,op,onum,num,x,_this,_this1,_this2,display,updateDisplay,C,AC,N,E,O,btn,digit,x4,x5,_this5,x6,x7,_this6,x8,_this7,x9,_this8,xa,_this9,_thisa,_thisb;
      patternInput=[{
       contents:0
      },{
       contents:0
      },{
       contents:{
        $:0
       }
      }];
      op=patternInput[2];
      onum=patternInput[0];
      num=patternInput[1];
      _this=Attr.Attr();
      _this1=Attr.Attr();
      x=List.ofArray([_this.NewAttr("type","Text"),_this1.NewAttr("value","0")]);
      _this2=Tags.Tags();
      display=_this2.NewTag("input",x);
      updateDisplay=function()
      {
       return display.set_Value(Global.String(num.contents));
      };
      C=function()
      {
       num.contents=0;
       return updateDisplay(null);
      };
      AC=function()
      {
       num.contents=0;
       onum.contents=0;
       op.contents={
        $:0
       };
       return updateDisplay(null);
      };
      N=function()
      {
       num.contents=-num.contents;
       return updateDisplay(null);
      };
      E=function()
      {
       var matchValue;
       matchValue=op.contents;
       if(matchValue.$==1)
        {
         num.contents=(matchValue.$0.call(null,onum.contents))(num.contents);
         op.contents={
          $:0
         };
         return updateDisplay(null);
        }
       else
        {
         return null;
        }
      };
      O=function(o)
      {
       return function()
       {
        var matchValue;
        matchValue=op.contents;
        if(matchValue.$==1)
         {
          num.contents=(matchValue.$0.call(null,onum.contents))(num.contents);
          updateDisplay(null);
         }
        onum.contents=num.contents;
        num.contents=0;
        op.contents={
         $:1,
         $0:o
        };
        return;
       };
      };
      btn=function(caption,action)
      {
       var x1,x2,_this3,_this4,x3;
       _this3=Attr.Attr();
       x2=List.ofArray([_this3.NewAttr("style","width:30px")]);
       _this4=Tags.Tags();
       x1=Operators1.add(_this4.NewTag("button",x2),List.ofArray([Tags.Tags().text(caption)]));
       x3=function()
       {
        return function()
        {
         return action(null);
        };
       };
       EventsPervasives.Events().OnClick(x3,x1);
       return x1;
      };
      digit=function(n)
      {
       return btn(Global.String(n),function()
       {
        num.contents=10*num.contents+n;
        return updateDisplay(null);
       });
      };
      x5=Runtime.New(T,{
       $:0
      });
      _this5=Tags.Tags();
      x7=Runtime.New(T,{
       $:0
      });
      _this6=Tags.Tags();
      x8=Runtime.New(T,{
       $:0
      });
      _this7=Tags.Tags();
      x9=Runtime.New(T,{
       $:0
      });
      _this8=Tags.Tags();
      xa=Runtime.New(T,{
       $:0
      });
      _this9=Tags.Tags();
      x6=List.ofArray([digit(7),digit(8),digit(9),btn("/",O(function(x1)
      {
       return function(y)
       {
        return x1/y>>0;
       };
      })),_this6.NewTag("br",x7),digit(4),digit(5),digit(6),btn("*",O(function(x1)
      {
       return function(y)
       {
        return x1*y;
       };
      })),_this7.NewTag("br",x8),digit(1),digit(2),digit(3),btn("-",O(function(x1)
      {
       return function(y)
       {
        return x1-y;
       };
      })),_this8.NewTag("br",x9),digit(0),btn("C",C),btn("AC",AC),btn("+",O(function(x1)
      {
       return function(y)
       {
        return x1+y;
       };
      })),_this9.NewTag("br",xa),btn("+/-",N),btn("=",E)]);
      _thisa=Tags.Tags();
      x4=List.ofArray([display,_this5.NewTag("br",x5),_thisa.NewTag("div",x6)]);
      _thisb=Tags.Tags();
      return _thisb.NewTag("div",x4);
     }
    },
    CanvasAnimation:{
     AnimatedCanvas:function(draw,width,height)
     {
      var x,_this,element,canvas,ctx,loop,loop1,loop2,t,x3,x4,_this1,_this2,_this3,x5,_this4,_this5,x6,_this6,_this7,x7,x8,_this8,_this9,_thisa;
      x=Runtime.New(T,{
       $:0
      });
      _this=Tags.Tags();
      element=_this.NewTag("canvas",x);
      canvas=element.Dom;
      if(Unchecked.Equals(canvas.getContext,undefined))
       {
        G_vmlCanvasManager.initElement(canvas);
       }
      canvas.width=width;
      canvas.height=height;
      ctx=canvas.getContext("2d");
      loop=function()
      {
       var f;
       f=function()
       {
        var x1,f1;
        x1=Concurrency.Sleep(1000);
        f1=function()
        {
         var x2;
         draw(ctx);
         x2=Lazy.Force(loop1);
         return x2;
        };
        return Concurrency.Bind(x1,f1);
       };
       return Concurrency.Delay(f);
      };
      loop1=Lazy.Create(loop);
      loop2=Lazy.Force(loop1);
      draw(ctx);
      t={
       $:0
      };
      Concurrency.Start(loop2,t);
      x4=Global.String(width);
      _this1=Attr.Attr();
      _this2=Attr.Attr();
      x3=List.ofArray([_this1.NewAttr("width",x4),_this2.NewAttr("style","float:left;")]);
      _this3=Tags.Tags();
      _this4=Attr.Attr();
      x5=List.ofArray([_this4.NewAttr("style","float:center")]);
      _this5=Tags.Tags();
      _this6=Attr.Attr();
      x6=List.ofArray([_this6.NewAttr("style","float:center; position:relative; top:-280px; left:163px; z-index:-1;")]);
      _this7=Tags.Tags();
      _this8=Attr.Attr();
      x8=List.ofArray([_this8.NewAttr("src","data:image/png;base64,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")]);
      _this9=Tags.Tags();
      x7=List.ofArray([_this9.NewTag("img",x8)]);
      _thisa=Tags.Tags();
      return Operators1.add(_this3.NewTag("div",x3),List.ofArray([Operators1.add(_this5.NewTag("div",x5),List.ofArray([element,Operators1.add(_this7.NewTag("p",x6),List.ofArray([_thisa.NewTag("i",x7)]))]))]));
     },
     Main:function()
     {
      var x,x1,_this,_this1,_this2;
      _this=Attr.Attr();
      x1=List.ofArray([_this.NewAttr("style","clear:both")]);
      _this1=Tags.Tags();
      x=List.ofArray([CanvasAnimation.AnimatedCanvas(function(ctx)
      {
       var now,i,i1,sec,min,hr,hr1;
       now=new Date();
       ctx.save();
       ctx.clearRect(0,0,1050,1050);
       ctx.translate(300,300);
       ctx.scale(1.9,1.9);
       ctx.rotate(-Math.PI/2);
       ctx.strokeStyle="black";
       ctx.fillStyle="white";
       ctx.lineWidth=8;
       ctx.save();
       for(i=1;i<=12;i++){
        ctx.beginPath();
        ctx.rotate(Math.PI/6);
        ctx.moveTo(100,0);
        ctx.lineTo(120,0);
        ctx.stroke();
       }
       ctx.restore();
       ctx.save();
       ctx.lineWidth=5;
       for(i1=0;i1<=59;i1++){
        if(i1%5!==0)
         {
          ctx.beginPath();
          ctx.moveTo(117,0);
          ctx.lineTo(120,0);
          ctx.stroke();
         }
        ctx.rotate(3.14159265358979/30);
       }
       ctx.restore();
       sec=now.getSeconds();
       min=now.getMinutes();
       hr=Number(now.getHours());
       hr1=hr>=12?hr-12:hr;
       ctx.fillStyle="black";
       ctx.save();
       ctx.rotate(Math.PI*(Number(hr1)/6+Number(min)/360+Number(sec)/21600));
       ctx.lineWidth=14;
       ctx.beginPath();
       ctx.moveTo(-20,0);
       ctx.lineTo(80,0);
       ctx.stroke();
       ctx.restore();
       ctx.save();
       ctx.rotate(Math.PI*(Number(min)/30+Number(sec)/1800));
       ctx.lineWidth=10;
       ctx.beginPath();
       ctx.moveTo(-28,0);
       ctx.lineTo(112,0);
       ctx.stroke();
       ctx.restore();
       ctx.save();
       ctx.rotate(Number(sec)*Math.PI/30);
       ctx.strokeStyle="#D40000";
       ctx.fillStyle="#D40000";
       ctx.lineWidth=6;
       ctx.beginPath();
       ctx.moveTo(-30,0);
       ctx.lineTo(83,0);
       ctx.stroke();
       ctx.beginPath();
       ctx.arc(0,0,10,0,Math.PI*2,true);
       ctx.fill();
       ctx.beginPath();
       ctx.arc(95,0,10,0,Math.PI*2,true);
       ctx.stroke();
       ctx.fillStyle="#555";
       ctx.arc(0,0,3,0,Math.PI*2,true);
       ctx.fill();
       ctx.restore();
       ctx.beginPath();
       ctx.lineWidth=14;
       ctx.strokeStyle="#325FA2";
       ctx.arc(0,0,142,0,Math.PI*2,true);
       ctx.stroke();
       return ctx.restore();
      },612,612,"1"),_this1.NewTag("div",x1)]);
      _this2=Tags.Tags();
      return _this2.NewTag("div",x);
     }
    },
    HelloWorld:{
     Main:function()
     {
      var x,_this,welcome,x1,x2,_this1,x3,x4,_this2;
      x=List.ofArray([Tags.Tags().text("Welcome")]);
      _this=Tags.Tags();
      welcome=_this.NewTag("p",x);
      x2=List.ofArray([Tags.Tags().text("Click Me!")]);
      _this1=Tags.Tags();
      x3=_this1.NewTag("button",x2);
      x4=function()
      {
       return function()
       {
        return welcome.set_Text("Hello, world!");
       };
      };
      EventsPervasives.Events().OnClick(x4,x3);
      x1=List.ofArray([welcome,x3]);
      _this2=Tags.Tags();
      return _this2.NewTag("div",x1);
     }
    }
   },
   ControlCalculation:{
    EntryPoint:Runtime.Class({
     get_Body:function()
     {
      return Calculation.Main();
     }
    })
   },
   ControlCalculator:{
    EntryPoint:Runtime.Class({
     get_Body:function()
     {
      return Calculator.Main();
     }
    })
   },
   ControlClock:{
    EntryPoint:Runtime.Class({
     get_Body:function()
     {
      return CanvasAnimation.Main();
     }
    })
   },
   ControlHelloWorld:{
    EntryPoint:Runtime.Class({
     get_Body:function()
     {
      return HelloWorld.Main();
     }
    })
   }
  }
 });
 Runtime.OnInit(function()
 {
  WebShaarper_Examples=Runtime.Safe(Global.WebShaarper_Examples);
  Client=Runtime.Safe(WebShaarper_Examples.Client);
  Calculation=Runtime.Safe(Client.Calculation);
  Arrays=Runtime.Safe(Global.WebSharper.Arrays);
  Seq=Runtime.Safe(Global.WebSharper.Seq);
  Operators=Runtime.Safe(Global.WebSharper.Operators);
  List=Runtime.Safe(Global.WebSharper.List);
  Html=Runtime.Safe(Global.WebSharper.Html);
  Client1=Runtime.Safe(Html.Client);
  Attr=Runtime.Safe(Client1.Attr);
  Tags=Runtime.Safe(Client1.Tags);
  T=Runtime.Safe(List.T);
  EventsPervasives=Runtime.Safe(Client1.EventsPervasives);
  Operators1=Runtime.Safe(Client1.Operators);
  Unchecked=Runtime.Safe(Global.WebSharper.Unchecked);
  G_vmlCanvasManager=Runtime.Safe(Global.G_vmlCanvasManager);
  Concurrency=Runtime.Safe(Global.WebSharper.Concurrency);
  Lazy=Runtime.Safe(Global.WebSharper.Lazy);
  CanvasAnimation=Runtime.Safe(Client.CanvasAnimation);
  Date=Runtime.Safe(Global.Date);
  Math=Runtime.Safe(Global.Math);
  Number=Runtime.Safe(Global.Number);
  Calculator=Runtime.Safe(Client.Calculator);
  return HelloWorld=Runtime.Safe(Client.HelloWorld);
 });
 Runtime.OnLoad(function()
 {
  return;
 });
}());
