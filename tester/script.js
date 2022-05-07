$(function(){
    var app = {
        1 : {
            name : "PMusic",
            type : "Music & Audio",
            art : "https://i.imgur.com/NbgLRlt.jpg",
            url : "https://code.sololearn.com/WShE7Fijk2lK/?ref=app",
            update : {
                version : "3.2",
                date : "29 Jan, 2019",
                versionTxt : "&bull; Added artist tab.",
                img : "https://i.imgur.com/lWCh7ZN.jpg"
},
            details : {
                seller : "Warith Vatanaplachaigoon",
                size : "0 KB",
                language : "English",
                sort : "12+",
                inapp : "No",
                copy : "Prem Warith &copy; 2018",
                site : "https://www.sololearn.com/Profile/6725227/?ref=app"
            }
        },
        2 : {
            name : "All Country Flag (Game)",
            type : "Games",
            art : "https://i.imgur.com/CTLWQfm.jpg",
            url : "https://code.sololearn.com/WXe8kP1skMT4/?ref=app",
            update : {
                version : "2.1",
                date : "25 Sep, 2018",
                versionTxt : "&bull; Landscape viewport has been improved.<br />&bull; Bugs Fixed and Some Improvements.",
                img : "https://i.imgur.com/yrc3FfD.jpg"
},
            details : {
                seller : "Warith Vatanaplachaigoon",
                size : "0 KB",
                language : "English",
                sort : "4+",
                inapp : "No",
                copy : "Prem Warith &copy; 2018",
                site : "https://www.sololearn.com/Profile/6725227/?ref=app"
            }
        },
        3 : {
            name : "Signature of Thailand",
            type : "Photography",
            art : "https://i.imgur.com/Gr6XkBO.jpg",
            url : "https://code.sololearn.com/Wz4TPjD51Gu5/?ref=app",
            update : {
                version : "2.0",
                date : "3 May, 2018",
                versionTxt : "• Have fun with All new design!<br />&bull; Decreasing images so pages will load faster!<br />&bull; Add an information of the place by clicking on each card!<br />&bull; See Google Maps right on the page!",
                img : "https://i.imgur.com/CGDzDqk.jpg"
},
            details : {
                seller : "Warith Vatanaplachaigoon",
                size : "0 KB",
                language : "English",
                sort : "4+",
                inapp : "No",
                copy : "Prem Warith &copy; 2018",
                site : "https://www.sololearn.com/Profile/6725227/?ref=app"
            }
        },
        4 : {
            name : "PWeather",
            type : "Weather",
            art : "https://i.imgur.com/kTXqEFq.jpg",
            url : "https://code.sololearn.com/Wdriu4Vzx98l/?ref=app",
            update : {
                version : "1.0",
                date : "12 Jul, 2018",
                versionTxt : "Want some accurate weather app? Here is your choice!<br /><br />PWeather is not tell just only weather information. But also 7-days forecasting that may helps on your planning or travelling.<br /><br />What are you waiting for? Launch in our app!",
                img : "https://i.imgur.com/FJpJxAP.jpg"
},
            details : {
                seller : "Warith Vatanaplachaigoon",
                size : "0 KB",
                language : "English",
                sort : "4+",
                inapp : "No",
                copy : "Prem Warith &copy; 2018",
                site : "https://www.sololearn.com/Profile/6725227/?ref=app"
            }
        },
        5 : {
            name : "All about Bitwise (Quizzes)(Python)",
            type : "Games",
            art : "https://i.imgur.com/Wgwrq2k.jpg",
            url : "https://code.sololearn.com/WE7zSQ80RLPp/?ref=app",
            update : {
                version : "1.2",
                date : "12 May, 2018",
                versionTxt : "&bull; Adding Sound!<br />&bull; Bugs Fixed and Some Improvements.",
                img : "https://i.imgur.com/sVRV5uS.jpg"
},
            details : {
                seller : "Warith Vatanaplachaigoon",
                size : "0 KB",
                language : "English",
                sort : "4+",
                inapp : "No",
                copy : "Prem Warith &copy; 2018",
                site : "https://www.sololearn.com/Profile/6725227/?ref=app"
            }
        },
        6 : {
            name : "Working with Number&Text",
            type : "Tools",
            art : "https://i.imgur.com/fc24zPP.jpg",
            url : "https://code.sololearn.com/WDzoC9j10emX/?ref=app",
            update : {
                version : "1.0",
                date : "27 Feb, 2018",
                versionTxt : "This app can calculate the problems. Like Factorize, Deficient Number or Time Converter .etc. This may be more smarter choice for calculating.",
                img : "https://i.imgur.com/FMsdJve.jpg"
},
            details : {
                seller : "Warith Vatanaplachaigoon",
                size : "0 KB",
                language : "English",
                sort : "4+",
                inapp : "No",
                copy : "Prem Warith &copy; 2018",
                site : "https://www.sololearn.com/Profile/6725227/?ref=app"
            }
        },
        7 : {
            name : "Open Cards Game",
            type : "Games",
            art : "https://i.imgur.com/nqUr9A3.jpg",
            url : "https://code.sololearn.com/W9W5fl2n5oKe/?ref=app",
            update : {
                version : "1.2",
                date : "7 Oct, 2018",
                versionTxt : "&bull; Bugs Fixed and Some Improvements.",
                img : "https://i.imgur.com/D4BinA6.jpg"
},
            details : {
                seller : "Warith Vatanaplachaigoon",
                size : "0 KB",
                language : "English",
                sort : "12+",
                inapp : "No",
                copy : "Prem Warith &copy; 2018",
                site : "https://www.sololearn.com/Profile/6725227/?ref=app"
            }
        }
    }
    var cout = '';
    for (i in app) {
    cout='<div id="'+app[i].name.toLowerCase().split(" ").join("").replace(/[^A-Za-z0-9 ]/g,"")+'" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><div class="modal-title"><div style="padding:15px;" align="left"><table class="app"><tr><td style="width:90px;"><img src="'+app[i].art+'" alt="'+app[i].name+'" draggable="false"></td><td style="padding-left:5px;"><h4><b>'+app[i].name+'</b></h4><h5 style="color:#7B7A7F;">'+app[i].type+'</h5></td><td style="width:60px;"><div id="#modalDismiss1" class="close" data-dismiss="modal" aria-label="Close"><svg width="25" height="25"><circle cx="12.5" cy="12.5" r="12.5" fill="#010101"></circle><path d="M 8.04 8.04 L16.07 16.07 M 8.04 16.07 L16.07 8.04 Z" style="stroke:#FFFFFF;  fill:none; stroke-width:3;" /></svg></div><div class="install"><a class="code" href="'+app[i].url+'"target="_blank">Get</a></div></td></tr></table></div></div></div><div class="modal-body"><img src="'+app[i].update.img+'" class="inner"><hr><h5><span class="mod-first-letter"><h3><b>What&rsquo;s New</b></h3></span><h5>Version '+app[i].update.version+'<br/>'+app[i].update.date+'</h5><h5 class="mod-first-letter">'+app[i].update.versionTxt+'</h5><hr><h5><span class="mod-first-letter"><h3><b>Details</b></h3></span><div style="width:100%"><div class="mod-first-letter" align="left" style="padding:5px; position:absolute; left:10px;">Seller</div><div align="right" style="padding:5px; position:absolute; right:10px;">'+app[i].details.seller+'</div><hr><div class="mod-first-letter" align="left" style="padding:5px; position:absolute; left:10px;">Size</div><div align="right" style="padding:5px; position:absolute; right:10px;">'+app[i].details.size+'</div><hr><div class="mod-first-letter" align="left" style="padding:5px; position:absolute; left:10px;">Category</div><div align="right" style="padding:5px; position:absolute; right:10px;">'+app[i].type+'</div><hr><div class="mod-first-letter" align="left" style="padding:5px; position:absolute; left:10px;">Language</div><div align="right" style="padding:5px; position:absolute; right:10px;">'+app[i].details.language+'</div><hr><div class="mod-first-letter" align="left" style="padding:5px; position:absolute; left:10px;">Sort by age</div><div align="right" style="padding:5px; position:absolute; right:10px;">'+app[i].details.sort+'</div><hr><div class="mod-first-letter" align="left" style="padding:5px; position:absolute; left:10px;">In-app purchases</div><div align="right" style="padding:5px; position:absolute; right:10px;">'+app[i].details.inapp+'</div><hr><div class="mod-first-letter" align="left" style="padding:5px; position:absolute; left:10px;">Copyright</div><div align="right" style="padding:5px; position:absolute; right:10px;">'+app[i].details.copy+'</div><hr><div class="mod-first-letter" align="left" style="padding:5px; position:absolute; left:10px; color:rgb(0,122,252);"><a href="'+app[i].details.site+'" class="site">Developer&rsquo;s Site</a></div><hr></div></div></div></div></div>';
        $(".store").append('<div class="col-lg-4 col-sm-6" align="center"><div class="thumbnail" data-toggle="modal" data-target="#'+app[i].name.toLowerCase().split(" ").join("").replace(/[^A-Za-z0-9 ]/g,"")+'" align="left"><table class="app"><tr><td style="width:90px;"><img src="'+app[i].art+'" alt="'+app[i].name+'" draggable="false"></td><td style="padding-left:5px;"><h4><b>'+app[i].name+'</b></h4><h5 style="color:#7B7A7F;">'+app[i].type+'</h5></td><td style="width:60px;"><div class="install"><a class="code" href="'+app[i].url+'" target="_blank">Get</a></div></td></tr></table><hr id="hr"></div></div>'+cout);
        cout='';
    }
});