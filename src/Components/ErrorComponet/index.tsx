interface Props {
  /**
   * The text to display as the error message.
   */
  errorText: string;
}

/**
 * Component that displays an error message.
 */
const ErrorComponent = ({ errorText }: Props) => {
  return <div>{errorText}</div>;
};

export default ErrorComponent;
