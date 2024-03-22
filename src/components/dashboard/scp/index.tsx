import Form from "@/components/form";
import Input from "@/components/input";
import Button from "@/components/button";
import { FormEvent, useEffect, useRef, useState } from "react";
import Textarea from "@/components/textarea";
import ListBox from "@/components/listbox";

export default function SCP({
  isRequesting = false,
  onSubmit,
  categoryCatalog = [{ value: null, label: "Select a Category..." }],
}: {
  isRequesting?: boolean
  categoryCatalog?: Array<any>;
  onSubmit?: (event: object) => void;
}) {
  const id = useRef();
  const name = useRef();
  const [description, setDescription] = useState("");
  const picture = useRef();

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit({
        ...(id.current !== undefined
          ? { id: id.current["value"] }
          : { id: null }),
        ...(name.current !== undefined
          ? { name: name.current["value"] }
          : { name: null }),
        ...(picture.current !== undefined
          ? { picture: picture.current["value"] }
          : { picture: null }),
        description,
      });
    }
  };

  const handleOnChangeDescription = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(e.target.value);
  };

  return (
    <Form onSubmit={(event) => handleOnSubmit(event)} className="flex flex-col">
      <h2 className="my-5 text-2xl font-bold">SCP</h2>
      <div className="flex w-full">
        <div className="w-full mr-4 mb-4">
          <label htmlFor="scp_name">SCP Name</label>
          <Input
            id="scp_name"
            className="w-full"
            required
            placeholder="SCP Name..."
            inputRef={name}
          />
        </div>
        <div className="w-1/3 mb-4">
          <label className="block" htmlFor="scp_number">
            SCP Number
          </label>
          <Input
            id="scp_number"
            className="w-full"
            type="number"
            required
            placeholder="SCP Number..."
            inputRef={id}
          />
        </div>
      </div>
      <label htmlFor="scp_description">SCP Description</label>
      <Textarea
        id="scp_description"
        className="mb-4"
        placeholder="SCP Description..."
        value={description}
        onChange={(data: React.ChangeEvent<HTMLInputElement>) =>
          handleOnChangeDescription(data)
        }
      />
      <label>Categories</label>
      <ListBox data={categoryCatalog} />
      <label className="mt-4" htmlFor="scp_picture_url">
        SCP Picture URL
      </label>
      <Input
        id="scp_picture_url"
        className="mb-4"
        required
        placeholder="SCP Picture URL..."
        inputRef={picture}
      />
      <div>
        <Button kind="primary" className="w-2/12 py-2">
          Save
        </Button>
      </div>
    </Form>
  );
}
