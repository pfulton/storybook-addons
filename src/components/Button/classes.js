function ButtonClasses(props) {
  const names = ['btn'];

  if (props.filledColor) names.push(`btn--filled-${props.filledColor}`);
  if (props.outlinedColor) names.push(`btn--outlined-${props.outlinedColor}`);
  if (props.isSmall) names.push('btn--small');
  if (props.isFullWidth) names.push('btn--full-width');
  if (props.isCenter) names.push('btn--center');
  if (props.isWarning) names.push('btn--warning');
  if (props.isCancel) names.push('btn--cancel');
  if (props.isNav) names.push('btn--nav');
  if (props.isToggle) names.push('btn--toggle');
  if (props.isNormalCase) names.push('btn--normalcase');
  if (props.className) names.push(`${props.className}`);
  if (props.buttonIcon) names.push('has-icon');
  if (props.isDisabled) names.push('is-disabled');

  return names.join(' ');
}

export default ButtonClasses;
