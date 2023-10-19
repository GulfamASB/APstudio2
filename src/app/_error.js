

function Error({ statusCode }) {
    return (
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </p>
    );
  }
  
  export async function getServerSideProps({ res, err }) {
    let statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  
    if (statusCode === 404) {
      statusCode = 501;
      res.statusCode = 501;
      res.end();
    }
  
    return { statusCode };
  }
  
  export default Error;