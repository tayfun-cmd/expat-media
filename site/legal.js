(function(){
var IMP='<h2>Impressum</h2>'+
'<p>info@expat-insurance.ae ist ein urheberrechtlich geschützter Auftritt der Expat Insurance GmbH.</p>'+
'<p class="eilg-addr">Expat Insurance GmbH<br>Dr.-Wilhelm-Höck-Ring 29<br>38239 Salzgitter-Thiede<br>Deutschland</p>'+
'<p>Amtsgericht Braunschweig<br>HRB 212094<br>USt-ID: DE454392859</p>'+
'<p>Vertreten durch Geschäftsführerin Frau Anne-Jule Dülger</p>'+
'<h3>Kontakt</h3>'+
'<p>E-Mail: <a href="mailto:info@expat-insurance.ae">info@expat-insurance.ae</a></p>'+
'<h3>Haftung für Inhalte</h3>'+
'<p>Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>'+
'<p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>'+
'<h3>Haftung für Links</h3>'+
'<p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>'+
'<p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>'+
'<h3>Urheberrecht</h3>'+
'<p>Die Seiten unseres Auftritts genießen urheberrechtlichen Schutz. Insbesondere Vervielfältigungen, Bearbeitungen, Übersetzungen und die Einspeicherung und Verarbeitung in andere Medien, einschließlich solcher in elektronischer Form, sind urheberrechtlich geschützt. Jede Verwertung, auch auszugsweise, ist nur mit unserer vorherigen schriftlichen Zustimmung statthaft. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Sollten Sie dennoch auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>';
var DS='<h2>Datenschutzerklärung</h2>'+
'<h3>Verantwortlicher</h3>'+
'<p>Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:</p>'+
'<p class="eilg-addr">Expat Insurance GmbH<br>Dr.-Wilhelm-Höck-Ring 29<br>38239 Salzgitter-Thiede<br>Deutschland</p>'+
'<p>E-Mail: <a href="mailto:info@expat-insurance.ae">info@expat-insurance.ae</a><br>Amtsgericht Braunschweig, HRB 212094<br>USt-ID: DE454392859</p>'+
'<p>Vertreten durch Geschäftsführerin Frau Anne-Jule Dülger</p>'+
'<h3>Allgemeine Hinweise</h3>'+
'<p><strong>SSL- bzw. TLS-Verschlüsselung</strong><br>Unsere Website nutzt eine SSL- bzw. TLS-Verschlüsselung, um Ihre Daten vor unbefugtem Zugriff zu schützen. Sie erkennen dies an dem Schloss-Symbol in der Adresszeile Ihres Browsers sowie an der URL, die mit „https://“ beginnt.</p>'+
'<p><strong>Speicherdauer Ihrer Daten</strong><br>Personenbezogene Daten speichern wir nur so lange, wie dies zur Zweckerfüllung notwendig ist oder bis Sie Ihre Einwilligung widerrufen. Gesetzliche Aufbewahrungsfristen (z. B. steuerlicher Art) bleiben unberührt.</p>'+
'<p><strong>Datenübermittlung in die USA</strong><br>Falls auf unserer Website Tools von US-Anbietern eingebunden sind, erfolgt die Datenübertragung auf Grundlage des EU-US Data Privacy Frameworks, das ein angemessenes Datenschutzniveau sicherstellt.</p>'+
'<h3>Ihre Rechte gemäß DSGVO</h3>'+
'<ul>'+
'<li>Widerspruchsrecht (Art. 21 DSGVO): Sie können der Datenverarbeitung aus berechtigtem Interesse jederzeit widersprechen, insbesondere bei Direktwerbung.</li>'+
'<li>Widerrufsrecht (Art. 7 Abs. 3 DSGVO): Sie können Ihre Einwilligung zur Datenverarbeitung jederzeit mit Wirkung für die Zukunft widerrufen.</li>'+
'<li>Auskunft, Berichtigung, Löschung (Art. 15 bis 17 DSGVO): Sie haben das Recht auf Auskunft über Ihre bei uns gespeicherten Daten sowie auf Berichtigung oder Löschung.</li>'+
'<li>Einschränkung der Verarbeitung (Art. 18 DSGVO): Sie können unter bestimmten Voraussetzungen die Einschränkung der Verarbeitung Ihrer Daten verlangen.</li>'+
'<li>Datenübertragbarkeit (Art. 20 DSGVO): Sie haben das Recht, Daten in einem gängigen, maschinenlesbaren Format zu erhalten oder an Dritte übertragen zu lassen.</li>'+
'<li>Beschwerderecht (Art. 77 DSGVO): Bei datenschutzrechtlichen Bedenken haben Sie das Recht, sich an eine zuständige Aufsichtsbehörde zu wenden.</li>'+
'</ul>'+
'<h3>Hosting und Content Delivery Network (CDN)</h3>'+
'<p>Unsere Website wird über Webflow, Inc. (USA) bereitgestellt und über deren globales Content Delivery Network ausgeliefert. Dabei können personenbezogene Daten (z. B. IP-Adressen) auch in die USA übertragen werden. Dies erfolgt auf Grundlage des EU-US Data Privacy Frameworks bzw. der EU-Standardvertragsklauseln.</p>'+
'<h3>Datenerfassung auf dieser Website</h3>'+
'<p><strong>Kontakt- und Anfrageformular</strong><br>Wenn Sie unser Anfrageformular nutzen, verarbeiten wir die von Ihnen gemachten Angaben, um Ihre Anfrage zu bearbeiten und mit Ihnen Kontakt aufzunehmen. Die Daten können dabei über von uns eingesetzte Dienstleister (z. B. unser CRM-System sowie Messaging-Dienste wie WhatsApp) verarbeitet werden. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b und f DSGVO.</p>'+
'<p><strong>Verwendung von Cookies</strong><br>Wir setzen Cookies ein, um bestimmte Funktionen bereitzustellen (technisch notwendige Cookies) und gegebenenfalls das Nutzungsverhalten zu analysieren (Analyse-Cookies). Soweit Analyse-Cookies eingesetzt werden, wird Ihre Zustimmung über ein Cookie-Banner eingeholt und kann jederzeit widerrufen werden.</p>'+
'<p><strong>Google Analytics</strong><br>Sofern wir Google Analytics zur Analyse des Nutzerverhaltens einsetzen, werden die erhobenen Daten anonymisiert verarbeitet. Sie können der Erfassung jederzeit widersprechen, z. B. durch Installation eines entsprechenden Browser-Add-ons.</p>'+
'<p><strong>Meta-Pixel (Facebook und Instagram)</strong><br>Wenn du im Cookie-Hinweis auf „Einverstanden“ klickst, laden wir den Meta-Pixel der Meta Platforms Ireland Ltd., Merrion Road, Dublin 4, Irland. Damit messen wir, ob eine Anfrage über unsere Website auf eine unserer Anzeigen auf Facebook oder Instagram zurückgeht, und richten unsere Anzeigen auf passende Zielgruppen aus. Dabei werden unter anderem deine IP-Adresse, Angaben zu Browser und Gerät, die aufgerufenen Seiten sowie Ereignisse wie das Absenden einer Anfrage an Meta übermittelt. Meta kann diese Daten auch in die USA übertragen; Grundlage ist das EU-US Data Privacy Framework. Rechtsgrundlage ist deine Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Du kannst sie jederzeit über den Link „Cookie-Einstellungen“ im Fußbereich der Website widerrufen. Ohne Einwilligung wird der Meta-Pixel nicht geladen. Weitere Informationen findest du in der <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener">Datenschutzrichtlinie von Meta</a>.</p>'+
'<p><strong>Anonyme Auswertung der Website-Nutzung</strong><br>Ohne Cookies und ohne personenbezogene Daten erfassen wir, welche Seiten aufgerufen werden, an welcher Stelle unsere Anfrageformulare abgebrochen werden und aus welcher Werbekampagne ein Besuch stammt. Dafür wird für die Dauer des Besuchs eine zufällige Sitzungskennung im Speicher deines Browsers abgelegt, die beim Schließen des Tabs gelöscht wird. Die Daten werden über Make.com verarbeitet und in Google Sheets gespeichert. Rechtsgrundlage ist unser berechtigtes Interesse an der Verbesserung unseres Angebots (Art. 6 Abs. 1 lit. f DSGVO).</p>'+
'<p><strong>Social Media</strong><br>Wir betreiben Profile auf sozialen Netzwerken (z. B. LinkedIn, Instagram). Die dort erhobenen Daten werden durch die jeweiligen Plattformbetreiber gemäß deren Datenschutzrichtlinien verarbeitet.</p>';
var ERST='<h2>Erstinformation nach § 15 VersVermV</h2>'+
'<p><strong>Expat Insurance GmbH</strong> · Stand 25.09.2026</p>'+
'<p>Nach § 15 der Versicherungsvermittlungsverordnung sind wir verpflichtet, Ihnen die folgenden Angaben zu machen, bevor wir für Sie tätig werden.</p>'+
'<h3>Wer wir sind</h3>'+
'<p class="eilg-addr">Expat Insurance GmbH<br>Dr.-Wilhelm-Höck-Ring 29<br>38239 Salzgitter<br>Deutschland</p>'+
'<p><a href="https://www.expat-insurance.ae">www.expat-insurance.ae</a></p>'+
'<p>Vertreten durch die Geschäftsführerin Anne-Jule Dülger. Eingetragen im Handelsregister des Amtsgerichts Braunschweig unter HRB 212094. Umsatzsteuer-Identifikationsnummer DE454392859.</p>'+
'<h3>In welcher Eigenschaft wir tätig werden</h3>'+
'<p>Wir sind <strong>Versicherungsmakler</strong> mit einer Erlaubnis nach § 34d Absatz 1 der Gewerbeordnung. Als Versicherungsmakler stehen wir auf Ihrer Seite. Wir sind von keinem Versicherungsunternehmen beauftragt und vertreten Ihre Interessen gegenüber den Versicherern.</p>'+
'<p>Wir beraten Sie und vermitteln Versicherungsverträge. Eine Rechtsberatung oder Steuerberatung erbringen wir nicht.</p>'+
'<h3>Erlaubnis und Register</h3>'+
'<p>Die Erlaubnis wurde erteilt durch die Industrie- und Handelskammer Braunschweig, Brabandtstraße 11, 38100 Braunschweig, Telefon +49 531 4715-0, <a href="https://www.ihk.de/braunschweig" target="_blank" rel="noopener">www.ihk.de/braunschweig</a>.</p>'+
'<p>Wir sind im Versicherungsvermittlerregister eingetragen unter der Registrierungsnummer <strong>D-RSYI-D8U0Q-13</strong>.</p>'+
'<p>Die Eintragung können Sie jederzeit überprüfen bei der DIHK, Deutsche Industrie- und Handelskammer, Breite Straße 29, 10178 Berlin, Telefon 0180 6005850 (0,20 € pro Anruf), <a href="https://www.vermittlerregister.info" target="_blank" rel="noopener">www.vermittlerregister.info</a></p>'+
'<h3>Beteiligungen</h3>'+
'<p>Wir halten keine unmittelbare oder mittelbare Beteiligung von mehr als 10 Prozent an den Stimmrechten oder am Kapital eines Versicherungsunternehmens.</p>'+
'<p>Kein Versicherungsunternehmen und kein Mutterunternehmen eines Versicherungsunternehmens hält eine unmittelbare oder mittelbare Beteiligung von mehr als 10 Prozent an den Stimmrechten oder am Kapital unseres Unternehmens.</p>'+
'<h3>Grundlage unserer Beratung</h3>'+
'<p>Wir beraten Sie auf Grundlage einer Auswahl von Versicherungsunternehmen, mit denen wir zusammenarbeiten. Wir stützen unseren Rat damit nicht auf eine ausgewogene Untersuchung des gesamten Marktes im Sinne des § 60 Absatz 1 Satz 1 VVG.</p>'+
'<p>Bei der internationalen Krankenversicherung berücksichtigen wir derzeit die folgenden Versicherungsunternehmen und Produktgeber:</p>'+
'<ul><li>APRIL International, Frankreich</li><li>BDAE, Deutschland</li><li>CareConcept, Deutschland</li><li>Foyer Global Health, Luxemburg</li><li>Genki, Deutschland</li><li>Global Health, Luxemburg</li><li>PassportCard, Deutschland</li></ul>'+
'<p>Auf Ihren Wunsch nennen wir Ihnen die Versicherungsunternehmen, die wir unserer Beratung im Einzelfall zugrunde gelegt haben.</p>'+
'<h3>Wie wir vergütet werden</h3>'+
'<p>Für unsere Tätigkeit erhalten wir eine Courtage von dem Versicherungsunternehmen. Die Courtage ist bereits im Versicherungsbeitrag enthalten. Sie zahlen uns kein gesondertes Honorar. Durch unsere Beratung und Vermittlung entstehen Ihnen keine zusätzlichen Kosten.</p>'+
'<h3>Berufshaftpflichtversicherung</h3>'+
'<p>Wir unterhalten die gesetzlich vorgeschriebene Vermögensschaden-Haftpflichtversicherung.</p>'+
'<h3>Wenn Sie sich beschweren möchten</h3>'+
'<p>Sprechen Sie uns zuerst direkt an, meist lässt sich eine Sache so am schnellsten klären. Darüber hinaus steht Ihnen die folgende Schlichtungsstelle offen:</p>'+
'<p class="eilg-addr">Versicherungsombudsmann e. V.<br>Postfach 08 06 32, 10006 Berlin</p>'+
'<p><a href="https://www.versicherungsombudsmann.de" target="_blank" rel="noopener">www.versicherungsombudsmann.de</a></p>'+
'<p>Das Schlichtungsverfahren ist für Sie kostenfrei. Der Weg zu den ordentlichen Gerichten bleibt Ihnen daneben offen.</p>'+
'<p>Sie können sich auch an unsere Erlaubnisbehörde wenden, die Industrie- und Handelskammer Braunschweig, Brabandtstraße 11, 38100 Braunschweig. Für Beschwerden über Versicherungsunternehmen ist die Bundesanstalt für Finanzdienstleistungsaufsicht zuständig, Graurheindorfer Straße 108, 53117 Bonn, <a href="https://www.bafin.de" target="_blank" rel="noopener">www.bafin.de</a></p>'+
'<h3>Datenschutz</h3>'+
'<p>Wie wir mit Ihren Daten umgehen, steht in unserer <a href="#" class="eilg-goto-ds">Datenschutzerklärung</a>.</p>';
var ovs={};
function closeAll(){for(var k in ovs){ovs[k].classList.remove('open');}document.documentElement.style.overflow='';}
function open(k){closeAll();if(ovs[k]){ovs[k].classList.add('open');ovs[k].scrollTop=0;document.documentElement.style.overflow='hidden';}}
function build(id,html){var ov=document.createElement('div');ov.className='eilg-ov';ov.id=id;var card=document.createElement('div');card.className='eilg-card';var cl=document.createElement('button');cl.type='button';cl.className='eilg-close';cl.innerHTML='&times;';cl.setAttribute('aria-label','Schließen');cl.onclick=function(){closeAll();};var body=document.createElement('div');body.innerHTML=html;card.appendChild(cl);card.appendChild(body);ov.appendChild(card);ov.addEventListener('click',function(e){if(e.target===ov){closeAll();}});document.body.appendChild(ov);return ov;}
function openFunnel(){try{var bs=document.querySelectorAll('.ei-btn,.eimx-btn');for(var i=0;i<bs.length;i++){if(bs[i].closest('.eilg-ov'))continue;if(/berat|consult|advice/i.test(bs[i].textContent||'')){bs[i].click();return true;}}}catch(e){}return false;}
function addFooterLink(){try{
if(document.querySelector('.eilg-erst-link'))return;
var imp=null,ds=null,as=document.querySelectorAll('a');
for(var i=0;i<as.length;i++){if(as[i].closest('.eilg-ov'))continue;var t=(as[i].textContent||'').trim().toLowerCase();if(!imp&&(t==='impressum'||t==='imprint'))imp=as[i];if(!ds&&(t==='datenschutz'||t==='datenschutzerklärung'||t==='privacy policy'||t==='privacy'))ds=as[i];}
if(!ds||!ds.parentNode)return;
var a=ds.cloneNode(true);a.textContent='Erstinformation';a.className=(ds.className?ds.className+' ':'')+'eilg-erst-link';a.setAttribute('href','?legal=erstinformation');a.removeAttribute('target');
var sep=null;
if(imp&&imp.parentNode===ds.parentNode){var n=imp.nextSibling,frag=document.createDocumentFragment();while(n&&n!==ds){frag.appendChild(n.cloneNode(true));n=n.nextSibling;}if(frag.childNodes.length)sep=frag;}
var ref=ds.nextSibling;
if(sep)ds.parentNode.insertBefore(sep,ref);
ds.parentNode.insertBefore(a,ref);
}catch(e){}}
function params(){try{
var q=new URLSearchParams(location.search);
var lg=(q.get('legal')||'').trim().toLowerCase();
var br=(q.get('beratung')||'').trim().toLowerCase();
var m={impressum:'imp',imprint:'imp',datenschutz:'ds',datenschutzerklaerung:'ds',privacy:'ds',erstinformation:'erst',erstinfo:'erst','erstinformation-15-versvermv':'erst'};
if(lg&&m[lg]){open(m[lg]);}
if(br==='1'||br==='true'||br==='ja'||br==='yes'){var n=0;var iv=setInterval(function(){n++;if(openFunnel()||n>14){clearInterval(iv);}},420);}
if((lg||br)&&window.history&&history.replaceState){var u=new URL(location.href);u.searchParams.delete('legal');u.searchParams.delete('beratung');history.replaceState(null,'',u.pathname+(u.search||'')+u.hash);}
}catch(e){}}
function init(){if(document.getElementById('ei-legal-imp'))return;ovs.imp=build('ei-legal-imp',IMP);ovs.ds=build('ei-legal-ds',DS);ovs.erst=build('ei-legal-erst',ERST);
document.addEventListener('click',function(e){var g=e.target.closest?e.target.closest('.eilg-goto-ds'):null;if(g){e.preventDefault();e.stopPropagation();open('ds');}},true);
document.addEventListener('click',function(e){var a=e.target.closest?e.target.closest('a,button'):null;if(!a)return;if(a.closest('.eilg-ov'))return;var t=(a.textContent||'').trim().toLowerCase();if(t==='impressum'||t==='imprint'){e.preventDefault();e.stopPropagation();open('imp');}else if(t==='datenschutz'||t==='datenschutzerklärung'||t.indexOf('privacy')>-1){e.preventDefault();e.stopPropagation();open('ds');}else if(t==='erstinformation'||t.indexOf('erstinformation nach')>-1){e.preventDefault();e.stopPropagation();open('erst');}},true);
document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeAll();}});
addFooterLink();setTimeout(addFooterLink,1200);params();}
if(document.readyState!=='loading'){setTimeout(init,300);}else{document.addEventListener('DOMContentLoaded',function(){setTimeout(init,300);});}
})();
