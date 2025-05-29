export class Item {

  id: number;
  name: string;
  link: string;
  icon: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.link = '';
    this.icon = '';
  }
}

export const ITEMS: Item[] =
  [
    { id: 1, name: 'Accordions', link: 'accordions', icon: 'far fa-address-card' },
    { id: 2, name: 'Alerts', link: 'alerts', icon: 'fas fa-user' },
    { id: 3, name: 'Badges', link: 'badges', icon: 'fas fa-user-friends' },
    { id: 4, name: 'Blockquotes', link: 'blockquotes', icon: 'fas fa-house-user' },
    { id: 5, name: 'Breadcrumb', link: 'breadcrumb', icon: 'fab fa-app-store' },
    { id: 6, name: 'Buttons', link: 'buttons', icon: 'fab fa-artstation' },
    { id: 7, name: 'Cards', link: 'cards', icon: 'fab fa-asymmetrik' },
    { id: 8, name: 'Checkbox', link: 'checkbox', icon: 'fas fa-atom' },
    { id: 9, name: 'Collapse', link: 'collapse', icon: 'fas fa-balance-scale-right' },
    { id: 10, name: 'Dropdowns', link: 'dropdowns', icon: 'fas fa-bahai' },
    { id: 11, name: 'Forms', link: 'forms', icon: 'fas fa-basketball-ball' },
    { id: 12, name: 'List-group', link: 'list-group', icon: 'fab fa-battle-net' },
    { id: 13, name: 'Modal', link: 'modal', icon: 'fab fa-canadian-maple-leaf' },
    { id: 14, name: 'Pagination', link: 'pagination', icon: 'far fa-address-card' },
    { id: 15, name: 'Popovers', link: 'popovers', icon: 'fab fa-jedi-order' },
    { id: 16, name: 'Progress', link: 'progress', icon: 'fab fa-galactic-republic' },
    { id: 17, name: 'Spinners', link: 'spinners', icon: 'fab fa-empire' },
    { id: 18, name: 'Tables', link: 'tables', icon: 'fas fa-chart-line' },
    { id: 19, name: 'Toasts', link: 'toasts', icon: 'fas fa-cogs' },
    { id: 20, name: 'Tooltips', link: 'tooltips', icon: 'fab fa-edge' },
    { id: 21, name: 'Typography', link: 'typography', icon: 'fas fa-dove' },
  ];
