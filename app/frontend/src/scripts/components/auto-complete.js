import React from 'react';
import PropTypes from 'prop-types';
import { bindAll, throttle } from 'lodash';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    bindAll(this, [
      'hideItems',
      'onSelectIndex',
      'onKeyDown',
      'onClickItem',
      'onChangeInput'
    ]);
    this.state = {
      isOpen: false,
      loading: false,
      items: [],
      index: -1,
      value: props.value
    };
    this.keyDownHandlers = {
      ArrowDown() {
        if (!this.state.isOpen && this.state.items.length) {
          this.setState({
            isOpen: true
          });
        } else {
          this.moveSelectedOption(1);
        }
      },
      ArrowUp() {
        this.moveSelectedOption(-1);
      },
      Enter() {
        var { isOpen, index } = this.state;
        if (isOpen && index > -1) {
          this.onSelectIndex(index);
        }
      },
      Escape() {
        this.hideItems();
      }
    };

    this.suggestItems = throttle(
      value => {
        this.setState({
          loading: true
        });
        this.props.onChange(value);
      },
      200,
      { leading: false }
    );
  }

  onChangeInput(e) {
    const value = e.target.value;
    this.setState({ value });
    this.suggestItems(value);
  }

  setItems(items) {
    this.setState({
      isOpen: true,
      loading: false,
      items: items,
      index: items.length ? 0 : -1
    });
  }

  hideItems() {
    this.setState({
      isOpen: false,
      loading: false
    });
  }

  // componentWillUpdate(nextProps, { isOpen }) {
  //   const prevIsOpen = this.state.isOpen;
  //   if (prevIsOpen && !isOpen) {
  //     document.removeEventListener('click', this.hideItems);
  //   } else if (!prevIsOpen && isOpen) {
  //     document.addEventListener('click', this.hideItems);
  //   }
  // }

  onClickItem(e) {
    var _index = +e.currentTarget.getAttribute('data-index');
    this.onSelectIndex(_index);
  }

  onSelectIndex(index) {
    var item = this.state.items[index];
    var newInputValue = this.props.onSelect(item);
    this.setState({ value: newInputValue || '' });
    this.hideItems();
  }

  onKeyDown(event) {
    const handler = this.keyDownHandlers[event.key];
    if (handler) {
      event.preventDefault();
      handler.call(this, event);
    }
  }

  // select the next or previous option
  // @param delta +1 or -1 to move to the next or previous choice
  moveSelectedOption(delta) {
    var { index, items } = this.state;
    if (!items.length) {
      index = -1;
    } else {
      index = ((index || 0) + delta) % items.length;
      if (index < 0) {
        index = 0;
      }
    }
    this.setState({
      index: index,
      isOpen: true
    });
  }

  renderItems() {
    const { items, index, isOpen } = this.state;
    const { renderItem } = this.props;
    const $empty =
      items && items.length ? (
        undefined
      ) : (
        <div className="autocomplete-li empty">{this.props.emptyMessage}</div>
      );
    return !isOpen ? (
      undefined
    ) : (
      <div className="autocomplete-list" onMouseOver={this.onMouseOver}>
        {$empty ||
          items.map((item, _index) => {
            return (
              <div
                className={
                  'autocomplete-li' + (index === _index ? ' selected' : '')
                }
                key={_index}
                onClick={this.onClickItem}
                data-index={_index}
              >
                {renderItem({ item, highlighted: index === _index })}
              </div>
            );
          })}
      </div>
    );
  }

  render() {
    const {
      renderItem,
      onSelect,
      onChange,
      emptyMessage,
      value: defaultValue,
      ...inputProps
    } = this.props;
    const { value } = this.state;
    return (
      <div className="autocomplete">
        <input
          type="text"
          ref="input"
          className="autocomplete-input"
          autoComplete="off"
          aria-autocomplete="list"
          value={value}
          {...inputProps}
          onChange={this.onChangeInput}
          onKeyDown={this.onKeyDown}
        />
        {this.renderItems()}
        {this.state.loading ? <div className="loading" /> : undefined}
      </div>
    );
  }
}

Autocomplete.propTypes = {
  renderItem: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  emptyMessage: PropTypes.string,
  value: PropTypes.string
};

Autocomplete.defaultProps = {
  emptyMessage: 'No results Found',
  value: ''
};

export default Autocomplete;
