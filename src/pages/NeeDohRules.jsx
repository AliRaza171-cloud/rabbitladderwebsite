import Cloud from '../components/Cloud.jsx';
import usePageTitle from '../hooks/usePageTitle.js';
import { PROMO_SUMMARY, RULES } from '../data/needohRules.js';
import { STORE } from '../data/site.js';

function RuleBlock({ block }) {
  if (typeof block === 'string') return <p>{block}</p>;
  if (block.list) {
    return (
      <ul>
        {block.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  if (block.highlight) return <p className="rules__highlight">{block.highlight}</p>;
  if (block.address) {
    return (
      <address>
        {block.address.map((line, i) => (
          <span key={line}>
            {line}
            {i < block.address.length - 1 && <br />}
          </span>
        ))}
      </address>
    );
  }
  return null;
}

export default function NeeDohRules() {
  usePageTitle('NeeDoh Drawing Rules');

  return (
    <>
      <section className="container promo-wrap" aria-labelledby="promo-h">
        <div className="promo">
          <Cloud width={120} fill="rgba(255,255,255,0.12)" className="float promo__cloud" />
          <div className="promo__head">
            <p className="eyebrow eyebrow--lavender">{PROMO_SUMMARY.eyebrow}</p>
            <h1 id="promo-h" className="promo__title">
              {PROMO_SUMMARY.title}
            </h1>
            <p className="promo__badge">No purchase necessary to enter or win</p>
          </div>

          <dl className="promo__facts">
            {PROMO_SUMMARY.facts.map((fact) => (
              <div key={fact.label} className="promo__fact">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="promo__foot">
            <p>{PROMO_SUMMARY.note}</p>
            <a className="btn btn--lavender" href={STORE.mapsUrl} target="_blank" rel="noreferrer">
              Enter in store · Get directions
            </a>
          </div>
        </div>
      </section>

      <section className="section section--last container rules" aria-label="Official rules">
        <nav className="rules__toc" aria-label="Rules sections">
          <span className="rules__toc-title">On this page</span>
          {RULES.map((rule) => (
            <a key={rule.id} href={`#${rule.id}`}>
              {rule.title}
            </a>
          ))}
        </nav>

        <article className="rules__body">
          <header className="rules__header">
            <h2 className="h2">NeeDoh Holiday Advent Calendar Promotion — Official Rules</h2>
            <p className="rules__notice">{PROMO_SUMMARY.headline}</p>
          </header>

          {RULES.map((rule) => (
            <div key={rule.id} id={rule.id} className={`rules__section${rule.boxed ? ' rules__section--boxed' : ''}`}>
              <h3>{rule.title}</h3>
              {rule.blocks.map((block, i) => (
                <RuleBlock key={i} block={block} />
              ))}
            </div>
          ))}
        </article>
      </section>
    </>
  );
}
