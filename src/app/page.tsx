"use client";
import Dropdown from "@/components/dropdown";
import Input from "@/components/input";
import Button from "@/components/button/button";
import { useRef, useState } from "react";
import { JsonViewer } from "@textea/json-viewer";
import SCPService from "@/services/SCPService";

export default function Home() {
  //Environments
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  //States
  const query = useRef();
  const [model, setModel] = useState("scp");
  const [json, setJson] = useState({})

  //Handlers
  const handleChange = (event: any) => {
    setModel(event.target.value);
  };

  const handleOnClickSend = async () => {
    let findText = ''
    if(query.current){
      if(query.current['value'] !== ''){
        findText = `/${query.current['value']}`
  
        if(query.current['value'][0] === '?'){
          findText = query.current['value']
        }
      }
    }

    const url = `${API_BASE_URL}${model}${findText}`
    const response = await SCPService.get(url)
    setJson(response)
  }

  useState(() => {
    async function init(){
      const response = await SCPService.get(`${API_BASE_URL}${model}`)
      setJson(response)
    }

    init()
  })

  return (
    <main className="container">
      <div className="d-flex mt-5 mb-5">
        <Input
          className="rounded-left"
          type="text"
          defaultValue={API_BASE_URL}
          disabled
        />
        <Dropdown onChange={handleChange} defaultValue={model} className="rounded-0">
          <Dropdown.Item value="scp">scp</Dropdown.Item>
          <Dropdown.Item value="interviews">interviews</Dropdown.Item>
          <Dropdown.Item value="category">category</Dropdown.Item>
        </Dropdown>
        <Input
          className="rounded-right"
          type="text"
          inputRef={query}
          placeholder="049 or ?page=10&limit=1"
        />
        <Button onClick={() => handleOnClickSend()}>Send</Button>
      </div>
      <JsonViewer
        rootName={false}
        displayDataTypes={false}
        displaySize={false}
        value={json}
      />
    </main>
  );
}
