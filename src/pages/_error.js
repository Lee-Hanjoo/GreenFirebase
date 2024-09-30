function Error({ statusCode }) {
    console.log(statusCode)
    return (
      <p>
        {statusCode !== 404
          ? `An error ${statusCode} occurred on server`
          : 'An error 404 occurred on client'}
      </p>
    )
  }
   
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
   
  export default Error