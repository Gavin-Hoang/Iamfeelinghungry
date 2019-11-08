// dropdown menu
!function(e,t){"function"==typeof define&&define.amd?define(function(){return t(e)}):"object"==typeof module&&module.exports?module.exports=t(e):(void 0===e.tail&&(e.tail={}),e.tail.select=t(e),"undefined"!=typeof jQuery&&(jQuery.fn.tailselect=function(e){var t,i=[];return this.each(function(){!1!==(t=tail.select(this,e))&&i.push(t)}),1===i.length?i[0]:0!==i.length&&i}),"undefined"!=typeof MooTools&&Element.implement({tailselect:function(e){return new tail.select(this,e)}}))}(window,function(e){"use strict";var r=e,h=e.document;function b(e,t){return!!(e&&"classList"in e)&&e.classList.contains(t)}function c(e,t){return e&&"classList"in e?e.classList.add(t):void 0}function d(e,t){return e&&"classList"in e?e.classList.remove(t):void 0}function s(e,t,i){if(CustomEvent&&CustomEvent.name)var n=new CustomEvent(t,i);else(n=h.createEvent("CustomEvent")).initCustomEvent(t,!!i.bubbles,!!i.cancelable,i.detail);return e.dispatchEvent(n)}function u(e,t){if("function"==typeof Object.assign)return Object.assign({},e,t||{});var i=Object.constructor();for(var n in e)i[n]=n in t?t[n]:e[n];return i}function g(e,t){var i=h.createElement(e);return i.className=t&&t.join?t.join(" "):t||"",i}var a,p=function(e,t){if((e="string"==typeof e?h.querySelectorAll(e):e)instanceof NodeList||e instanceof HTMLCollection||e instanceof Array){for(var i=[],n=e.length,s=0;s<n;s++)i.push(new p(e[s],u(t,{})));return 1===i.length?i[0]:0!==i.length&&i}if(!(e instanceof Element&&this instanceof p))return e instanceof Element&&new p(e,t);if(p.inst[e.getAttribute("data-tail-select")])return p.inst[e.getAttribute("data-tail-select")];if(e.getAttribute("data-select")){var l=JSON.parse(e.getAttribute("data-select").replace(/\'/g,'"'));l instanceof Object&&(t=u(t,l))}var o=e.getAttribute("placeholder")||e.getAttribute("data-placeholder"),r="bindSourceSelect",a="sourceHide";return(t=t instanceof Object?t:{}).multiple="multiple"in t?t.multiple:e.multiple,t.disabled="disabled"in t?t.disabled:e.disabled,t.placeholder=o||t.placeholder||null,t.width="auto"===t.width?e.offsetWidth+50:t.width,t.sourceBind=r in t?t[r]:t.sourceBind||!1,t.sourceHide=a in t?t[a]:t.sourceHide||!0,t.multiLimit=0<=t.multiLimit?t.multiLimit:1/0,this.e=e,this.id=++p.count,this.con=u(p.defaults,t),this.events={},(p.inst["tail-"+this.id]=this).init().bind()};return p.version="0.5.16",p.status="beta",p.count=0,p.inst={},p.defaults={animate:!0,classNames:null,csvOutput:!1,csvSeparator:",",descriptions:!1,deselect:!1,disabled:!1,height:350,hideDisabled:!1,hideSelected:!1,items:{},locale:"en",linguisticRules:{"е":"ё",a:"ä",o:"ö",u:"ü",ss:"ß"},multiple:!1,multiLimit:1/0,multiPinSelected:!1,multiContainer:!1,multiShowCount:!0,multiShowLimit:!1,multiSelectAll:!1,multiSelectGroup:!0,openAbove:null,placeholder:null,search:!1,searchConfig:["text","value"],searchFocus:!0,searchMarked:!0,searchMinLength:1,searchDisabled:!0,sortItems:!1,sortGroups:!1,sourceBind:!1,sourceHide:!0,startOpen:!1,stayOpen:!1,width:null,cbComplete:void 0,cbEmpty:void 0,cbLoopItem:void 0,cbLoopGroup:void 0},p.strings={de:{all:"Alle",none:"Keine",empty:"Keine Optionen verfügbar",emptySearch:"Keine Optionen gefunden",limit:"Keine weiteren Optionen wählbar",placeholder:"Wähle eine Option...",placeholderMulti:"Wähle bis zu :limit Optionen...",search:"Tippen zum suchen",disabled:"Dieses Feld ist deaktiviert"},en:{all:"All",none:"None",empty:"No Options available",emptySearch:"No Options found",limit:"You can't select more Options",placeholder:"Select an Option...",placeholderMulti:"Select up to :limit Options...",search:"Type in to search...",disabled:"This Field is disabled"},es:{all:"Todos",none:"Ninguno",empty:"No hay opciones disponibles",emptySearch:"No se encontraron opciones",limit:"No puedes seleccionar mas opciones",placeholder:"Selecciona una opción...",placeholderMulti:"Selecciona hasta :límite de opciones...",search:"Escribe dentro para buscar...",disabled:"Este campo esta deshabilitado"},fi:{all:"Kaikki",none:"Ei mitään",empty:"Ei vaihtoehtoja",emptySearch:"Etsimääsi vaihtoehtoa ei löytynyt",limit:"Muita vaihtoehtoja ei voi valita",placeholder:"Valitse...",placeholderMulti:"Valitse maksimissaan :limit...",search:"Hae tästä...",disabled:"Kenttä on poissa käytöstä"},fr:{all:"Tous",none:"Aucun",empty:"Aucune option disponible",emptySearch:"Aucune option trouvée",limit:"Aucune autre option sélectionnable",placeholder:"Choisissez une option...",placeholderMulti:"Choisissez jusqu'à :limit option(s)...",search:"Rechercher...",disabled:"Ce champs est désactivé"},it:{all:"Tutti",none:"Nessuno",empty:"Nessuna voce disponibile",emptySearch:"Nessuna voce trovata",limit:"Non puoi selezionare più Voci",placeholder:"Seleziona una Voce",placeholderMulti:"Selezione limitata a :limit Voci...",search:"Digita per cercare...",disabled:"Questo Campo è disabilitato"},no:{all:"Alle",none:"Ingen",empty:"Ingen valg tilgjengelig",emptySearch:"Ingen valg funnet",limit:"Du kan ikke velge flere",placeholder:"Velg...",placeholderMulti:"Velg opptil :limit...",search:"Søk...",disabled:"Dette feltet er deaktivert"},pt_BR:{all:"Todas",none:"Nenhuma",empty:"Nenhuma opção disponível",emptySearch:"Nenhuma opção encontrada",limit:"Não é possível selecionar outra opção",placeholder:"Escolha uma opção ...",placeholderMulti:"Escolha até: :limit opção(ões) ...",search:"Buscar ...",disabled:"Campo desativado"},ru:{all:"Все",none:"Ничего",empty:"Нет доступных вариантов",emptySearch:"Ничего не найдено",limit:"Вы не можете выбрать больше вариантов",placeholder:"Выберите вариант...",placeholderMulti:function(e){var t=e[":limit"];return"Выбор до :limit "+["варианта","вариантов","вариантов"][4<t%100&&t%100<20?2:[2,0,1,1,1,2][t%10<5?t%10:5]]+" ..."},search:"Начните набирать для поиска ...",disabled:"Поле отключено"},tr:{all:"Tümü",none:"Hiçbiri",empty:"Seçenek yok",emptySearch:"Seçenek bulunamadı",limit:"Daha fazla Seçenek seçemezsiniz",placeholder:"Bir Seçenek seçin...",placeholderMulti:"En fazla :limit Seçenek seçin...",search:"Aramak için yazın...",disabled:"Bu Alan kullanılamaz"},modify:function(e,t,i){if(!(e in this))return!1;if(t instanceof Object)for(var n in t)this.modify(e,n,t[n]);else this[e][t]="string"==typeof i?i:this[e][t];return!0},register:function(e,t){return"string"==typeof e&&t instanceof Object&&(this[e]=t,!0)}},p.prototype={_e:function(e,t,i){if(!(e in this.__))return i||e;if("function"==typeof(e=this.__[e])&&(e=e.call(this,t)),"object"==typeof t)for(var n in t)e=e.replace(n,t[n]);return e},init:function(){var t=this,e=["tail-select"],i=this.con,n=!0===i.classNames?this.e.className:i.classNames;e.push(n&&n.push?n.join(" "):n&&n.split?n:"no-classes"),i.hideSelected&&e.push("hide-selected"),i.hideDisabled&&e.push("hide-disabled"),0==i.multiLimit&&e.push("disabled"),i.multiple&&e.push("multiple"),i.deselect&&e.push("deselect"),i.disabled&&e.push("disabled"),this.__=u(p.strings.en,p.strings[i.locale]||{}),this._init=!0,this._query=!1,this.select=g("DIV",e),this.label=g("DIV","select-label"),this.dropdown=g("DIV","select-dropdown"),this.search=g("DIV","dropdown-search"),this.csvInput=g("INPUT","select-search"),null!==this.e.getAttribute("tabindex")?this.select.setAttribute("tabindex",this.e.getAttribute("tabindex")):this.select.setAttribute("tabindex",0),i.width&&/^[0-9.]+(?:cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|\%)$/i.test(i.width)?this.select.style.width=i.width:i.width&&!isNaN(parseFloat(i.width,10))&&(this.select.style.width=i.width+"px"),this.select.appendChild(this.label),isNaN(parseInt(i.height,10))||(this.dropdown.style.maxHeight=parseInt(i.height,10)+"px"),i.search&&(this.search.innerHTML='<input type="text" class="search-input" />',this.search.children[0].placeholder=this._e("search"),this.search.children[0].addEventListener("input",function(e){t.query.call(t,this.value.length>i.searchMinLength?this.value:void 0)}),this.dropdown.appendChild(this.search)),this.select.appendChild(this.dropdown),this.csvInput.type="hidden",i.csvOutput&&(this.csvInput.name=this.e.name,this.e.removeAttribute("name"),this.select.appendChild(this.csvInput)),i.multiple&&i.multiContainer&&(h.querySelector(i.multiContainer)?(this.container=h.querySelector(i.multiContainer),this.container.className+=" tail-select-container"):!0===i.multiContainer&&(this.container=this.label,this.container.className+=" tail-select-container")),this.options=new a(this.e,this);for(var s=this.e.options.length,l=0;l<s;l++)this.options.set(this.e.options[l],!1);for(var o in i.items)"string"==typeof i.items[o]&&(i.items[o]={value:i.items[o]}),this.options.add(i.items[o].key||o,i.items[o].value,i.items[o].group,i.items[o].selected,i.items[o].disabled,i.items[o].description);return this.query(),this.e.nextElementSibling?this.e.parentElement.insertBefore(this.select,this.e.nextElementSibling):this.e.parentElement.appendChild(this.select),i.sourceHide&&("none"==this.e.style.display?(this.select.style.display="none",this.e.setAttribute("data-select-hidden","display")):"hidden"==this.e.style.visibility?(this.select.style.visibiltiy="hidden",this.e.setAttribute("data-select-hidden","visibility")):(this.e.style.display="none",this.e.setAttribute("data-select-hidden","0"))),this.e.setAttribute("data-tail-select","tail-"+this.id),t.con.startOpen&&this.open(i.animate),(i.cbComplete||function(){}).call(this,this.select),this._init=!1,this},bind:function(){var a=this;return h.addEventListener("keydown",function(e){var t,i,n,s,l,o=e.keyCode||e.which;if(!(32==o&&a.select===document.activeElement)&&(!b(a.select,"active")||[13,27,38,40].indexOf(o)<0))return!1;if(e.preventDefault(),e.stopPropagation(),32===o)return a.open(a.con.animate);if(13==o&&(t=a.dropdown.querySelector(".dropdown-option.hover:not(.disabled)"))&&a.options.select.call(a.options,t),27==o||13==o)return a.close(a.con.animate);if(t=a.dropdown.querySelector(".dropdown-option.hover:not(.disabled)"))for(d(t,"hover"),n=[(40==o?"next":"previous")+"ElementSibling"];(t=null!==(s=t[n])&&"LI"==t.tagName?s:null!==(s=t.parentElement[n])&&0<s.children.length&&"UL"==s.tagName&&s.children[40==o?0:s.children.length-1])&&(!b(t,"dropdown-option")||b(t,"disabled")););if(t||40!=o?t||38!=o||(t=(l=a.dropdown.querySelectorAll(".dropdown-option:not(.disabled)"))[l.length-1]):t=a.dropdown.querySelector(".dropdown-option:not(.disabled)"),t&&(i=a.dropdown.querySelector(".dropdown-inner"))){var r=function(e){for(var t={top:e.offsetTop,height:e.offsetHeight};(e=e.parentElement)!=i;)t.top+=e.offsetTop;return t}(t);c(t,"hover"),i.scrollTop=Math.max(0,r.top-2*r.height)}return!0}),h.addEventListener("click",function(e){if(!b(a.select,"active")||b(a.select,"idle"))return!1;if(!0===a.con.stayOpen)return!1;for(var t=[a.e,a.select,a.container],i=t.length,n=0;n<i;n++){if(t[n]&&(t[n].contains(e.target)||t[n]==e.target))return!1;if(!e.target.parentElement)return!1}return a.close.call(a,a.con.animate)}),this.con.sourceBind&&this.e.addEventListener("change",function(e){if(null!=e.detail)return!1;if(e.preventDefault(),e.stopPropagation(),!this.multiple&&this.selectedIndex)a.options.select.call(a.options,this.options[this.selectedIndex]);else{var t=[].concat(a.options.selected),i=[].filter.call(this.querySelectorAll("option:checked"),function(e){return!(0<=t.indexOf(e))||(t.splice(t.indexOf(e),1),!1)});a.options.walk.call(a.options,"unselect",t),a.options.walk.call(a.options,"select",i)}}),!0},callback:function(e,t,i){var n="[data-key='"+e.key.replace(/('|\\)/g,"\\$1")+"'][data-group='"+e.group.replace(/('|\\)/g,"\\$1")+"']";if("rebuild"==t)return this.query();var s=this.dropdown.querySelector(n);return s&&0<=["select","disable"].indexOf(t)?c(s,"select"==t?"selected":"disabled"):s&&0<=["unselect","enable"].indexOf(t)&&d(s,"unselect"==t?"selected":"disabled"),this.update(e),!0===i||this.trigger("change",e,t)},trigger:function(e){if(this._init)return!1;var t={bubbles:!1,cancelable:!0,detail:{args:arguments,self:this}};"change"==e&&arguments[2]&&0<=arguments[2].indexOf("select")&&(s(this.e,"input",t),s(this.e,"change",t)),s(this.select,"tail::"+e,t);var i,n=[];return Array.prototype.map.call(arguments,function(e,t){0<t&&n.push(e)}),(this.events[e]||[]).forEach(function(e){(i=[].concat(n)).push(e.args||null),(e.cb||function(){}).apply(t.detail.self,i)}),!0},calc:function(){var e=this.dropdown.cloneNode(!0),t=this.con.height,i=0,n=this.dropdown.querySelector(".dropdown-inner");(e=this.dropdown.cloneNode(!0)).style.cssText="height:auto;min-height:auto;max-height:none;opacity:0;display:block;visibility:hidden;",e.style.maxHeight=this.con.height+"px",e.className+=" cloned",this.dropdown.parentElement.appendChild(e),t=t>e.clientHeight?e.clientHeight:t,this.con.search&&(i=e.querySelector(".dropdown-search").clientHeight),this.dropdown.parentElement.removeChild(e);var s=this.select.getBoundingClientRect(),l=r.innerHeight-(s.top+s.height),o=l<t+i&&s.top>l;return!0===this.con.openAbove||!1!==this.con.openAbove&&o?(o=!0,t=Math.min(t,s.top-10),c(this.select,"open-top")):(o=!1,t=Math.min(t,l-10),d(this.select,"open-top")),n&&(this.dropdown.style.maxHeight=t+"px",n.style.maxHeight=t-i+"px"),this},query:function(e,t){var i,n,s,l,o,r,a=this,c=this.con,h="getAttribute",d=g("DIV","dropdown-inner"),u=e?"finder":"walker",p=e?[e,t]:[c.sortItems,c.sortGroups];for(this._query="string"==typeof e&&e;i=this.options[u].apply(this.options,p);){if(!s||s&&s[h]("data-group")!==i.group){if(!((n=(c.cbLoopGroup||this.cbGroup).call(this,i.group,e,d))instanceof Element))break;(s=n).setAttribute("data-group",i.group),d.appendChild(s)}if(null!==(l=(c.cbLoopItem||this.cbItem).call(this,i,s,e,d))){if(!1===l)break;l.setAttribute("data-key",i.key),l.setAttribute("data-group",i.group),l.addEventListener("click",function(e){if(!this.hasAttribute("data-key"))return!1;var t=this[h]("data-key"),i=this[h]("data-group")||"#";a.options.toggle.call(a.options,t,i)&&(!1!==a.con.stayOpen||a.con.multiple||a.close.call(a,a.con.animate))}),s.appendChild(l)}}var f=d.querySelectorAll("*[data-key]").length;0==f&&(this.con.cbEmpty||function(e){var t=g("SPAN","dropdown-empty");t.innerText=this._e("empty"),e.appendChild(t)}).call(this,d,e),0<f&&c.multiple&&c.multiLimit==1/0&&c.multiSelectAll&&(o=g("BUTTON","tail-all"),r=g("BUTTON","tail-none"),o.innerText=this._e("all"),o.addEventListener("click",function(e){e.preventDefault();var t=a.dropdown.querySelectorAll(".dropdown-inner .dropdown-option");a.options.walk.call(a.options,"select",t)}),r.innerText=this._e("none"),r.addEventListener("click",function(e){e.preventDefault();var t=a.dropdown.querySelectorAll(".dropdown-inner .dropdown-option");a.options.walk.call(a.options,"unselect",t)}),(l=g("SPAN","dropdown-action")).appendChild(o),l.appendChild(r),d.insertBefore(l,d.children[0]));var m=this.dropdown.querySelector(".dropdown-inner");return this.dropdown[(m?"replace":"append")+"Child"](d,m),b(this.select,"active")&&this.calc(),this.updateCSV().updateLabel()},cbGroup:function(e,t){var i,n,s=g("UL","dropdown-optgroup"),l=this;return"#"==e||(s.innerHTML='<li class="optgroup-title"><b>'+e+"</b></li>",this.con.multiple&&this.con.multiLimit==1/0&&this.con.multiSelectAll&&(i=g("BUTTON","tail-none"),n=g("BUTTON","tail-all"),i.innerText=this._e("none"),i.addEventListener("click",function(e){e.preventDefault();var t=this.parentElement.parentElement.getAttribute("data-group");l.options.all.call(l.options,"unselect",t)}),n.innerText=this._e("all"),n.addEventListener("click",function(e){e.preventDefault();var t=this.parentElement.parentElement.getAttribute("data-group");l.options.all.call(l.options,"select",t)}),s.children[0].appendChild(i),s.children[0].appendChild(n))),s},cbItem:function(e,t,i){var n=g("LI","dropdown-option"+(e.selected?" selected":"")+(e.disabled?" disabled":""));return i&&0<i.length&&this.con.searchMarked?(i=this.options.applyLinguisticRules(i),n.innerHTML=e.value.replace(new RegExp("("+i+")","i"),"<mark>$1</mark>")):n.innerText=e.value,this.con.descriptions&&e.description&&(n.innerHTML+='<span class="option-description">'+e.description+"</span>"),n},update:function(e){return this.updateLabel().updateContainer(e).updatePin(e).updateCSV(e)},updateLabel:function(e){if(this.container==this.label&&0<this.options.selected.length)return this.label.querySelector(".label-inner")&&this.label.removeChild(this.label.querySelector(".label-inner")),this.label.querySelector(".label-count")&&this.label.removeChild(this.label.querySelector(".label-count")),this;var t,i=this.con,n=this.options.selected.length;return"string"!=typeof e&&(e=i.disabled?"disabled":0==this.dropdown.querySelectorAll("*[data-key]").length?"empty"+(b(this.select,"in-search")?"Search":""):i.multiLimit<=n?"limit":!i.multiple&&0<this.options.selected.length?this.options.selected[0].innerText:"string"==typeof i.placeholder?i.placeholder:"placeholder"+(i.multiple&&i.multiLimit<1/0?"Multi":"")),e='<span class="label-inner">'+(e=this._e(e,{":limit":i.multiLimit},e))+"</span>",t=i.multiShowLimit&&i.multiLimit<1/0,i.multiple&&i.multiShowCount&&(e=(e='<span class="label-count">:c</span>'+e).replace(":c",n+(t?" / "+i.multiLimit:""))),this.label.innerHTML=e,this},updateContainer:function(e){if(!this.container||!this.con.multiContainer)return this;var t="[data-group='"+e.group+"'][data-key='"+e.key+"']";if(this.container.querySelector(t))return e.selected||this.container.removeChild(this.container.querySelector(t)),this;if(e.selected){var n=this,i=g("DIV","select-handle");i.innerText=e.value+"\xa0\xa0\xa0X",i.setAttribute("data-key",e.key),i.setAttribute("data-group",e.group),i.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation();var t=this.getAttribute("data-key"),i=this.getAttribute("data-group");n.options.unselect.call(n.options,t,i)}),this.container.appendChild(i)}return this},updatePin:function(e){var t=this.dropdown.querySelector(".dropdown-inner ul"),i="li[data-key='"+e.key+"'][data-group='"+e.group+"']";if(!this.con.multiPinSelected||!t||!1!==this._query)return this;if(i=this.dropdown.querySelector(i),e.selected)t.insertBefore(i,t.children[0]);else{for(var n=this.dropdown.querySelector("ul[data-group='"+e.group+"']"),s=this.options[e.index-1],l=!1;s&&s.group==e.group&&!(l=n.querySelector("li[data-key='"+s.key+"']"));)s=this.options[s.index-1];l&&l.nextElementSibling?n.insertBefore(i,l.nextElementSibling):n.appendChild(i)}return this},updateCSV:function(e){if(!this.csvInput||!this.con.csvOutput)return this;for(var t=[],i=this.options.selected.length,n=0;n<i;n++)t.push(this.options.selected[n].value);return this.csvInput.value=t.join(this.con.csvSeparator||","),this},open:function(e){if(b(this.select,"active")||b(this.select,"idle")||this.con.disabled)return!1;this.calc();function n(){c(s.select,"active"),d(s.select,"idle"),this.dropdown.style.height="auto",this.dropdown.style.overflow="visible",this.label.removeAttribute("style"),this.con.search&&this.con.searchFocus&&this.dropdown.querySelector("input").focus(),this.trigger.call(this,"open")}var s=this,l=this.dropdown.style;return!1!==e?(this.label.style.zIndex=25,this.dropdown.style.cssText+="height:0;display:block;overflow:hidden;",c(s.select,"idle"),function e(){var t=parseInt(l.height,10),i=parseInt(l.maxHeight,10);if(i<=t)return n.call(s);l.height=(i<t+50?i:t+50)+"px",setTimeout(e,20)}()):(l.cssText="height:"+l.maxHeight+";display:block;overflow:hidden;",n.call(this)),this},close:function(e){if(!b(this.select,"active")||b(this.select,"idle"))return!1;function t(){d(this.select,"active"),d(this.select,"idle"),this.dropdown.removeAttribute("style"),this.dropdown.querySelector(".dropdown-inner").removeAttribute("style"),this.trigger.call(this,"close")}var i=this,n=this.dropdown;return!1!==e?(c(this.select,"idle"),this.dropdown.style.overflow="hidden",function e(){if(parseInt(n.offsetHeight,10)-50<=0)return t.call(i);n.style.height=parseInt(n.offsetHeight,10)-50+"px",setTimeout(e,20)}()):t.call(this),this},toggle:function(e){return b(this.select,"active")?this.close(e):b(this.select,"idle")?this:this.open(e)},remove:function(){if(this.e.removeAttribute("data-tail-select"),this.e.hasAttribute("data-select-hidden")&&("0"==this.e.getAttribute("data-select-hidden")&&this.e.style.removeProperty("display"),this.e.removeAttribute("data-select-hidden")),Array.prototype.map.call(this.e.querySelectorAll("[data-select-option='add']"),function(e){e.parentElement.removeChild(e)}),Array.prototype.map.call(this.e.querySelectorAll("[data-select-optgroup='add']"),function(e){e.parentElement.removeChild(e)}),this.e.name=this.csvInput.hasAttribute("name")?this.csvInput.name:this.e.name,this.select.parentElement&&this.select.parentElement.removeChild(this.select),this.container)for(var e=this.container.querySelectorAll(".select-handle"),t=e.length,i=0;i<t;i++)this.container.removeChild(e[i]);return this},reload:function(){return this.remove().init()},config:function(e,t,i){if(e instanceof Object){for(var n in e)this.config(n,e[n],!1);return this.reload(),this.con}return void 0===e?this.con:e in this.con&&(void 0===t?this.con[e]:(this.con[e]=t,!1!==i&&this.reload(),this))},enable:function(e){return d(this.select,"disabled"),this.e.disabled=!1,(this.con.disabled=!1)===e?this:this.reload()},disable:function(e){return c(this.select,"disabled"),this.e.disabled=!0,!(this.con.disabled=!0)===e?this:this.reload()},on:function(e,t,i){return!(["open","close","change"].indexOf(e)<0||"function"!=typeof t)&&(e in this.events||(this.events[e]=[]),this.events[e].push({cb:t,args:i instanceof Array?i:[]}),this)},value:function(){return 0==this.options.selected.length?null:this.con.multiple?this.options.selected.map(function(e){return e.value}):this.options.selected[0].value}},(a=p.options=function(e,t){return this instanceof a?(this.self=t,this.element=e,this.length=0,this.selected=[],this.disabled=[],this.items={"#":{}},this.groups={},this):new a(e,t)}).prototype={_r:function(e){return e.replace("disabled","disable").replace("enabled","enable").replace("selected","select").replace("unselected","unselect")},get:function(e,t){var i="getAttribute";if("object"==typeof e&&e.key&&e.group)t=e.group||t,e=e.key;else if(e instanceof Element)"OPTION"==e.tagName?(t=e.parentElement.label||"#",e=e.value||e.innerText):e.hasAttribute("data-key")&&(t=e[i]("data-group")||e.parentElement[i]("data-group")||"#",e=e[i]("data-key"));else if("string"!=typeof e)return!1;return e=/^[0-9]+$/.test(e)?"_"+e:e,t in this.items&&this.items[t][e]},set:function(e,t){var i=e.value||e.innerText,n=e.parentElement.label||"#";if(n in this.items||(this.items[n]={},this.groups[n]=e.parentElement),i in this.items[n])return!1;var s=/^[0-9]+$/.test(i)?"_"+i:i,l=this.self.con;if(l.multiple&&this.selected.length>=l.multiLimit&&(e.selected=!1),!e.selected||!l.deselect||e.hasAttribute("selected")&&0!=l.multiLimit||(e.selected=!1,e.parentElement.selectedIndex=-1),e.hasAttribute("data-description")){var o=g("SPAN");o.innerHTML=e.getAttribute("data-description"),e.setAttribute("data-description",o.innerHTML)}return this.items[n][s]={key:i,value:e.text,description:e.getAttribute("data-description")||null,group:n,option:e,optgroup:"#"!=n?this.groups[n]:void 0,selected:e.selected,disabled:e.disabled,hidden:e.hidden||!1},this.length++,e.selected&&this.select(this.items[n][s]),e.disabled&&this.disable(this.items[n][s]),!t||this.self.callback(this.items[n][i],"rebuild")},add:function(e,t,i,n,s,l,o){if(e instanceof Object){for(var r in e)this.add(e[r].key||r,e[r].value,e[r].group,e[r].selected,e[r].disabled,e[r].description,!1);return this.self.query()}if(this.get(e,i))return!1;if("#"!==(i="string"==typeof i?i:"#")&&!(i in this.groups)){var a=g("OPTGROUP");a.label=i,a.setAttribute("data-select-optgroup","add"),this.element.appendChild(a),this.items[i]={},this.groups[i]=a}this.self.con.multiple&&this.selected.length>=this.self.con.multiLimit&&(n=!1),s=!!s;var c=h.createElement("OPTION");return c.value=e,c.selected=n,c.disabled=s,c.innerText=t,c.setAttribute("data-select-option","add"),l&&0<l.length&&c.setAttribute("data-description",l),("#"==i?this.element:this.groups[i]).appendChild(c),this.set(c,o)},move:function(e,t,i,n){if(!(e=this.get(e,t)))return!1;if("#"!==i&&!(i in this.groups)){var s=g("OPTGROUP");s.label=i,this.element.appendChild(s),this.items[i]={},this.groups[i]=s,this.groups[i].appendChild(e.option)}return delete this.items[e.group][e.key],e.group=i,e.optgroup=this.groups[i]||void 0,this.items[i][e.key]=e,!n||this.self.query()},remove:function(e,t,i){if(!(e=this.get(e,t)))return!1;e.selected&&this.unselect(e),e.disabled&&this.enable(e),e.option.parentElement.removeChild(e.option);var n=/^[0-9]+$/.test(e.key)?"_"+e.key:e.key;return delete this.items[e.group][n],this.length--,0===Object.keys(this.items[e.group]).length&&(delete this.items[e.group],delete this.groups[e.group]),!i||this.self.query()},is:function(e,t,i){e=this._r(e);var n=this.get(t,i);return!n||["select","unselect","disable","enable"].indexOf(e)<0?null:"disable"==e||"enable"==e?"disable"==e?n.disabled:!n.disabled:("select"==e||"unselect"==e)&&("select"==e?n.selected:!n.selected)},handle:function(e,t,i,n){var s=this.get(t,i);e=this._r(e);if(!s||["select","unselect","disable","enable"].indexOf(e)<0)return null;if("disable"==e||"enable"==e)return s.option in this.disabled||"disable"!=e?s.option in this.disabled&&"enable"==e&&this.disabled.splice(this.disabled.indexOf(s.option),1):this.disabled.push(s.option),s.disabled="disable"==e,s.option.disabled="disable"==e,this.self.callback.call(this.self,s,e);var l=b(this.self.select,"disabled")||s.disabled||s.option.disabled,o=this.self.con.multiple&&this.self.con.multiLimit<=this.selected.length,r=!this.self.con.multiple&&0<this.selected.indexOf(s.option),a=0==this.self.con.multiLimit&&1==this.self.con.deselect,c=!this.self.con.multiple&&!this.self.con.deselect&&!0!==n;if("select"==e){if(l||o||a||r)return!1;if(!this.self.con.multiple)for(var h in this.selected)this.unselect(this.selected[h],void 0,!0);this.selected.indexOf(s.option)<0&&this.selected.push(s.option)}else if("unselect"==e){if(l||c)return!1;this.selected.splice(this.selected.indexOf(s.option),1)}return s.selected="select"==e,s.option.selected="select"==e,s.option[(6<e.length?"remove":"set")+"Attribute"]("selected","selected"),this.self.callback.call(this.self,s,e,n)},enable:function(e,t){return this.handle("enable",e,t,!1)},disable:function(e,t){return this.handle("disable",e,t,!1)},select:function(e,t){return this.handle("select",e,t,!1)},unselect:function(e,t,i){return this.handle("unselect",e,t,i)},toggle:function(e,t){return!!(e=this.get(e,t))&&this.handle(e.selected?"unselect":"select",e,t,!1)},invert:function(t){if(t=this._r(t),0<=["enable","disable"].indexOf(t))var i=this.disabled,n="enable"==t?"disable":"enable";else if(0<=["select","unselect"].indexOf(t))i=this.selected,n="select"==t?"unselect":"select";var e=Array.prototype.filter.call(this,function(e){return!(e in i)}),s=this;return[].concat(i).forEach(function(e){s.handle.call(s,n,e)}),[].concat(e).forEach(function(e){s.handle.call(s,t,e)}),!0},all:function(t,i){var n=this,e=this;return i in this.items?e=Object.keys(this.items[i]):0<=["unselect","enable"].indexOf(t)&&(e=[].concat("unselect"==t?this.selected:this.disabled)),Array.prototype.forEach.call(e,function(e){n.handle.call(n,t,e,i,!1)}),!0},walk:function(t,e,i){if(e instanceof Array||e.length)for(var n=e.length,s=0;s<n;s++)this.handle.apply(this,[t,e[s],null].concat(i));else if(e instanceof Object){var l=this;if(e.forEach)e.forEach(function(e){l.handle.apply(l,[t,e,null].concat(i))});else for(var o in e)("string"==typeof e[o]||"number"==typeof e[o]||e[o]instanceof Element)&&this.handle.apply(this,[t,e[o],o in this.items?o:null]).concat(i)}return this},applyLinguisticRules:function(e,t){var i=this.self.con.linguisticRules,n=[];return Object.keys(i).forEach(function(e){n.push("("+e+"|["+i[e]+"])")}),t&&(n=n.concat(n.map(function(e){return e.toUpperCase()}))),e.replace(new RegExp(n.join("|"),t?"g":"ig"),function(e){return n[[].indexOf.call(arguments,e,1)-1]})},find:function(e,t){var i,n=this,s={};if(t||(t=this.self.con.searchConfig),"function"==typeof t)i=t.bind(this,e);else{(t=t instanceof Array?t:[t]).forEach(function(e){"string"==typeof e&&(s[e]=!0)}),s.any=s.any?s.any:s.attributes&&s.value,s.regex&&!s.text||(e=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")),s.exactglyphes||(e=this.self.options.applyLinguisticRules(e,s.case)),s.word&&(e="\\b"+e+"\\b");var l=new RegExp(e,s.case?"m":"mi"),o=function(e){return l.test(e.text||e.value)};if(i=s.any?function(e){return o(e)||[].some.call(e.attributes,o)}:s.attributes?function(e){return[].some.call(e.attributes,o)}:o,!this.self.con.searchDisabled){var r=i;i=function(e){return!e.disabled&&r(e)}}}return[].filter.call(this.self.e.options,i).map(function(e){return!e.hidden&&n.get(e)})},finder:function(e,t){var i;for(void 0===this._finderLoop&&(this._finderLoop=this.find(e,t));void 0!==(i=this._finderLoop.shift());)return i;return delete this._finderLoop,!1},walker:function(e,t){if(void 0!==this._inLoop&&this._inLoop){if(0<this._inItems.length){do{var i=this.items[this._inGroup][this._inItems.shift()]}while(!0===i.hidden);return i}if(0<this._inGroups.length){for(;0<this._inGroups.length;){var n=this._inGroups.shift();if(!(n in this.items))return!1;var s=Object.keys(this.items[n]);if(0<s.length)break}return"ASC"==e?s.sort():"DESC"==e?s.sort().reverse():"function"==typeof e&&(s=e.call(this,s)),this._inItems=s,this._inGroup=n,this.walker(null,null)}return delete this._inLoop,delete this._inItems,delete this._inGroup,delete this._inGroups,!1}var l=Object.keys(this.groups)||[];return"ASC"==t?l.sort():"DESC"==t?l.sort().reverse():"function"==typeof t&&(l=t.call(this,l)),l.unshift("#"),this._inLoop=!0,this._inItems=[],this._inGroups=l,this.walker(e,null)}},p});
