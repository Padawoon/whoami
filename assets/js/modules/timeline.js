export function renderTimeline(experienceData, i18n) {
    const timeline = document.getElementById('experienceTimeline');
    if (!timeline) return;

    timeline.replaceChildren();

    experienceData.forEach((exp, index) => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        if (index === 0) item.classList.add('active');

        const headerId = `timeline-header-${index}`;
        const contentId = `timeline-content-${index}`;

        const header = document.createElement('button');
        header.className = 'timeline-header';
        header.type = 'button';
        header.id = headerId;
        header.setAttribute('aria-controls', contentId);
        header.setAttribute('aria-expanded', index === 0 ? 'true' : 'false');

        const headerInfo = document.createElement('div');
        headerInfo.className = 'timeline-header-info';

        const title = document.createElement('h3');
        title.textContent = `${i18n.normalizeRichText(exp.role)} — ${i18n.normalizeRichText(exp.company)}`;

        const date = document.createElement('p');
        date.className = 'date';
        date.textContent = i18n.normalizeRichText(exp.date);

        const icon = document.createElement('i');
        icon.className = 'fas fa-chevron-down timeline-icon';
        icon.setAttribute('aria-hidden', 'true');

        const content = document.createElement('div');
        content.className = 'timeline-content';
        content.id = contentId;
        content.setAttribute('role', 'region');
        content.setAttribute('aria-labelledby', headerId);
        content.hidden = index !== 0;

        const list = document.createElement('ul');
        exp.items.forEach((entry) => {
            const listItem = document.createElement('li');
            listItem.textContent = i18n.normalizeRichText(entry);
            list.appendChild(listItem);
        });

        content.appendChild(list);
        headerInfo.append(title, date);
        header.append(headerInfo, icon);
        item.append(header, content);
        timeline.appendChild(item);

        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            timeline.querySelectorAll('.timeline-item').forEach((node) => {
                node.classList.remove('active');
                const nodeHeader = node.querySelector('.timeline-header');
                const nodeContent = node.querySelector('.timeline-content');
                if (nodeHeader) nodeHeader.setAttribute('aria-expanded', 'false');
                if (nodeContent) nodeContent.hidden = true;
            });

            if (!isActive) {
                item.classList.add('active');
                header.setAttribute('aria-expanded', 'true');
                content.hidden = false;
            }
        });
    });
}
