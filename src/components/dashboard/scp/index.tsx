import Form from "@/components/form";
import Input from "@/components/input";
import Button from "@/components/button";
import { FormEvent, useRef, useState } from "react";
import Textarea from "@/components/textarea";

export default function SCP({
  onSubmit,
}: {
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
        ...(id.current !== undefined ? { id: id.current["value"] } : { id: null }),
        ...(name.current !== undefined ? { name: name.current["value"] } : { name: null }),
        ...(picture.current !== undefined ? { picture: picture.current["value"] } : { picture: null }),
        description
      });
    }
  };

  const handleOnChangeDescription = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(e.target.value);
  };

  return (
    <Form onSubmit={(event) => handleOnSubmit(event)}>
      <Input required placeholder="SCP Number..." inputRef={id} />
      <Input required placeholder="SCP Name..." inputRef={name} />
      <Textarea
        placeholder="SCP Description..."
        value={description}
        onChange={(data: React.ChangeEvent<HTMLInputElement>) =>
          handleOnChangeDescription(data)
        }
      />
      <Input required placeholder="SCP Picture URL..." inputRef={picture} />
      <Button kind="primary">Save</Button>
    </Form>
  );
}
