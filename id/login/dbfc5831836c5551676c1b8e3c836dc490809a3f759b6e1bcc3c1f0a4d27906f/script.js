$(function(){
    var app = {
        1 : {
            name : "PhoneZ Card",
            type : "Ваша відцифрована картка (натисніть)",
            art : "https://phonezgames.xyz/img/documentpng.png",
            url : "http://adf.ly/20106767/https://phonezgames.xyz/ua/games/unrealescaping_event/",
            update : {
                version : "1.0 E",
                date : "7 марта, 2022г.",
                versionTxt : "Спеціальна подія на підтримку України. Суть дуже проста, замість ув'язненого ви повинні зловити самі, розумієте кого)) ",
                img : " phonezgames.github.io/id/login/dbfc5831836c5551676c1b8e3c836dc490809a3f759b6e1bcc3c1f0a4d27906f/original_000000005макеєвамарія04082006-3.png "
},
            details : {
                seller : "PhoneZ Card (C)",
                size : "000000005",
                language : "Макеєва/ Makeieva",
                sort : "Марія/ Mariia",
                inapp : "04.08.2006",
                copy : "20.07.2022-20.07.2026",
                site : "http://adf.ly/20106767/https://phonezgames.xyz/ua/games/unrealescaping_event/"
            }
        },
        2 : {
            name : "PhoneZ Identification (паперовий)",
            type : "Ваш тимчасовий (паперовий) документ (натисніть)",
            art : "https://phonezgames.xyz/img/documentpng1.png",
            url : "http://adf.ly/20106767/https://phonezgames.xyz/ua/games/clashoftanks_event/",
            update : {
                version : "1.0 E",
                date : "7 марта, 2022г.",
                versionTxt : "Російський військовий корабель - йди на # @ й! Швидше за все, багато хто вже почув легендарну фразу, тож давайте всі разом підтримаємо Україну, зігравши у спеціальну подію Clash of Tanks, де ви українські танки, а перемогти ви повинні російський!",
                img : "https://phonezgames.xyz/id/login/dbfc5831836c5551676c1b8e3c836dc490809a3f759b6e1bcc3c1f0a4d27906f/original_000000002%D0%BC%D0%B0%D0%BA%D0%B5%D1%94%D0%B2%D0%B0%D0%BC%D0%B0%D1%80%D1%96%D1%8F06042006-1.png"
},
            details : {
                seller : "PhoneZ Identification (Paper)",
                size : "000000002",
                language : "Макеєва/ Makeieva",
                sort : "Марія/ Mariia",
                inapp : "04.08.2006",
                copy : "21.06.2022-21.06.2023",
                site : "http://adf.ly/20106767/https://phonezgames.xyz/ua/games/unrealescaping_event/"
            }
        },
        3 : {
            name : "PhoneZ Bank",
            type : "Ваш внутрішній банківський рахунок",
            art : "https://phonezgames.xyz/img/bankpng.png",
            url : "http://adf.ly/20106767/https://phonezgames.xyz/ua/games/killputins/",
            update : {
                version : "1.0",
                date : "15 квітня, 2022р.",
                versionTxt : "Просто потрібно убити всіх путінів у грі, тицяй грати і сам/а зрозумієш))",
                img : " phonezgames.github.io/id/login/dbfc5831836c5551676c1b8e3c836dc490809a3f759b6e1bcc3c1f0a4d27906f/original_000000005макеєвамарія04082006-3.png"
},
            details : {
                seller : "PhoneZ Bank Account",
                size : "<a href = 'dbfc5831836c5551676c1b8e3c836dc490809a3f759b6e1bcc3c1f0a4d27906f/bank.html'>9999 0001 (Натисніть, щоб увійти)</a>",
                language : "Макеєва/ Makeieva",
                sort : "Марія/ Mariia",
                inapp : "04.08.2006",
                copy : "20.07.2023-31.12.2032",
                site : "http://adf.ly/20106767/https://phonezgames.xyz/ua/games/unrealescaping_event/"
            }
        },
        
    }
    var cout = '';
    for (i in app) {
    cout='<div id="'+app[i].name.toLowerCase().split(" ").join("").replace(/[^A-Za-z0-9 ]/g,"")+'" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><div class="modal-title"><div style="padding:15px;" align="left"><table class="app"><tr><td style="width:90px;"><img src="'+app[i].art+'" alt="'+app[i].name+'" draggable="false"></td><td style="padding-left:5px;"><h4><b>'+app[i].name+'</b></h4><h5 style="color:#7B7A7F;">'+app[i].type+'</h5></td><td style="width:60px;"><div id="#modalDismiss1" class="close" data-dismiss="modal" aria-label="Close"><svg width="25" height="25"><circle cx="12.5" cy="12.5" r="12.5" fill="#010101"></circle><path d="M 8.04 8.04 L16.07 16.07 M 8.04 16.07 L16.07 8.04 Z" style="stroke:#FFFFFF;  fill:none; stroke-width:3;" /></svg></div></td></tr></table></div></div></div><div class="modal-body"><img src="'+app[i].update.img+'" class="inner"><h5><span class="mod-first-letter"><h3><b>Дані з документу/ Data from the document</b></h3></span><div style="width:100%"><div class="mod-first-letter" align="left" style="padding:5px; position:absolute; left:10px;">Тип документу/ Type of document</div><div align="right" style="padding:5px; position:absolute; right:10px;">'+app[i].details.seller+'</div><hr><div class="mod-first-letter" align="left" style="padding:5px; position:absolute; left:10px;">Номер документу/ Document No.</div><div align="right" style="padding:5px; position:absolute; right:10px;">'+app[i].details.size+'</div><hr><div class="mod-first-letter" align="left" style="padding:5px; position:absolute; left:10px;">Прізвище/ Surname</div><div align="right" style="padding:5px; position:absolute; right:10px;">'+app[i].details.language+'</div><hr><div class="mod-first-letter" align="left" style="padding:5px; position:absolute; left:10px;">Ім"я/ Name</div><div align="right" style="padding:5px; position:absolute; right:10px;">'+app[i].details.sort+'</div><hr><div class="mod-first-letter" align="left" style="padding:5px; position:absolute; left:10px;">Дата народження/ Date of birth</div><div align="right" style="padding:5px; position:absolute; right:10px;">'+app[i].details.inapp+'</div><hr><div class="mod-first-letter" align="left" style="padding:5px; position:absolute; left:10px;">Дійсний протягом/ Valid during</div><div align="right" style="padding:5px; position:absolute; right:10px;">'+app[i].details.copy+'</div><hr><div class="mod-first-letter" align="left" style="padding:5px; position:absolute; left:10px; color:rgb(0,122,252);"></div><hr></div></div></div></div></div>';
        $(".store").append('<div class="col-lg-4 col-sm-6" align="center"><div class="thumbnail" data-toggle="modal" data-target="#'+app[i].name.toLowerCase().split(" ").join("").replace(/[^A-Za-z0-9 ]/g,"")+'" align="left"><table class="app"><tr><td style="width:90px;"><img src="'+app[i].art+'" alt="'+app[i].name+'" draggable="false"></td><td style="padding-left:5px;"><h4><b>'+app[i].name+'</b></h4><h5 style="color:#7B7A7F;">'+app[i].type+'</h5></td></tr></table><hr id="hr"></div></div>'+cout);
        cout='';
    }
});
