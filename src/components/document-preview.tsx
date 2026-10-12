import { forwardRef } from 'react';
import { Mail, Phone, MapPin, Globe, Heart, Sparkles } from 'lucide-react';
import botanical from '@/assets/invitation-botanical.png';
import hands from '@/assets/wedding-hands.jpg';
import { formatDate, invitationNames, type Invitation, type Profile, type Mode } from '@/lib/documents';

type Props = { mode: Mode; invitation: Invitation; profile: Profile; template: string; theme: string; side: string };
export const DocumentPreview = forwardRef<HTMLDivElement, Props>(function DocumentPreview({ mode, invitation: inv, profile: p, template, theme, side }, ref) {
 if (mode === 'invitation') return <div ref={ref} className={`invitation-paper template-${template}`}>
  {template === 'botanical' && <><img className="botanical-top" src={botanical} alt="" width={1024} height={1024} /><img className="botanical-bottom" src={botanical} alt="" width={1024} height={1024} /></>}
  {template === 'gold' && <div className="gold-ornament">❧</div>}
  <div className="invitation-content"><span className="invitation-kicker">{inv.type === 'wedding' ? 'NIKOH TO‘YI' : inv.type === 'sunnat' ? 'SUNNAT TO‘YI' : 'TAKLIFNOMA'}</span>
  <div className="invitation-emblem"><Heart size={27} strokeWidth={1} /><span>❧</span></div>
  {template === 'navy' && <img className="wedding-photo" src={inv.photo || hands} alt="Nikoh uzuklari" width={1024} height={1024} />}
  <p className="invitation-greeting">{inv.greeting}</p>
  <p className="invitation-message">{inv.message}</p>
  <h2 className="invitation-names">{invitationNames(inv)}</h2>
  <div className="invitation-divider"><span /> <Heart size={12} /> <span /></div>
  <div className="invitation-date">{formatDate(inv.date)}</div><div className="invitation-time">SOAT {inv.time}</div>
  <div className="invitation-venue">{inv.venue}</div><p className="invitation-address">{inv.address}</p>
  <div className="invitation-family"><span>Hurmat bilan,</span><p>{inv.family}</p></div><span className="invitation-end">Tashrifingiz biz uchun baxt!</span></div>
 </div>;
 if (mode === 'card') return <div ref={ref} className={`business-card document-theme-${theme} ${side === 'back' ? 'card-back' : ''}`}>
 {side === 'front' ? <><div className="card-monogram">{p.name.split(' ').map(n => n[0]).join('').slice(0,2)}</div><h2>{p.name}</h2><p className="card-role">{p.job}</p><div className="card-contact"><p><Phone />{p.phone}</p><p><Mail />{p.email}</p><p><MapPin />{p.address}</p><p><Globe />{p.social}</p></div></> : <><div className="card-monogram">{p.name.split(' ').map(n => n[0]).join('').slice(0,2)}</div><h2>{p.name}</h2><p>{p.website}</p><span className="card-role">{p.job}</span></>}</div>;
 return <div ref={ref} className={`resume-paper document-theme-${theme}`}>
 <header className="resume-header"><div><h1>{p.name}</h1><p>{p.job}</p><div className="resume-contacts"><span><Phone />{p.phone}</span><span><Mail />{p.email}</span><span><MapPin />{p.address}</span><span>{p.social}</span></div></div>{p.photo && <img src={p.photo} alt={p.name} />}</header>
 {mode === 'letter' ? <div className="letter-body"><p className="letter-date">{formatDate(new Date().toISOString().slice(0,10))}</p><p>{p.letter}</p><p>Ehtirom bilan,<br /><strong>{p.name}</strong></p></div> : <div className="resume-columns"><aside><section><h3>Men haqimda</h3><p>{p.bio}</p></section><section><h3>Ko‘nikmalar</h3><div className="skill-tags">{p.skills.split(',').filter(Boolean).map((s,i) => <span key={i}>{s.trim()}</span>)}</div></section><section><h3>Shaxsiy sifatlar</h3><p>{p.soft}</p></section><section><h3>Tillar</h3>{p.languages.split(',').map((s,i) => <p key={i}>{s.trim()}</p>)}</section><section><h3>Havolalar</h3><p>{p.website}</p></section></aside><main>{(['experience', 'education'] as const).map(key => <section key={key}><h3>{key === 'experience' ? 'Ish tajribasi' : 'Ta’lim va sertifikatlar'}</h3>{p[key].map(e => <article key={e.id}><small>{e.period}</small><h4>{e.title}</h4><b>{e.place}</b><p>{e.description}</p></article>)}</section>)}</main></div>}
 <div className="document-footer"><Sparkles size={10} /> {p.name}</div></div>;
});
