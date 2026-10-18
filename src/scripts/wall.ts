// School wall: swap one cell at a time through every school in the list below it.
type School = [name: string, country: string];

export function initWall(): void {
  const wall = document.getElementById('wall');
  const pinIcon = wall?.querySelector('.ic-cell');
  if (!wall || !pinIcon) return;
  const pin = pinIcon.outerHTML;

  const all: School[] = [];
  document.querySelectorAll('#schools .country').forEach((block) => {
    const country = (block.querySelector('h3')?.textContent ?? '').replace(/\d+/g, '').trim();
    block.querySelectorAll('li').forEach((li) => all.push([(li.textContent ?? '').trim(), country]));
  });

  const cells = Array.from(wall.querySelectorAll<HTMLElement>('.cell'));
  const shown = cells.map((c) => c.querySelector('strong')?.textContent ?? '');
  const queue = all.filter((s) => !shown.includes(s[0]));

  let lastCell = -1;
  let visible = false;
  new IntersectionObserver((e) => { visible = e[0]?.isIntersecting ?? false; }).observe(wall);

  setInterval(() => {
    if (!visible || document.hidden || !queue.length || cells.length < 2) return;
    let i: number;
    do { i = Math.floor(Math.random() * cells.length); } while (i === lastCell);
    lastCell = i;

    const cell = cells[i]!;
    const old = cell.querySelector('.cell-in');
    const next = queue.shift();
    if (!old || !next) return;
    queue.push([old.querySelector('strong')?.textContent ?? '', (old.querySelector('.cell-c')?.textContent ?? '').trim()]);

    const el = document.createElement('span');
    el.className = 'cell-in enter';
    el.innerHTML = '<strong></strong><span class="cell-c">' + pin + '</span>';
    el.querySelector('strong')!.textContent = next[0];
    el.querySelector('.cell-c')!.appendChild(document.createTextNode(next[1]));
    cell.appendChild(el);
    old.classList.add('out');
    requestAnimationFrame(() => requestAnimationFrame(() => el.classList.remove('enter')));
    setTimeout(() => old.remove(), 500);
  }, 1600);
}
