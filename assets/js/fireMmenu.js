import Mmenu from 'mmenu-js';

document.addEventListener('DOMContentLoaded', () => {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const menu = new Mmenu(
    '#menu',
    {
      slidingSubmenus: false,
    },
    {
      classNames: {
        selected: 'active',
      },
      offCanvas: {
        page: {
          selector: '#page',
        },
      },
    }
  );
});
