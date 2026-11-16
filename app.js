const D = window.DATA;
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const themes = ["Analytics leadership", "Data platforms", "Health and ICT4D", "Infrastructure"];
let active = null;

function chips(tags) { return tags.map(t => `<button class="chip${t === active ? " on" : ""}" aria-pressed="${t === active}" data-tag="${esc(t)}">${esc(t)}</button>`).join(""); }
const nomatch = tags => match(tags) ? "" : `<p class="nomatch">Not tagged “${esc(active)}”.</p>`;
function match(tags) { return !active || tags.includes(active); }

function renderExplorer() {
  const allTools = [...new Set([...D.roles, ...D.projects].flatMap(x => x.tags))].filter(t => !themes.includes(t)).sort();
  $("#themes").innerHTML = chips(themes);
  $("#tools").innerHTML = chips(allTools);
  $("#status").textContent = active ? `Showing items tagged “${active}”.` : "Select a theme or tool to highlight related work.";
  $("#clear").hidden = !active;

  $("#timeline").innerHTML = D.roles.map(r => `
    <article class="role${match(r.tags) ? "" : " dim"}">
      <p class="when">${esc(r.period)}</p>
      <h3>${esc(r.title)}, ${esc(r.org)}</h3>
      ${nomatch(r.tags)}
      <p>${esc(r.summary)}</p>
      <details${active && match(r.tags) ? " open" : ""}><summary>What I did</summary>
        <ul>${r.highlights.map(h => `<li>${esc(h)}</li>`).join("")}</ul>
      </details>
      <div class="tags">${chips(r.tags)}</div>
    </article>`).join("");

  $("#projects").innerHTML = D.projects.map(p => `
    <article class="proj${match(p.tags) ? "" : " dim"}">
      <h3>${esc(p.name)}</h3>
      ${nomatch(p.tags)}
      <p class="when">${esc(p.role)}</p>
      <p>${esc(p.blurb)}</p>
      ${p.url ? `<p><a href="${esc(p.url)}">Read the design</a></p>` : ""}
      ${p.points.length ? `<details${active && match(p.tags) ? " open" : ""}><summary>Design notes</summary><ul>${p.points.map(x => `<li>${esc(x)}</li>`).join("")}</ul></details>` : ""}
      <div class="tags">${chips(p.tags)}</div>
    </article>`).join("");
}

function renderCV() {
  $("#cv-name").textContent = D.name;
  $("#cv-title").textContent = D.title;
  $("#cv-links").innerHTML = D.links.map(l => `<a href="${esc(l.url)}">${esc(l.label)}</a>`).join(" | ");
  $("#cv-summary").textContent = D.summary;
  $("#cv-exp").innerHTML = D.roles.map(r => `
    <div class="cv-role"><div class="row"><strong>${esc(r.title)}, ${esc(r.org)}</strong><span>${esc(r.period)}</span></div>
    <ul>${r.highlights.slice(0, 3).map(h => `<li>${esc(h)}</li>`).join("")}</ul></div>`).join("");
  $("#cv-proj").innerHTML = D.projects.map(p => `<li><strong>${esc(p.name)}.</strong> ${esc(p.blurb)}</li>`).join("");
  $("#cv-skills").innerHTML = Object.entries(D.skills).map(([k, v]) => `<li><strong>${esc(k)}:</strong> ${esc(v.join(", "))}</li>`).join("");
  $("#cv-edu").innerHTML = D.education.map(e => `<li>${esc(e)}</li>`).join("") + `<li>${esc(D.learning)}</li>`;
}

if ($("#timeline")) {
  $("#name").textContent = D.name;
  $("#role").textContent = D.title;
  $("#tagline").textContent = D.tagline;
  $("#summary").textContent = D.summary;
  $("#links").innerHTML = D.links.map(l => `<a href="${esc(l.url)}">${esc(l.label)}</a>`).join("");
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-tag]");
    if (b) { active = active === b.dataset.tag ? null : b.dataset.tag; renderExplorer(); }
    if (e.target.id === "clear") { active = null; renderExplorer(); }
  });
  renderExplorer();
} else { renderCV(); }
