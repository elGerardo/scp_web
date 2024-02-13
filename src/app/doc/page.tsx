import Link from "next/link";

function Doc() {
  return (
    <div className="container d-flex position-relative mt-5">
      <div className="w-25 position-sticky">
        <h2 className="m-0">Content</h2>
        <Link href="#information" className="text-black d-block">
          Information
        </Link>
        <Link href="#fetching" className="text-black d-block">
          Fetching
        </Link>
        <Link href="#scp" className="text-black d-block">
          SCP
        </Link>
        <Link href="#classes" className="text-black d-block">
          Classes
        </Link>
        <Link href="#interviews" className="text-black d-block">
          Interviews
        </Link>
      </div>
      <div className="w-75">
        <h2 className="m-0">Information</h2>
        <p>
          {/* eslint-disable react/no-unescaped-entities */}
          This API was done with the intention to be a little project to
          practice Laravel and ReactJS, but currently I have the intention to
          grow up this API in order to be the first SCP API provider with the
          most complety information about the SCP world. This API is accesible
          only by HTTP methods and it's not needed an authentication to consume.
        </p>
        <div id="information" className="bg-gray rounded text-white py-1 px-4">
          <p>URL Endpoint Structure</p>
          <p>BaseUrl: {process.env.NEXT_PUBLIC_API_BASE_URL}</p>
          <p>Model: scp</p>
          <p>Params: ?limit=10</p>
          <p>{`${process.env.NEXT_PUBLIC_API_BASE_URL}scp?limit=10`}</p>
        </div>
        <div
          id="fetching"
          className="bg-gray rounded text-white py-1 px-4 mt-5"
        >
          <p>Fetching to an Endpoint</p>
          <p>
            return fetch(`{process.env.NEXT_PUBLIC_API_BASE_URL}
            scp?limit=10`).then((response) ={">"} response.json())
          </p>
        </div>

        <div>
          <h3 className="text-black">
            SCP <span className="text-gray">(model)</span>
          </h3>
          <p className="m-0 p-0">Information about the SCP's</p>
          <p className="m-0 p-0">Avilable Methods [GET]</p>
          <table className="w-100">
            <thead>
              <tr>
                <th>Endpoint</th>
                <th>Description</th>
                <th>Params</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>v1/scp</td>
                <td>Get All SCP's</td>
                <td>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Datatype</th>
                        <th>Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>limit</td>
                        <td>integer</td>
                        <td>v1/scp?limit=10</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>v1/scp/{"{{scp_number}}"}</td>
                <td>Get information of a certain SCP</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Doc;
