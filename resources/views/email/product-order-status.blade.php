
<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width="100%">
    <tr>
        <td>
            <div id="template_header_image">
                <p align=center style='margin-top:0in;text-align:center;margin-bottom:10px'><a href="index.html" target="_blank">
                        <img border=0 src="{{\Illuminate\Support\Facades\URL::asset('/images/Dibdaa.png')}}" alt=Dibdaa>
                    </a>
                    <o:p></o:p>
                </p>
            </div>
        </td>
    </tr>
</table>
<div align=center>
    <table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0 width=600
           style='width:7.25in;background:#FDFDFD;border:solid gainsboro 1.0pt;border-left:solid gainsboro 1.0pt;
   box-shadow: 0 1px 4px rgba(0,0,0,0.1) !important;border-radius: 3px !important'
           id="template_container">
        <tr>
            <td>
                <div align=center>
                    <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width=600
                           style='width:8.25in;background:#F47321;border-radius: 3px 3px 0 0 !important'
                           id="template_header">
                        <tr>
                            <td style='padding:27.0pt .5in 27.0pt .5in' id="header_wrapper">
                                <h1 style='margin:0in;margin-bottom:.0001pt;line-height:150%;text-shadow:
      0 1px 0 #F47321;-webkit-font-smoothing: antialiased'><span
                                            style='font-size:22.5pt;line-height:150%;font-family:"Calibri","sans-serif";
      color:white;font-weight:normal'> Order Id  #{{ $order_info->order_id }} & order status is "{{ $status }}" <o:p></o:p></span></h1>
                            </td>
                        </tr>
                    </table>
                </div>
            </td>
        </tr>
    </table>
</div>
<div align=center>
    <table class=MsoNormalTable border=1 cellspacing=0
           cellpadding=0
           width="795"
           style='width:795px;border:solid #E4E4E4 1.0pt'>
        <thead>
        <tr>
            <td style='border:solid #E4E4E4 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
                <p class=MsoNormal><b><span style='font-family:"Calibri","sans-serif";
           color:#737373'>Image<o:p></o:p></span></b></p>
            </td>
            <td style='border:solid #E4E4E4 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
                <p class=MsoNormal><b><span style='font-family:"Calibri","sans-serif";
           color:#737373'>Product<o:p></o:p></span></b></p>
            </td>
            <td style='border:solid #E4E4E4 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
                <p class=MsoNormal><b><span style='font-family:"Calibri","sans-serif";
           color:#737373'>Quantity<o:p></o:p></span></b></p>
            </td>
            <td style='border:solid #E4E4E4 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
                <p class=MsoNormal><b><span style='font-family:"Calibri","sans-serif";
           color:#737373'>Price<o:p></o:p></span></b></p>
            </td>
            <td style='border:solid #E4E4E4 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
                <p class=MsoNormal><b><span style='font-family:"Calibri","sans-serif";
           color:#737373'>Ship Type<o:p></o:p></span></b></p>
            </td>
        </tr>
        </thead>
        <tr>
            <td style='border:solid #EEEEEE 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt;
              word-wrap: break-word'>
               <p class=MsoNormal><span style='font-family:"Calibri","sans-serif";
              color:#737373'>
                            <img style="height: 100px;width: 150px" height="100" width="150" border=0
                                 id=""
                                 src='{{\Illuminate\Support\Facades\URL::asset("/images/product/$product_info->id/M/$product_info->photos")}}'   alt=Dibdaa>
                    <o:p></o:p></span></p>
            </td>
            <td style='border:solid #EEEEEE 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt;
              word-wrap: break-word'>
                <p class=MsoNormal><span style='font-family:"Calibri","sans-serif";
              color:#737373'>{{$product_info->title}}
                        <o:p></o:p></span></p>
            </td>
            <td style='border:solid #EEEEEE 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
                <p class=MsoNormal><span style='font-family:"Calibri","sans-serif";
              color:#737373'>{{$order_info->quantity}}
                        <o:p></o:p></span></p>
            </td>
            <td style='border:solid #EEEEEE 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
                <p class=MsoNormal><span
                            class=woocommerce-price-currencysymbol><span
                                style='font-family:"Calibri","sans-serif";color:#737373'>AED </span></span><span
                            class=woocommerce-price-amountamount><span
                                style='font-family:"Calibri","sans-serif";
              color:#737373'>{{$product_info->price}}</span></span><span style='font-family:"Calibri","sans-serif";
              color:#737373'>(discount {{$product_info->discount}}%)<o:p></o:p></span></p>
            </td>
            <td style='border:solid #EEEEEE 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
                <p class=MsoNormal><span style='font-family:"Calibri","sans-serif";
              color:#737373'>@foreach($product_info->shipment_type as $s)
                            {{ $s }}
                        @endforeach
                        <o:p></o:p></span></p>
            </td>
        </tr>
        <tr>
            <td colspan=4
                style='border:solid #E4E4E4 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
                <p class=MsoNormal><b><span style='font-family:"Calibri","sans-serif";
          color:#737373'>Subtotal:<o:p></o:p></span></b></p>
            </td>
            <td style='border:solid #E4E4E4 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
                <p class=MsoNormal><span
                            class=woocommerce-price-currencysymbol><span
                                style='font-family:"Calibri","sans-serif";color:#737373'>AED </span></span><span
                            class=woocommerce-price-amount><span
                                style='font-family:"Calibri","sans-serif";
          color:#737373'>{{$product_info->price}}</span></span><span style='font-family:"Calibri","sans-serif";
          color:#737373'><o:p></o:p></span></p>
            </td>
        </tr>
        <tr>
            <td colspan=4
                style='border:solid #E4E4E4 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
                <p class=MsoNormal><b><span style='font-family:"Calibri","sans-serif";
          color:#737373'>Total:<o:p></o:p></span></b></p>
            </td>
            <td style='border:solid #E4E4E4 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
                <p class=MsoNormal><span
                            class=woocommerce-price-currencysymbol><span
                                style='font-family:"Calibri","sans-serif";color:#737373'>AED </span></span><span
                            class=woocommerce-price-amount><span
                                style='font-family:"Calibri","sans-serif";
          color:#737373'><?php
                            $price = $order_info->quantity * $product_info->price;
                            $discount = $price * $product_info->discount / 100;
                            $final_price = $price - $discount;
                            echo $final_price;
                            ?></span></span><span style='font-family:"Calibri","sans-serif";
          color:#737373'> </span><span style='font-family:"Calibri","sans-serif";color:#737373'> <o:p></o:p></span>
                </p>
            </td>
        </tr>
        <tr>
            <td style='border:solid #E4E4E4 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
                <p class=MsoNormal><b><span style='font-family:"Calibri","sans-serif";
          color:#737373'>User Information:<o:p></o:p></span></b></p>
            </td>
            <td colspan=4 style='border:solid #E4E4E4 1.0pt;padding:9.0pt 9.0pt 9.0pt 9.0pt'>
                <div style='mso-element:para-border-div;border:solid #E4E4E4 1.0pt;
          padding:9.0pt 9.0pt 0in 9.0pt'>
                    <address
                            style='border:none;padding:0in'><span
                                style='color:#737373'>{{$user_info->display_name}}
                            <br>
                            {{$user_info->first_name}}  {{$user_info->last_name}}
                            <br>
                            {{$user_info->mobile_number}}
                            <br>
                            <o:p></o:p></span></address>
                    <p style='mso-margin-top-alt:0in;margin-right:0in;margin-bottom:13.0pt;
          margin-left:0in;border:none;padding:0in'><i><span style='color:#737373'> {{$user_info->email}}
                                <o:p></o:p></span></i>
                    </p>
                </div>
            </td>
        </tr>
    </table>
</div>
<div align=center>
    <table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0
           width="434" style='width:434px'>
        <tr>
            <td colspan="2">
                <h1 style='margin:0in;margin-bottom:.0001pt;line-height:150%;-webkit-font-smoothing: antialiased'><span style='font-size:22.5pt;line-height:150%;font-family:"Calibri","sans-serif";
      color:black;font-weight:normal'> Dibs anywhere with the Dibdaa app  <o:p></o:p></span></h1>
            </td>
        </tr>
        <tr>
            <td valign=top style='' width="210px">
                <a href="{{config('app.app_store_link')}}"  target="_blank">
                    <img style="height: 75px; width: 210px" height="75" width="210" border=0  id="_x0000_i1025" src="{{\Illuminate\Support\Facades\URL::asset('/images/AppStore.png')}}" alt=Dibdaa>
                </a>
            </td>
            <td valign=top width="210px">
                <a href="{{config('app.google_play_link')}}"  target="_blank">
                    <img style="height: 75px;width: 210px" height="75" width="210" border=0   id="_x0000_i1025" src="{{\Illuminate\Support\Facades\URL::asset('/images/Google_Play.png')}}" alt=Dibdaa>
                </a>
            </td>
        </tr>
    </table>
</div>

