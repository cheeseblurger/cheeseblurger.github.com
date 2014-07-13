// Created by iWeb 3.0.4 local-build-20140713

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_3:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000}),shadow_1:new IWShadow({blurRadius:3,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.750000}),shadow_0:new IWShadow({blurRadius:3,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.750000}),shadow_2:new IWShadow({blurRadius:3,offset:new IWPoint(0.0000,0.0000),color:'#000000',opacity:0.750000}),stroke_0:new IWEmptyStroke()});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Home_files/HomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');IMpreload('Home_files','shapeimage_3','0');applyEffects()}
function onPageUnload()
{Widget.onunload();}
