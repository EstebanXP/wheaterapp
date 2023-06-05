
interface Props{
    errorText: string,
}

const ErrorComponent = ({errorText}:Props) => {
  return (
    <div>{errorText}</div>
  )
}

export default ErrorComponent