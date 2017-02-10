import React from 'react';

export const withHooks = ComposedComponent => {
  class MountHooksHOC extends React.Component
  {
    componentWillMount () {
      if (this.props.onMount) this.props.onMount(this.props.onMountParams);
    }

    componentWillUnmount () {
      if (this.props.onUnmount) this.props.onUnmount(this.props.onUnmountParams);
    }

    render () {
      const { onMount, onUnmount, ...other } = this.props; // eslint-disable-line
      return <ComposedComponent { ...other } />;
    }
  }

  MountHooksHOC.propTypes = {
    onMount: React.PropTypes.func,
    onUnmount: React.PropTypes.func,
    onMountParams: React.PropTypes.any,
    onUnmountParams: React.PropTypes.any
  };

  return MountHooksHOC;
};
