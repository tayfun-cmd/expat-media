(function(){
var WA='971553465531';
var WEBHOOK='https://hook.eu1.make.com/2anxx40bb0c8nqs13q6pj8sobjvy2jom';
var steps=[
{k:'name',t:'name',q:'Wie heißt du?'},
{k:'dob',t:'date',q:'Wann bist du geboren?',l:'Geburtsdatum'},
{k:'fuer',t:'choice',q:'Für wen suchst du Schutz?',o:[['Nur für mich',''],['Für mich und meine Familie','']]},
{k:'fam',t:'family',q:'Wen möchtest du mitversichern?',c:function(a){return a.fuer==='Für mich und meine Familie';}},
{k:'anliegen',t:'choice',q:'Was ist dein Anliegen?',o:[['Neuvertrag','Ich suche eine neue Krankenversicherung'],['Bestehenden Vertrag überprüfen','Ich bin versichert und will es prüfen lassen']]},
{k:'status',t:'choice',q:'Wie ist dein Auswanderungsstatus?',o:[['In Planung','Ich plane den Schritt ins Ausland'],['Schon ausgewandert','Ich lebe bereits im Ausland']]},
{k:'land',t:'text',q:'Wohin soll es gehen, oder wo lebst du?',p:'z.B. Dubai, Thailand, Spanien'},
{k:'schutz',t:'choice',q:'Welche Absicherung wünschst du dir?',o:[['Basis-Schutz','Solide Grundabsicherung zum günstigen Beitrag'],['Mittlerer Schutz','Ausgewogen aus Leistung und Preis'],['Premium-Schutz','Maximale Leistung, beste Kliniken weltweit']]},
{k:'kontakt',t:'contact',q:'Wie können wir dich erreichen?'}
];
var ans={kids:[]};var curr=0;var ov,card;var sent=false;
function T(n,p,o){try{if(window.eiTrack){window.eiTrack(n,p,o);}}catch(e){}}
function el(t,c,x){var e=document.createElement(t);if(c){e.className=c;}if(x!=null){e.textContent=x;}return e;}
function vis(i){var s=steps[i];return !s.c||s.c(ans);}
function tot(){var n=0;for(var i=0;i<steps.length;i++){if(vis(i)){n++;}}return n;}
function pos(){var n=0;for(var i=0;i<=curr;i++){if(vis(i)){n++;}}return n;}
function hasPrev(){for(var i=curr-1;i>=0;i--){if(vis(i)){return true;}}return false;}
function next(){for(var i=curr+1;i<steps.length;i++){if(vis(i)){curr=i;render();return;}}}
function prev(){for(var i=curr-1;i>=0;i--){if(vis(i)){curr=i;render();return;}}}
function openF(){curr=0;ans={kids:[]};sent=false;T('FunnelStart',{quelle:'Funnel'});render();ov.classList.add('open');document.documentElement.style.overflow='hidden';}
function close(){if(!sent&&ov.classList.contains('open')){T('FunnelAbbruch',{schritt:steps[curr].k});}ov.classList.remove('open');document.documentElement.style.overflow='';}
function lbl(t){return el('div','eif-lbl',t);}
function navRow(label,fn){var n=el('div','eif-nav');if(hasPrev()){var b=el('button','eif-back','Zurück');b.type='button';b.onclick=prev;n.appendChild(b);}else{n.appendChild(el('span'));}var nx=el('button','eif-next',label);nx.type='button';nx.onclick=fn;n.appendChild(nx);card.appendChild(n);}
function backOnly(){if(hasPrev()){var n=el('div','eif-nav');var b=el('button','eif-back','Zurück');b.type='button';b.onclick=prev;n.appendChild(b);card.appendChild(n);}}
function render(){
card.innerHTML='';
var s=steps[curr];T('FunnelStep',{schritt:s.k,nr:pos()});
var cl=el('button','eif-close');cl.type='button';cl.innerHTML='&times;';cl.onclick=close;card.appendChild(cl);
var pg=el('div','eif-prog');var bar=el('div','eif-bar');bar.style.width=Math.round(pos()/tot()*100)+'%';pg.appendChild(bar);card.appendChild(pg);
card.appendChild(el('h3','eif-q',s.q));
if(s.t==='choice'){var op=el('div','eif-opts');s.o.forEach(function(o){var b=el('button','eif-opt');b.type='button';b.appendChild(el('span',null,o[0]));if(o[1]){b.appendChild(el('small',null,o[1]));}b.onclick=function(){ans[s.k]=o[0];next();};op.appendChild(b);});card.appendChild(op);backOnly();}
else if(s.t==='name'){var v=el('input','eif-input');v.placeholder='Vorname';v.value=ans.vorname||'';var nn=el('input','eif-input');nn.placeholder='Nachname';nn.value=ans.nachname||'';card.appendChild(v);card.appendChild(nn);navRow('Weiter',function(){if(!v.value.trim()||!nn.value.trim()){v.style.borderColor=v.value.trim()?'':'#F15F14';nn.style.borderColor=nn.value.trim()?'':'#F15F14';return;}ans.vorname=v.value.trim();ans.nachname=nn.value.trim();next();});}
else if(s.t==='date'){card.appendChild(lbl(s.l||''));var d=el('input','eif-input');d.type='date';d.value=ans[s.k]||'';card.appendChild(d);navRow('Weiter',function(){if(!d.value){d.style.borderColor='#F15F14';return;}ans[s.k]=d.value;next();});}
else if(s.t==='text'){var tx=el('input','eif-input');tx.placeholder=s.p||'';tx.value=ans[s.k]||'';card.appendChild(tx);navRow('Weiter',function(){if(!tx.value.trim()){tx.style.borderColor='#F15F14';return;}ans[s.k]=tx.value.trim();next();});}
else if(s.t==='family'){card.appendChild(lbl('Geburtsdatum Partner/in (optional)'));var pd=el('input','eif-input');pd.type='date';pd.value=ans.partnerDob||'';card.appendChild(pd);card.appendChild(lbl('Kinder (optional)'));var kc=el('div');card.appendChild(kc);function addKid(val){var row=el('div','eif-kid');var ki=el('input','eif-input');ki.type='date';if(val){ki.value=val;}var rm=el('button','eif-rm');rm.type='button';rm.innerHTML='&times;';rm.onclick=function(){kc.removeChild(row);};row.appendChild(ki);row.appendChild(rm);kc.appendChild(row);}(ans.kids||[]).forEach(function(k){addKid(k);});var add=el('button','eif-add','+ Kind hinzufügen');add.type='button';add.onclick=function(){addKid('');};card.appendChild(add);navRow('Weiter',function(){ans.partnerDob=pd.value;ans.kids=[];kc.querySelectorAll('input').forEach(function(i){if(i.value){ans.kids.push(i.value);}});next();});}
else if(s.t==='contact'){var tel=el('input','eif-input');tel.type='tel';tel.placeholder='Telefon / WhatsApp';tel.value=ans.tel||'';var em=el('input','eif-input');em.type='email';em.placeholder='E-Mail (optional)';em.value=ans.email||'';card.appendChild(tel);card.appendChild(em);card.appendChild(el('p','eif-trust','Kostenlos und unverbindlich. Wir melden uns persönlich, kein Callcenter.'));navRow('Anfrage senden',function(){if(!tel.value.trim()){tel.style.borderColor='#F15F14';return;}ans.tel=tel.value.trim();ans.email=em.value.trim();finish();});}
}
function buildMsg(){var L=[];L.push('Neue Anfrage über die Website');L.push('Name: '+(ans.vorname||'')+' '+(ans.nachname||''));if(ans.dob){L.push('Geburtsdatum: '+ans.dob);}L.push('Versicherung für: '+(ans.fuer||''));if(ans.partnerDob){L.push('Partner Geburtsdatum: '+ans.partnerDob);}if(ans.kids&&ans.kids.length){L.push('Kinder: '+ans.kids.join(', '));}if(ans.anliegen){L.push('Anliegen: '+ans.anliegen);}if(ans.status){L.push('Status: '+ans.status);}if(ans.land){L.push('Zielland: '+ans.land);}if(ans.schutz){L.push('Gewünschte Absicherung: '+ans.schutz);}L.push('Kontakt: '+(ans.tel||'')+(ans.email?(' / '+ans.email):''));return L.join('\n');}
function finish(){sent=true;var eid='lead-'+Date.now().toString(36)+Math.random().toString(36).slice(2,8);ans.event_id=eid;try{var at=window.eiAttr?window.eiAttr():{};for(var k in at){ans[k]=at[k];}}catch(e){}T('Lead',{quelle:'Funnel',content_name:'Beratungsanfrage'},{eventID:eid});var msg=buildMsg();if(WEBHOOK){try{fetch(WEBHOOK,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(ans)});}catch(e){}}try{window.open('https://wa.me/'+WA+'?text='+encodeURIComponent(msg),'_blank');}catch(e){}thanks();}
function thanks(){card.innerHTML='';var cl=el('button','eif-close');cl.type='button';cl.innerHTML='&times;';cl.onclick=close;card.appendChild(cl);var f=el('div','eif-final');var chk=el('div','eif-chk');chk.innerHTML='✓';f.appendChild(chk);f.appendChild(el('h3',null,'Danke, '+(ans.vorname||'')+'!'));f.appendChild(el('p',null,'Deine Anfrage ist unterwegs. Wir haben WhatsApp geöffnet, damit du sie direkt absenden kannst. Wir melden uns persönlich bei dir.'));card.appendChild(f);var w=el('div');w.style.textAlign='center';w.style.marginTop='22px';var done=el('button','eif-next','Schließen');done.type='button';done.onclick=close;w.appendChild(done);card.appendChild(w);}
function init(){ov=el('div','eif-ov');card=el('div','eif-card');ov.appendChild(card);document.body.appendChild(ov);ov.addEventListener('click',function(e){if(e.target===ov){close();}});document.addEventListener('click',function(e){var b=e.target.closest?e.target.closest('.ei-btn'):null;if(b&&/berat|consult|advice/i.test(b.textContent||'')){e.preventDefault();e.stopPropagation();openF();}},true);}
if(document.readyState!=='loading'){setTimeout(init,350);}else{document.addEventListener('DOMContentLoaded',function(){setTimeout(init,350);});}
})();
