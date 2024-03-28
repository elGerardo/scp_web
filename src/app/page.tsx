"use client";
import Dropdown from "@/components/dropdown";
import Input from "@/components/input";
import Button from "@/components/button";
import { useEffect, useRef, useState } from "react";
import { JsonViewer } from "@textea/json-viewer";
import SCPService from "@/services/SCPService";
import Listbox from "@/components/listbox";

export default function Home() {
  //Environments
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  //States
  const query = useRef();
  const [model, setModel] = useState("scp");
  const [json, setJson] = useState({});

  //Handlers
  const handleChange = (data: any) => {
    setModel(data["value"]);
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
          className="w-full rounded-none rounded-l border-r-0"
          type="text"
          defaultValue={`${API_BASE_URL}/v1`}
          disabled
        />
        <Listbox
          onChange={(data: object) => handleChange(data)}
          className="!rounded-none"
          data={[
            { label: "scp", value: "scp" },
            { label: "interviews", value: "interviews" },
            { label: "category", value: "category" },
            { label: "enemies", value: "enemies" },
          ]}
        />
        <Input
          className="w-10/12 rounded-none !border-0 !border-t-2 !border-b-2"
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
