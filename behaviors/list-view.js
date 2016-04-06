goog.provide('coligo.behaviors.ListView');



coligo.behaviors.ListView = {

  properties: {

    /**
     * 
     */
    list: {
      type: Array,
      value: () => []
    },

    listPath: {
      type: String,
      value: ''
    },

    selectedCount_: {
      type: Number,
      value: 0
    },

  },

  listeners: {
    'dispatch-action': 'onDispatchAction_',
    'delete-selected': 'onDeleteSelected_'
  },

  observers: [
    'itemChanged_(list.*)',
  ],

  ready: function() {
  },

  pageWatcher(detail) {
    if (this.fetchAction && detail.pageSelected) {
      this.emitAction({
        type: this.fetchAction
      });
    }
    if (detail.pageDeselected) {
    }
  },

  itemChanged_(change) {
    if (change.path == 'list' ||
        change.path == 'list.splices' ||
        change.path.endsWith('$selected')) {
      this.updateSelectedCount_();
    }
  },

  updateSelectedCount_() {
    let selectedCount = 0;
    this.get('list').forEach(elem => {
      selectedCount += elem.$selected ? 1 : 0;
    });
    this.selectedCount_ = selectedCount;
  },

  onDispatchAction_: function(event, details) {
    if (this.listPath) {
      details.listPath = this.listPath;
    }
  },

  onDeleteSelected_(event) {
    console.log('on delete selected');
    if (this.deleteAction) {
      this.list.forEach(item => {
        if (item.$selected) {
          this.emitAction({
            type: this.deleteAction,
            id: item.id
          });
        }
      });
    } else {
      console.warn('delete action is not defined')
    }
  }

}
