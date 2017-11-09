import React from 'react';
import PropTypes from 'prop-types';

export class Comments extends React.Component {
  static propTypes = {
    elementId: PropTypes.string,
    options: PropTypes.shape({
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      limit: PropTypes.number,
      attach: PropTypes.oneOf([
        false,
        'graffiti',
        'photo',
        'audio',
        'video',
        'link',
        '*',
      ]),
      autoPublish: PropTypes.oneOf([0, 1]),
      mini: PropTypes.oneOf([0, 1, 'auto']),
      norealtime: PropTypes.oneOf([0, 1]),
      pageUrl: PropTypes.string,
    }),
    pageId: PropTypes.number,
    onNewComment: PropTypes.func,
    onDeleteComment: PropTypes.func,
  };

  static defaultProps = {
    elementId: 'vk_comments',
    options: {
      height: 0,
      limit: 10,
      attach: '*',
      autoPublish: 0,
      mini: 'auto',
      norealtime: 0,
    },
    onNewComment: () => {},
    onDeleteComment: () => {},
  };

  mount() {
    const {
      vk,
      elementId,
      options,
      pageId,
      onNewComment,
      onDeleteComment,
    } = this.props;
    vk.Widgets.Comments(elementId, options, pageId);
    vk.Observer.subscribe(
      'widgets.comments.new_comment',
      (num, last_comment, date, sign) =>
        onNewComment(num, last_comment, date, sign),
    );
    vk.Observer.subscribe('widgets.comments.delete_comment', onDeleteComment);
  }

  componentDidMount() {
    this.mount();
  }

  render() {
    const { elementId } = this.props;
    return <div id={elementId} />;
  }
}
