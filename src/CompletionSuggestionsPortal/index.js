import React, { Component } from 'react';
import { Link } from 'react-router';

export default class CompletionSuggestionsPortal extends Component {

  state = {
    options: {
      trueLinks: false,
      linkPrefix: '/',
    }
  }

  componentWillMount() {
    this.props.store.register(this.props.offsetKey);
    this.updatePortalClientRect(this.props);

    // trigger a re-render so the MentionSuggestions becomes active
    this.props.setEditorState(this.props.getEditorState());
  }

  componentWillReceiveProps(nextProps) {
    this.updatePortalClientRect(nextProps);
  }

  componentWillUnmount() {
    this.props.store.unregister(this.props.offsetKey);
  }

  updatePortalClientRect(props) {
    this.props.store.updatePortalClientRect(
      props.offsetKey,
      () => (
        this.refs.searchPortal.getBoundingClientRect()
      ),
    );
  }

  showHashTag = () => {
    const { options, children } = this.props;
    const config = {...this.state.options,...options};
    const { trueLinks, blockClassName, linkPrefix } = config;

    if (!trueLinks)
      return (
        <span ref="searchPortal" className={`${blockClassName || ''}`}>
          { children }
        </span>
      );

    else
      return (
        <Link to={`${linkPrefix}${children}`} ref="searchPortal" className={`${blockClassName || ''}`}>
          { children }
        </Link>
      );
  }

  render() {
    return this.showHashTag();
  }
}
