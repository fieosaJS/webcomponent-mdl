import {
  BaseCustomElement,
  reflectPropertiesToAttributes,
} from '../utils';

class MaterialListItemAction extends BaseCustomElement {

  createdCallback(children) {
    this.classList.add('mdl-list__item-secondary-content');
    this._info = <span class="mdl-list__item-secondary-info"></span>;
    this._actions = <span class="mdl-list__item-secondary-action">{children}</span>;
    <this>
      {this._info}
      {this._actions}
    </this>
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this._info.textContent = this.info;
  }

}

export default reflectPropertiesToAttributes(
  MaterialListItemAction,
  [
    { propName: 'info', propType: String },
  ]
);
