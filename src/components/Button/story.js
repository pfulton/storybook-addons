import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './index';

storiesOf('Buttons', module)
  .add('Default', () => {
    const props = {
    };

    return (
      <Button {...props}>
        Default Button
      </Button>
    );
  })
  .add('Link Default', () => {
    const props = {
      buttonType: 'link',
      to: '#test',
    };

    return (
      <Button {...props}>
        Default Link
      </Button>
    );
  })
  .add('Blue Filled', () => {
    const props = {
      filledColor: 'blue',
    };

    return (
      <Button {...props}>
        Blue Filled Button
      </Button>
    );
  })
  .add('Navy Filled', () => {
    const props = {
      filledColor: 'navy',
    };

    return (
      <Button {...props}>
        Navy Filled Button
      </Button>
    );
  })
  .add('Orange Filled', () => {
    const props = {
      filledColor: 'orange',
    };

    return (
      <Button {...props}>
        Orange Filled Button
      </Button>
    );
  })
  .add('Green Filled', () => {
    const props = {
      filledColor: 'green',
    };

    return (
      <Button {...props}>
        Green Filled Button
      </Button>
    );
  })
  .add('Blue Outlined', () => {
    const props = {
      outlinedColor: 'blue',
    };

    return (
      <Button {...props}>
        Blue Outlined Button
      </Button>
    );
  })
  .add('Navy Outlined', () => {
    const props = {
      outlinedColor: 'navy',
    };

    return (
      <Button {...props}>
        Navy Outlined Button
      </Button>
    );
  })
  .add('Orange Outlined', () => {
    const props = {
      outlinedColor: 'orange',
    };

    return (
      <Button {...props}>
        Orange Outlined Button
      </Button>
    );
  })
  .add('Green Outlined', () => {
    const props = {
      outlinedColor: 'green',
    };

    return (
      <Button {...props}>
        Green Outlined Button
      </Button>
    );
  })
  .add('Full Width', () => {
    const props = {
      isFullWidth: true,
    };

    return (
      <Button {...props}>
        Full Width Button
      </Button>
    );
  })
  .add('Warning', () => {
    const props = {
      isWarning: true,
    };

    return (
      <Button {...props}>
        Warning Button
      </Button>
    );
  })
  .add('Cancel', () => {
    const props = {
      isCancel: true,
    };

    return (
      <Button {...props}>
        Cancel Button
      </Button>
    );
  })
  .add('Disabled', () => {
    const props = {
      isDisabled: true,
    };

    return (
      <Button {...props}>
        Disabled Button
      </Button>
    );
  })
  .add('Navigation', () => {
    const props = {
      isNav: true,
    };

    return (
      <Button {...props}>
        Navigation Button
      </Button>
    );
  })
  .add('Normal Case', () => {
    const props = {
      isNormalCase: true,
    };

    return (
      <Button {...props}>
        Normal Case Button
      </Button>
    );
  })
  .add('Button With Icon', () => {
    const props = {
      buttonIcon: 'compare-profile',
      outlinedColor: 'green',
      isNormalCase: true,
    };

    return (
      <Button {...props}>
        Button With Icon
      </Button>
    );
  });
