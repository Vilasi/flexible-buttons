export default function Button({ children, mode = 'filled', Icon, ...props }) {
  // Todo: Build this component!
  // !!! Important:
  // Wrap the icon with a <span className="button-icon"> to achieve the target look
  // Also wrap the children prop with a <span>

  //   const styling = 'filled-button';
  let styling = `${mode}-button button`;
  let button = (
    <button className={styling} {...props}>
      {children}
    </button>
  );

  if (Icon) {
    styling += ' icon-button';

    button = (
      <button className={styling} {...props}>
        <span className={'button-icon'}>
          <Icon />
        </span>
        {children}
      </button>
    );
  }

  //   if ()
  return button;
}
