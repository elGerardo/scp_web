import Table from "@/components/table";
import Link from "next/link";
import docData from "./data/docData";

export default function Doc() {
  return (
    <>
      <div className="container">
        <div className="w-100 mb-5">
          <h2 className="m-0">Content</h2>
          <Link href="#information" className="text-black mr-4">
            Information
          </Link>
          <Link href="#fetching" className="text-black mr-4">
            Fetching
          </Link>
          <Link href="#scp" className="text-black mr-4">
            SCP
          </Link>
          <Link href="#categories" className="text-black mr-4">
            Categories
          </Link>
          <Link href="#interviews" className="text-black mr-4">
            Interviews
          </Link>
        </div>
      </div>
      <div className="container justify-content-right position-relative mt-5">
        <div className="w-100">
          <h2 className="m-0">Information</h2>
          <p className="m-0">
            {/* eslint-disable react/no-unescaped-entities */}
            This API was done with the intention to be a little project to
            practice Laravel and ReactJS, but currently I have the intention to
            grow up this API in order to be the first SCP API provider with the
            most complety information about the SCP world. This API is accesible
            only by HTTP methods and it's not needed an authentication to
            consume.
          </p>
          <div
            id="information"
            className="bg-gray rounded text-white py-1 px-4"
          >
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
          {docData.map(({ id, model, description, methods, data }, index) => {
            return (
              <div key={`${index}-header`} className="mt-5" id={id}>
                <h3 className="m-0 text-black">{model}</h3>
                <p className="m-0 p-0">{description}</p>
                <p className="m-0 p-0">
                  Avilable Methods [{methods.join(", ")}]
                </p>
                <Table>
                  <thead>
                    <tr>
                      <th>Endpoint</th>
                      <th>Description</th>
                      <th>Params</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map(({ endpoint, description, params }, index) => {
                      return (
                        <tr key={`${index}-data-scp`}>
                          <td className="w-25 p-3">{endpoint}</td>
                          <td className="w-50 p-3">{description}</td>
                          <td className="w-25">
                            {params.length > 0 && (
                              <Table className="w-100">
                                <thead>
                                  <tr>
                                    <th>Name</th>
                                    <th>Datatype</th>
                                    <th>Example</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {params.map(
                                    ({ name, datatype, example }, index) => {
                                      return (
                                        <tr
                                          key={`${index}-params-scp`}
                                          className="bg-info"
                                        >
                                          <td className="text-center">
                                            {name}
                                          </td>
                                          <td className="text-center">
                                            {datatype}
                                          </td>
                                          <td className="pl-1">{example}</td>
                                        </tr>
                                      );
                                    }
                                  )}
                                </tbody>
                              </Table>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
