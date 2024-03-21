"use client";
import Dropdown from "@/components/dropdown";
import Input from "@/components/input";
import Button from "@/components/button";
import { useEffect, useRef, useState } from "react";
import { JsonViewer } from "@textea/json-viewer";
import SCPService from "@/services/SCPService";
import UserService from "@/services/UserService";

export default function Home() {
  //Environments
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  //States
  const query = useRef();
  const [model, setModel] = useState("scp");
  const [json, setJson] = useState({});

  //Handlers
  const handleChange = (event: any) => {
    setModel(event.target.value);
  };

  const handleOnClickSend = async () => {
    let findText = "";
    if (query.current) {
      if (query.current["value"] !== "") {
        findText = `/${query.current["value"]}`;

        if (query.current["value"][0] === "?") {
          findText = query.current["value"];
        }
      }
    }

    const url = `${API_BASE_URL}/v1/${model}${findText}`;
    const response = await SCPService.get(url);
    setJson(response);
  };

  useEffect(() => {
    async function init() {
      const response = await SCPService.get(`${API_BASE_URL}/v1/${model}`);
      setJson(response);
    }

    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="container">
      <div className="flex mt-5 mb-5">
        <Input
          className="w-2/6 rounded-none rounded-l"
          type="text"
          defaultValue={`${API_BASE_URL}/v1`}
          disabled
        />
        <Dropdown
          onChange={handleChange}
          defaultValue={model}
          className="w-3/12 rounded-none !border-0 !border-t-2 !border-b-2 !border-r-2"
        >
          <Dropdown.Item value="scp">scp</Dropdown.Item>
          <Dropdown.Item value="interviews">interviews</Dropdown.Item>
          <Dropdown.Item value="category">category</Dropdown.Item>
        </Dropdown>
        <Input
          className="w-2/6 rounded-none !border-0 !border-t-2 !border-b-2"
          type="text"
          inputRef={query}
          placeholder="049 or ?page=10&limit=1"
        />
        <Button
          className="px-4 !rounded-none !rounded-r"
          onClick={() => handleOnClickSend()}
        >
          Send
        </Button>
      </div>
      <JsonViewer
        className="text-base"
        rootName={false}
        displayDataTypes={false}
        displaySize={false}
        value={json}
      />
    </main>
  );
}
