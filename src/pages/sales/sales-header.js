const header = [
  {
    id: 'id',
    title: 'ID',
    sortable: false
  },
  {
    id: 'user',
    title: 'Клиент',
    sortable: false
  },
  {
    id: 'createdAt',
    title: 'Дата',
    sortable: true,
    sortType: 'number',
    template: data => {
      return `
          <div class="sortable-table__cell">
            ${new Date(data).toLocaleString('ru', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            })}
          </div>
        `;
    }
  },
  {
    id: 'totalCost',
    title: 'Стоимость',
    sortable: false,
    template: data => {
      return `
          <div class="sortable-table__cell">
            $${data}
          </div>
        `;
    }
  },
  {
    id: 'delivery',
    title: 'Статус',
    sortable: false
  }
];

export default header;
