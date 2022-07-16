$(function(){
    var app = {
        1 : {
            name : "Unreal Escaping",
            type : "Catch the terrorist",
            art : "https://phonezgames.xyz/en/icons/unrealescaping_event.png",
            url : "https://phonezgames.xyz/en/games/unrealescaping_event/",
            update : {
                version : "1.0 E",
                date : "March 7, 2022",
                versionTxt : "Special event in support of Ukraine. The essence is very simple, instead of a prisoner, you have to catch yourself, you know who))",
                img : "https://phonezgames.xyz/en/img/unrealescaping_event.png"
},
            details : {
                seller : "PhoneZ Games",
                size : "2,38 MB",
                language : "English",
                sort : "6+",
                inapp : "No",
                copy : "PhoneZ Games; 2022",
                site : "https://phonezgames.xyz/en/games/unrealescaping_event/"
            }
        },
        3 : {
            name : "Clash of Tanks",
            type : "Destroy the terrorist on the tank",
            art : "https://phonezgames.xyz/en/icons/clashoftanks_event.png",
            url : "https://phonezgames.xyz/en/games/clashoftanks_event/",
            update : {
                version : "1.0 E",
                date : "March 7, 2022",
                versionTxt : "Russian warship - go #@th! Most likely, many have already heard the legendary phrase, so let's all support Ukraine together by playing a special Clash of Tanks event, where you are Ukrainian tanks, and you must win Russian!",
                img : "https://phonezgames.xyz/en/img/clashoftanks_event.png"
},
            details : {
                seller : "PhoneZ Games",
                size : "572 KB",
                language : "English",
                sort : "6+",
                inapp : "No",
                copy : "PhoneZ Games; 2022",
                site : "https://phonezgames.xyz/en/games/clashoftanks_event/"
            }
        },
        4 : {
            name : "Kill putins",
            type : "Destroy all 'Putins'",
            art : "https://phonezgames.xyz/en/icons/killputins.png",
            url : "https://phonezgames.xyz/en/games/killputins/",
            update : {
                version : "1.0",
                date : "April 15, 2022",
                versionTxt : "You just need to kill all the putins in the game, poke to play and you will understand))",
                img : "https://phonezgames.xyz/en/img/killputins.png"
},
            details : {
                seller : "PhoneZ Games",
                size : "84 KB",
                language : "English",
                sort : "6+",
                inapp : "No",
                copy : "PhoneZ Games; 2022",
                site : "https://phonezgames.xyz/en/games/killputins/"
            }
        },
        5 : {
            name : "Sniper 2D",
            type : "Hit a target",
            art : "https://phonezgames.xyz/en/icons/sniper2d.png",
            url : "https://phonezgames.xyz/en/games/sniper2d/",
            update : {
                version : "1.0",
                date : "August 19, 2022г.",
                versionTxt : "Test how accurately you can hit the target online!",
                img : "https://phonezgames.xyz/en/img/sniper2d.png"
},
            details : {
                seller : "Github, PhoneZ Games reconstruction",
                size : "24 KB",
                language : "English",
                sort : "6+",
                inapp : "No",
                copy : "PhoneZ Games; 2022",
                site : "https://phonezgames.xyz/en/games/sniper2d/"
            }
        },
        6 : {
            name : "Math Reaction",
            type : "Develops mental arithmetic",
            art : "https://phonezgames.xyz/en/icons/mathreaction.png",
            url : "https://phonezgames.xyz/en/games/mathreaction/",
            update : {
                version : "1.0",
                date : "August 9, 2022г.",
                versionTxt : "Game about mathematical equations. Develop logic and mathematical thinking. There are 3 types of game: 'Normal' - where you have 2 minutes to solve as many examples as possible and at the end you get a score on a 5-point system, 'Time' - where you have to answer as many examples as possible if you answer correctly - time is added, incorrectly - taken away. There is also the most difficult mode - 'Hardcore' - where you have only 3 seconds to give an answer to an easy, and possibly difficult example. Come on, test yourself! ",
                img : "https://phonezgames.xyz/en/img/mathreaction.png"
},
            details : {
                seller : "Github, PhoneZ Games Translations",
                size : "52 KB",
                language : "English",
                sort : "4+",
                inapp : "No",
                copy : "PhoneZ Games; 2022",
                site : "https://phonezgames.xyz/en/games/mathreaction/"
            }
        },
        7 : {
            name : "Space Run",
            type : "Control the space rocket",
            art : "https://phonezgames.xyz/en/icons/spacerun.png",
            url : "https://phonezgames.xyz/en/games/spacerun/",
            update : {
                version : "1.0",
                date : "March 29, 2020",
                versionTxt : "You are a rocket pilot and got caught in a meteor shower. How long will it last - no one knows how long you can survive in this game? Play and find out if you are a born rocket ship driver?",
                img : "https://phonezgames.xyz/en/img/spacerun.png"
},
            details : {
                seller : "Github, PhoneZ Games Translations",
                size : "12 KB",
                language : "English",
                sort : "4+",
                inapp : "No",
                copy : "PhoneZ Games; 2022",
                site : "https://phonezgames.xyz/en/games/spacerun/"
            }
        },
        8 : {
            name : "SpeedRider",
            type : "Endless racing game",
            art : "https://phonezgames.xyz/en/icons/speedrider.png",
            url : "https://phonezgames.xyz/en/games/speedrider/",
            update : {
                version : "1.1",
                date : "January 7, 2018",
                versionTxt : "This is an endless racing computer game. Simple controls and the meaning of the game, 'sticky' is still the same :)",
                img : "https://phonezgames.xyz/en/img/speedrider.png"
},
            details : {
                seller : "Github, PhoneZ Games reconstruction",
                size : "120 KB",
                language : "English",
                sort : "4+",
                inapp : "No",
                copy : "PhoneZ Games; 2022",
                site : "https://phonezgames.xyz/en/games/speedrider/"
            }
        }
    }
    var cout = '';
    for (i in app) {
    cout='<div id="'+app[i].name.toLowerCase().split(" ").join("").replace(/[^A-Za-z0-9 ]/g,"")+'" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><div class="modal-title"><div style="padding:15px;" align="left"><table class="app"><tr><td style="width:90px;"><img src="'+app[i].art+'" alt="'+app[i].name+'" draggable="false"></td><td style="padding-left:5px;"><h4><b>'+app[i].name+'</b></h4><h5 style="color:#7B7A7F;">'+app[i].type+'</h5></td><td style="width:60px;"><div id="#modalDismiss1" class="close" data-dismiss="modal" aria-label="Close"><svg width="25" height="25"><circle cx="12.5" cy="12.5" r="12.5" fill="#010101"></circle><path d="M 8.04 8.04 L16.07 16.07 M 8.04 16.07 L16.07 8.04 Z" style="stroke:#FFFFFF;  fill:none; stroke-width:3;" /></svg></div><div class="install"><a class="code" href="'+app[i].url+'"target="_blank">Play</a></div></td></tr></table></div></div></div><div class="modal-body"><img src="'+app[i].update.img+'" class="inner"><hr><h5><span class="mod-first-letter"><h3><b>Description</b></h3></span><h5>Version '+app[i].update.version+'<br/>'+app[i].update.date+'</h5><h5 class="mod-first-letter">'+app[i].update.versionTxt+'</h5><hr><h5><span class="mod-first-letter"><h3><b>Details</b></h3></span><div style="width:100%"><div class="mod-first-letter" align="left" style="padding:5px; position:absolute; left:10px;">Seller</div><div align="right" style="padding:5px; position:absolute; right:10px;">'+app[i].details.seller+'</div><hr><div class="mod-first-letter" align="left" style="padding:5px; position:absolute; left:10px;">Size</div><div align="right" style="padding:5px; position:absolute; right:10px;">'+app[i].details.size+'</div><hr><div class="mod-first-letter" align="left" style="padding:5px; position:absolute; left:10px;">Short description</div><div align="right" style="padding:5px; position:absolute; right:10px;">'+app[i].type+'</div><hr><div class="mod-first-letter" align="left" style="padding:5px; position:absolute; left:10px;">Language</div><div align="right" style="padding:5px; position:absolute; right:10px;">'+app[i].details.language+'</div><hr><div class="mod-first-letter" align="left" style="padding:5px; position:absolute; left:10px;">Sort by age</div><div align="right" style="padding:5px; position:absolute; right:10px;">'+app[i].details.sort+'</div><hr><div class="mod-first-letter" align="left" style="padding:5px; position:absolute; left:10px;">In-game purchases</div><div align="right" style="padding:5px; position:absolute; right:10px;">'+app[i].details.inapp+'</div><hr><div class="mod-first-letter" align="left" style="padding:5px; position:absolute; left:10px;">Copyright</div><div align="right" style="padding:5px; position:absolute; right:10px;">'+app[i].details.copy+'</div><hr><div class="mod-first-letter" align="left" style="padding:5px; position:absolute; left:10px; color:rgb(0,122,252);"></div><hr></div></div></div></div></div>';
        $(".store").append('<div class="col-lg-4 col-sm-6" align="center"><div class="thumbnail" data-toggle="modal" data-target="#'+app[i].name.toLowerCase().split(" ").join("").replace(/[^A-Za-z0-9 ]/g,"")+'" align="left"><table class="app"><tr><td style="width:90px;"><img src="'+app[i].art+'" alt="'+app[i].name+'" draggable="false"></td><td style="padding-left:5px;"><h4><b>'+app[i].name+'</b></h4><h5 style="color:#7B7A7F;">'+app[i].type+'</h5></td><td style="width:60px;"><div class="install"><a class="code" href="'+app[i].url+'" target="_blank">Play</a></div></td></tr></table><hr id="hr"></div></div>'+cout);
        cout='';
    
    }
});